import React from 'react'
import { Link } from "react-router-dom";

function Headers() {
  return (
    <header >
      <div className='bg-white text-black fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 shadow-lg z-50'>
        <Link to='/Hero' className='  text-amber-300 text-[18px]  md:text-2xl font-bold'>Photography</Link>
        <nav className='hidden md:flex items-center gap-6 text-sm font-semibold'>

          <Link className='hover:text-amber-300 text-gray-600' to='/Hero'>Home</Link>
          <Link className='hover:text-amber-300 text-gray-600' to='/About'>About</Link>
          <Link className='hover:text-amber-300 text-gray-600' to='/Profile'>Profile</Link>
          <Link className='hover:text-amber-300 text-gray-600' to='/Service'>Services</Link>
          <Link className='hover:text-amber-300 text-gray-600' to='/Packages'>packages</Link>
          <Link className='hover:text-amber-300 text-gray-600' to='/Contect'>Contect</Link>
          <Link className='hover:text-amber-300 text-gray-600' to='/Oders'>Oders</Link>
        </nav>
        <div className='md:hidden'>
          <button className='md:hidden text-3xl'>
            ☰
          </button>
        </div>
        <Link to='/Contect' className=' bg-amber-300 text-white  rounded-xl shadow-lg  hover:bg-amber-400 w-24 h-9 flex items-center justify-center font-semibold '>Booking</Link>
      </div>
    </header>
  )
}

export default Headers