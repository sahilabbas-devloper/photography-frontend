import React from 'react'
import { FaInstagram,FaFacebookF,FaTelegram,FaYoutube,FaHeart } from 'react-icons/fa'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div>
        <footer className='bg-gray-800 pt-4 text-white'>
          <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 text-sm border-b border-gray-600 pb-10'>

         
        <div className='flex flex-col'>
          <h1 className='text-2xl text-yellow-400 font-semibold mb-4'>EverAfter</h1>
          <p className='text-[13px] text-gray-300 mb-3'>Capturing timeless wedding memories with passion and artistry</p>
          <div className='flex gap-3 mt-2'>
            <a href='https://www.instagram.com/sahil_abbas_10k' target="blank" rel='noopener noreferrer' className='hover:text-amber-300 hover:cursor-pointer  mr-4 w-8 h-8 rounded-full flex items-center justify-center bg-gray-600'><FaInstagram/> </a>
            <div className='hover:text-amber-300 hover:cursor-pointer mr-4 w-8 h-8 rounded-full flex items-center justify-center bg-gray-600'><FaFacebookF/></div>
            <div className='hover:text-amber-300 hover:cursor-pointer mr-4 w-8 h-8 rounded-full flex items-center justify-center bg-gray-600'><FaTelegram/></div>
            <a href='https://www.youtube.com/@funwithcode110' target="blank" rel='noopener noreferrer' className='hover:text-amber-300 hover:cursor-pointer mr-4 w-8 h-8 rounded-full flex items-center justify-center bg-gray-600'><FaYoutube/></a>
          </div>
        </div>
        <div className='flex flex-col text-center sm:text-left'>
          <h1 className='font-bold mb-6'>Quick Links</h1>
          <div className='flex flex-col text-gray-300 text-[13px]'>
          <Link className='hover:text-amber-300 mb-2' to='/Hero'>Home</Link>
          <Link className='hover:text-amber-300 mb-2' to='/About'>About</Link>
          <Link className='hover:text-amber-300 mb-2' to='/Profile'>Profile</Link>
          <Link className='hover:text-amber-300 mb-2' to='/Service'>Services</Link>
          <Link className='hover:text-amber-300 mb-2' to='/Packages'>packages</Link>
          </div>
        </div>

        <div>
          <h1 className='font-bold mb-6'>Services</h1>
          <ul className='flex flex-col  text-gray-300 text-[13px]'>
            <li className='hover:text-amber-300 mb-2'>Wedding Photography</li>
            <li className='hover:text-amber-300 mb-2'>Engageent Sessions</li>
            <li className='hover:text-amber-300 mb-2'> Pre-Wedding Shoots</li>
            <li className='hover:text-amber-300 mb-2'>Album Design</li>
            <li className='hover:text-amber-300 mb-2'>Destination Weddings</li>
          </ul>
        </div>

        <div>
           <h1 className='font-bold mb-6'>Services</h1>
            <p className='text-sm text-gray-300 mb-4 text-[13px]'>Subscribe for wedding tips and special offers.</p>
            <div className='flex'>
              <input type="email" 
              placeholder='Your email'
              className='p-3 w-full outline-none border border-amber-300 rounded-l-md text-black'
              />
              <button className='bg-amber-300 px-5 h-10 rounded-r-md font-semibold hover:bg-amber-400'>Subsscribe</button>
            </div>
          </div>
        
         </div>

         <div className='flex flex-wrap items-center justify-center gap-1 py-6 text-[12px] text-gray-300 text-center px-4'>
          <p>2023 EverAfter Wedding Photography. All rights reserved Created With </p><FaHeart className='text-amber-300 text-sm ml-1.5'/>
         </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer