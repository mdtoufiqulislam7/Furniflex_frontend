import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaMinus, FaDollarSign } from 'react-icons/fa';
import { getsinleproduct } from '../redux_toolkit/product_slice';
import { useParams } from 'react-router-dom';

export default function AddToCart() {
  const { error, products, status } = useSelector((state) => state.item);
  const dispatch = useDispatch();
  const [cartItem, setCartItem] = useState(null); // Changed to handle a single product
  const { id } = useParams();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getsinleproduct({ id }));
    }

    // If products is an object (single product), set it to cartItem
    if (products && typeof products === 'object' && !Array.isArray(products)) {
      setCartItem({
        ...products,
        quantity: 1, // Initial quantity
      });
    }
  }, [dispatch, status, products, id]);

  const handleIncrement = () => {
    setCartItem((prevItem) => ({
      ...prevItem,
      quantity: prevItem.quantity + 1,
    }));
  };

  const handleDecrement = () => {
    setCartItem((prevItem) =>
      prevItem.quantity > 1
        ? { ...prevItem, quantity: prevItem.quantity - 1 }
        : prevItem
    );
  };

  // Calculate total price based on the single cartItem
  const totalproducttamount = cartItem
    ? cartItem.new_price * cartItem.quantity
    : 0;

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <div className="flex">
      <div className="mt-10 ml-16">
        {cartItem && (
          <div
            key={cartItem.id}
            className="flex items-center justify-between w-[700px] p-4 border border-gray-300 mb-4"
          >
            {/* Plus/Minus buttons with 3-column gap */}
            <div className="flex items-center gap-3 ml-16 ">
              <button
                onClick={handleDecrement}
                className="bg-gray-200 px-2 py-1 rounded"
              >
                <FaMinus />
              </button>
              <span>{cartItem.quantity}</span>
              <button
                onClick={handleIncrement}
                className="bg-gray-200 px-2 py-1 rounded"
              >
                <FaPlus />
              </button>
              <div className="flex gap-3">
                <img
                  src={cartItem.url}
                  alt={cartItem.title}
                  className="w-16 h-16 object-cover"
                />
                <span>{cartItem.title}</span>
              </div>
            </div>

            {/* New Price with Dollar Icon */}
            <div className="flex items-center">
              <FaDollarSign />
              <span>{cartItem.new_price}</span>
            </div>
          </div>
        )}
      </div>

      {/* Total sum */}
      <div className="mt-4 text-lg font-bold ml-96 border-cyan-300">
        <h1 className="text-3xl font-bold">Order Details</h1>
        <div className="mt-4">
          {/* Subtotal in one line */}
          <span className="inline-flex items-center">
            Subtotal:      <FaDollarSign className="ml-1" /> {totalproducttamount}
          </span>
        </div>
      </div>
    </div>
  );
}
