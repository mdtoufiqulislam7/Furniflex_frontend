import React, { useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getproduct } from '../redux_toolkit/product_slice';

export default function Product() {
  const { error, products, status } = useSelector((state) => state.item);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getproduct());
    }
  }, [dispatch, status]);

  const addtocard = (id) => {
    navigate(`/addtocard/${id}`);
    window.location.reload()
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className='flex '>
        {/* First div */}
        <div className="ml-20 mt-10 mb-10 w-[263px] h-[1000px] left-[120px] border-gray-300 p-[40px 32px 64px 0px] gap-[12px]">
          <button className='w-[231px] h-[53px] rounded-lg bg-black py-2 px-5 mt-7 text-white font-bold'>
            Rocking chair
          </button>
          <p className='w-[231px] h-[53px] py-2 px-5 mt-6'>
            <span style={{ color: 'rgba(113, 113, 113, 1)' }}>Side Chair</span>
          </p>
          <p className='w-[231px] h-[53px] py-2 px-5 mt-6'>
            <span style={{ color: 'rgba(113, 113, 113, 1)' }}>Lounge Chair</span>
          </p>
        </div>

        {/* Second div: Product cards in a grid */}
        <div className='mt-10 mb-10 ml-8 flex-grow'>
          <div className='grid grid-cols-3 gap-6'>
            {Array.isArray(products) && products.map((item, id) => (
              <div key={id} className='w-[277px] h-[484px] p-[16px] border border-gray-300 rounded-tl-[16px] shadow-lg'>
                {/* Image Section */}
                <div className='w-[245px] h-[236px] p-[16px_20.5px_15px_20.5px] border-gray-300 rounded-tl-[8px]'>
                  <img
                    src={item.url}
                    alt={''}
                    className='w-full h-full object-cover rounded-tl-[8px]'
                  />
                </div>

                {/* Title and Description */}
                <div className='px-4'>
                  <h3 className='text-xl font-bold mb-2'>{item.title}</h3>
                  <p className='text-sm text-gray-500'>{item.description}</p>
                </div>

                {/* Pricing Section (New price, Old price, Discount) */}
                <div className='px-4 mt-2'>
                  <div className='flex items-center space-x-2'>
                    {/* New Price */}
                    <span className='text-lg font-bold text-black'>
                      ${item.new_price}
                    </span>
                    {/* Old Price */}
                    <span className='text-sm text-gray-500 line-through'>
                      ${item.old_price}
                    </span>
                    {/* Discount */}
                    <span className='text-sm font-bold text-red-500'>
                      {item.discount}% Off
                    </span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div className='flex justify-center mt-6'>
                  <button
                    onClick={()=>addtocard(item._id)}
                    className='flex items-center gap-2 w-[200px] h-[48px] bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800'
                  >
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
