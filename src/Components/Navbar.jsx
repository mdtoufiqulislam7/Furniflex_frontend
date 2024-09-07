import React, { useState } from 'react';
import icon from '../images/Navbar/icon.png'; // Logo icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'; // Icons for cart and profile
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux_toolkit/auth_slice';

function Navbar() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown state for profile
  const dispatch = useDispatch()

  const productroute = () => {
    navigate('/product');
    window.location.reload();
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  const handleLogout = () => {
     dispatch(logout())
     navigate('/login')
     window.location.reload();
  };

  return (
    <>
      <nav className='flex justify-between items-center px-8 py-4 shadow-md bg-white'>
        
        {/* Logo Section */}
        <div className='flex items-center ml-14'>
          <img src={icon} alt="FurniFlex logo" className='w-10 h-10 mr-2' />
          <h1 className='text-2xl font-bold text-black'>
            Furni<span className='text-blue-500'>Flex</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className='flex space-x-8 text-lg'>
            <li className='hover:text-blue-500 cursor-pointer'>Home</li>
            <li className='hover:text-blue-500 cursor-pointer' onClick={productroute}>Products</li>
            <li className='hover:text-blue-500 cursor-pointer'>Category</li>
            <li className='hover:text-blue-500 cursor-pointer'>Custom</li>
            <li className='hover:text-blue-500 cursor-pointer'>Blog</li>
          </ul>
        </div>

        {/* Ecommerce Section */}
        <div className='flex items-center space-x-6 mr-12 relative'>
          {/* Cart Icon */}
          <div className='relative'>
            <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6 text-gray-700 cursor-pointer" />
            <span className='absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full px-2 py-[1px]'>
              2
            </span>
          </div>
          
          {/* Profile Icon with Dropdown */}
          <div className='relative'>
            <FontAwesomeIcon
              icon={faUser}
              className="w-6 h-6 cursor-pointer text-gray-700"
              onClick={toggleDropdown}
            />

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg z-50">
                <ul>
                  <li
                    className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
