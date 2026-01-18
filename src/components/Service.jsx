import React from 'react'
import { motion } from "framer-motion"
import { FaHeart } from 'react-icons/fa'
import { GiDiamondRing } from 'react-icons/gi'
import { FaImages } from 'react-icons/fa'
import { AiOutlineCheck } from 'react-icons/ai'
function Service() {
  return (
    <div>
      <div>
        <section id='Service' className='bg-orange-50 w-full py-16 px-4'>
          <div>

            <div  className='flex flex-col items-center text-center mb-12'>
              <h1 className='text-3xl text-black font-bold'>Our <span className='text-pink-400'>Service</span></h1>
              <p className='text-slate-500 text-sm mt-2'>Comprehensive wedding photography services tailored to your needs.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, right: 50 }}
                whileInView={{ opacity: 1, right: 20 }}
                transition={{ duration: 0.8 }}
                className='p-6 bg-white rounded-lg shadow-lg w-full max-w-sm mx-auto hover:border-2 border-amber-400'
              >
                <div className='w-12 h-12 bg-amber-300 rounded-full flex items-center justify-center'>
                  <GiDiamondRing className='text-white text-2xl' />
                </div>
                <h1 className='text-xl font-bold mt-3'>Full wedding</h1>
                <p className='text-sm text-slate-500 mt-1'>Complete coverage from getting ready to the last dance. we capture every moment of your spacial day.</p>
                <ul className='text-sm font-semibold text-slate-700 mt-4 '>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-amber-400 text-white rounded-full mt-1 mr-3 ml-1' /> <span>8-10 hours of coverge</span></li>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-amber-400 text-white rounded-full mt-1 mr-3 ml-1' /> <span>Two photographers</span></li>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-amber-400 text-white rounded-full mt-1 mr-3 ml-1' /> <span>500+ edited photos</span></li>

                </ul>
              </motion.div>

               <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, }}
                className='p-6 bg-white rounded-lg shadow-lg w-full max-w-sm mx-auto hover:border-2 border-pink-500'
              >
                <div className='w-12 h-12 rounded-full bg-pink-500 flex justify-center items-center '>
                  < FaHeart className='text-white  ' />
                </div>
                <h1 className='text-xl font-bold mt-3'>Engagement sessions</h1>
                <p className='text-sm text-slate-500 mt-1'>Beautiful pre-wedding sessions to celebrate your love story before the big day.</p>
                <ul className='text-sm font-semibold text-slate-700 mt-4 '>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-pink-500 text-white rounded-full mt-1 mr-3 ml-1' /> <span>2-3hour sessions</span></li>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-pink-500 text-white rounded-full mt-1 mr-3 ml-1' /> <span>location of your choice</span></li>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-pink-500 text-white rounded-full mt-1 mr-3 ml-1' /> <span>50+ edited photos</span></li>

                </ul>
              </motion.div>


                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, }}
                className='p-6 bg-white rounded-lg shadow-lg w-full max-w-sm mx-auto hover:border-2 border-amber-400'
              >
                <div className='w-12 h-12 rounded-full bg-yellow-400 flex justify-center items-center '>
                  <FaImages className='text-white ' />
                </div>
                <h1 className='text-xl font-bold mt-3'>Album Design</h1>
                <p className='text-sm text-slate-500 mt-1'>professionally designed wedding albums to preserve your memories for generations.</p>
                <ul className='text-sm font-semibold text-slate-700 mt-4 '>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-yellow-500 text-white rounded-full mt-1 mr-3 ml-1' /> <span>Luxury album design</span></li>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-yellow-500 text-white rounded-full mt-1 mr-3 ml-1' /> <span>Premimum quality prints</span></li>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-yellow-500 text-white rounded-full mt-1 mr-3 ml-1' /> <span>Custom layout options</span></li>

                </ul>
              </motion.div>

            </div>



          </div>

        </section>
      </div>
    </div>
  )
}

export default Service