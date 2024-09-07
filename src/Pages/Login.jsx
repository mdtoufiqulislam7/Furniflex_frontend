import React, { useState } from 'react';
import background from '../images/login/bg.png';
import icon from '../images/login/icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginuser } from '../redux_toolkit/auth_slice';

export default function Login() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {  error } = useSelector((state) => state.user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginuser({ name, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      navigate('/product');
      window.location.reload()
    }
  };
  
  return (
    <>
      <div className='grid grid-cols-2 bg-[rgba(250,250,250,1)]'>
        <div className='mt-24 ml-24 w-[500px] h-[619px] border-[1px] p-6'>
          <div className='m-5 flex flex-col gap-4'>
            <h1 className='text-2xl font-bold'>Welcome Back!</h1>
            <p>Enter your Credentials to access your account</p>

            
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[452px] h-[50px]  mt-3 p-4 text-lg rounded-md border border-gray-300 bg-white"
            />
            <input
              id="name"
              type="text"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[452px] h-[50px]  mt-3 p-4 text-lg rounded-md border border-gray-300 bg-white"
            />
            <span className='ml-72 text-blue-500 '>Forgot Password</span>
            <span className=' '>I agree to the Terms & Policy</span>

            <button className='w-[452px] h-[56px] bg-black rounded-md text-white' onClick={handleSubmit}>Sign In</button>
            <div className='grid grid-cols-2 gap-12 '> 
            <div className='w-[218px] h-[52px] border-[1px] p-[14px 20px] flex items-center justify-center gap-2'>
              <FontAwesomeIcon icon={faGoogle} className="w-5 h-5" />
              <span>Sign in with Google</span>
            </div>
            <div className='w-[218px] h-[52px] border-[1px] p-[14px 20px] flex items-center justify-center gap-2'>
              <FontAwesomeIcon icon={faApple} className="w-5 h-5" />
              <span>Sign in with Apple</span>
             
            </div>
            

            </div>

            
          </div>
        </div>

        <div
        className='w-[688px] h-[1024px]'
        style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
       >
  <div className='w-[445px] h-[181px] mt-[300px] ml-48 flex flex-col items-center gap-4 text-center'>
    <img src={icon} alt="" className='w-[89px] h-[85px]' />
    
    <h1 className='text-2xl text-white font-bold'>
      Furni<span className='text-2xl text-blue-500 font-bold'>Flex</span>
    </h1>

    <div className='w-full'>
      <h1 className='text-white text-sm leading-snug'>
        Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.
      </h1>
    </div>
  </div>
</div>
{error && (
          <span className="text-red-500 text-center block mt-4">
            {error}
          </span>
        )} 
      </div>
    </>
  );
}
