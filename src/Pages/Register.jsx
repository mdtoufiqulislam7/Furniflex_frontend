import React, { useState } from 'react';
import background from '../images/login/bg.png';
import icon from '../images/login/icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registeruser } from '../redux_toolkit/auth_slice';

export default function SignUp() {
    const [name, setName] =useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {error} = useSelector((state)=>state.user)

    const handleSubmit =async (e) => {
        e.preventDefault();
        const result = await dispatch(registeruser({name,email,phone,password}))
        if(result.meta.requestStatus === 'fulfilled'){
          navigate('/login')
        }
    }



  return (
    <>
      <div className='grid grid-cols-2 bg-[rgba(250,250,250,1)]'>
        <div className='mt-24 ml-24 w-[500px] h-auto border-[1px] p-6'>
          <div className='m-5 flex flex-col gap-4'>
            <h1 className='text-3xl font-bold text-black ml-40'>Welcome To</h1>
            <h1 className='text-5xl font-bold text-black ml-36'>Furni<span className='text-5xl text-blue-500'>Flex</span></h1>
            <p className=' ml-28' style={{color: 'rgba(112, 112, 112, 1)'}}>Signup for purchase your desire products</p>

            {/* Username and Email Inputs in a row */}
            <div className='grid grid-cols-2 gap-4'>
              {/* Username Input */}
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={name}
                className="w-full h-[50px] p-4 text-lg rounded-md border border-gray-300 bg-white"
                onChange={(e) => setName(e.target.value)}
              />
              {/* Email Input */}
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                className="w-full h-[50px] p-4 text-lg rounded-md border border-gray-300 bg-white"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Phone Input */}
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              className="w-[452px] h-[50px] mt-3 p-4 text-lg rounded-md border border-gray-300 bg-white"
              onChange={(e) => setPhone(e.target.value)}
            />
            {/* Password Input */}
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              className="w-[452px] h-[50px] mt-3 p-4 text-lg rounded-md border border-gray-300 bg-white"
              onChange={(e) => setPassword(e.target.value)}
            />
            
            {/* Terms and Policy */}
            <span className=' '>I agree to the Terms & Policy</span>

            {/* Sign Up Button */}
            <button className='w-[452px] h-[56px] bg-black rounded-md text-white' onClick={handleSubmit} >Sign Up</button>

            {/* Social Sign In */}
            <div className='grid grid-cols-2 gap-12 mt-4'> 
              <div className='w-[218px] h-[52px] border-[1px] p-[14px 20px] flex items-center justify-center gap-2'>
                <FontAwesomeIcon icon={faGoogle} className="w-5 h-5" />
                <span>Sign up with Google</span>
              </div>
              <div className='w-[218px] h-[52px] border-[1px] p-[14px 20px] flex items-center justify-center gap-2'>
                <FontAwesomeIcon icon={faApple} className="w-5 h-5" />
                <span>Sign up with Apple</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side with Background */}
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
            {error.error}
          </span>
        )}
      </div>
    </>
  );
}
