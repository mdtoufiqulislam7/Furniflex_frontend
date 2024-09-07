import React from 'react'
import icon from '../images/Navbar/icon.png'; // Logo icon
export default function Footer() {
  return (
    <>
     <div className='w-[1490px] h-[490px]  top-[1422px] flex  justify-between  ' style={{backgroundColor:"rgba(14, 14, 14, 1)"}} >
     <div className='flex  ml-20 mt-11'>
          <img src={icon} alt="FurniFlex logo" className='w-10 h-10 mr-2' />
          <h1 className='text-2xl font-bold text-white '>
            Furni<span className='text-blue-500'>Flex</span>
          </h1>
     </div>


      <div className='  mt-11'>
       <h3 className='text-white font-bold'>About Us</h3>
      <ul className='mt-3'>
      <li style={{color:"rgba(129, 133, 159, 1)rgba(129, 133, 159, 1)"}}>Master Plan</li>
      <li style={{color:"rgba(129, 133, 159, 1)rgba(129, 133, 159, 1)"}}>jobs</li>
      <li style={{color:"rgba(129, 133, 159, 1)rgba(129, 133, 159, 1)"}}>Invest</li>
      <li style={{color:"rgba(129, 133, 159, 1)rgba(129, 133, 159, 1)"}}>Pressroom</li>
      <li style={{color:"rgba(129, 133, 159, 1)rgba(129, 133, 159, 1)"}}>Blog</li>
      <li style={{color:"rgba(129, 133, 159, 1)rgba(129, 133, 159, 1)"}}>content</li>
      </ul>
      </div>

      <div className='  mt-11'>
       <h3 className='text-white font-bold'>Explore EEVE</h3>
      <ul className='mt-3'>
      <li style={{color:"rgba(129, 133, 159, 1)rgba(129, 133, 159, 1)"}}>Unlock my Robot Power</li>
      <li style={{color:"rgba(129, 133, 159, 1)rgba(129, 133, 159, 1)"}}>Starlight</li>
      <li style={{color:"rgba(129, 133, 159, 1)rgba(129, 133, 159, 1)"}}>Robot Platform</li>
      <li style={{color:"rgba(129, 133, 159, 1)rgba(129, 133, 159, 1)"}}>EEVE Roadmap</li>
     
      </ul>
      </div>


       <div className='  mt-11 mr-10'>
      <h3 className='text-white font-bold'>Community & Support</h3>
      <ul className='mt-3'>
      <li style={{color:"rgba(129, 133, 159, 1)rgba(129, 133, 159, 1)"}}>Willow X Communityr</li>
      <li style={{color:"rgba(129, 133, 159, 1)rgba(129, 133, 159, 1)"}}>Developer & Maker Access</li>
      <li style={{color:"rgba(129, 133, 159, 1)rgba(129, 133, 159, 1)"}}>Special Cases</li>
     
     
      </ul>
      </div>


     </div>
    
    </>
  )
}
