import React from 'react'
import { motion } from "framer-motion"
import { AiOutlineCheck } from 'react-icons/ai'

function Pakages() {
  return (
    <div>
      <div>
        <section id='Packages' className='bg-orange-50 w-full py-16 px-4'>
         <div>

            <div className='flex flex-col items-center text-center'>
              <h1 className='text-3xl text-black font-bold'>Wedding <span className='text-pink-400'>Packages</span></h1>
              <p className='text-slate-500 text-sm mt-2'>Choose the perfect package for your wedding day</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, right: 50 }}
                whileInView={{ opacity: 1, right: 20 }}
                transition={{ duration: 0.8 }}
                className='p-6 bg-white rounded-lg shadow-lg w-full max-w-sm mx-auto hover:border-2 border-amber-400'
              >
                <div className='text-center text-3xl font-bold mb-3'>
                <h1 className='text-black text-xl'>Essential</h1>
                 <h1 className='text-amber-300'>₹1,999</h1>
                </div>
                <p className='text-sm text-slate-600 mt-2 mb-4'>Perfect for intimate weddings</p>
                <ul className='text-sm font-semibold text-slate-700 mt-4 '>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-yellow-500 text-white rounded-full mt-1 mr-3 ml-1' /> <span>6 hours coverage</span></li>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-yellow-500 text-white rounded-full mt-1 mr-3 ml-1' /> <span>One photographer</span></li>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-yellow-500 text-white rounded-full mt-1 mr-3 ml-1' /> <span>300+ edited photos</span></li>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-yellow-500 text-white rounded-full mt-1 mr-3 ml-1' /> <span>50+ edited photos</span></li>
                   <button  className=' bg-amber-400  text-white w-full h-10 mt-4 rounded-3xl font-semibold'>Select package</button>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, }}
                className='p-6 bg-white rounded-lg shadow-lg w-full max-w-sm mx-auto hover:border-2 border-pink-500'
              >
               <div className='text-center text-3xl font-bold mb-3'>
                <h1 className='text-black text-xl'>Premium</h1>
                 <h1 className=' text-pink-500'>₹3,499</h1>
                </div>
                <p className='text-sm text-slate-600 mt-2 mb-4'>Our most populer package</p>
                <ul className='text-sm font-semibold text-slate-700 mt-4 '>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-yellow-500 text-white rounded-full mt-1 mr-3 ml-1' /> <span>Full day coverge</span></li>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-yellow-500 text-white rounded-full mt-1 mr-3 ml-1' /> <span>Two photographers</span></li>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-yellow-500 text-white rounded-full mt-1 mr-3 ml-1' /> <span>engagement session</span></li>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-yellow-500 text-white rounded-full mt-1 mr-3 ml-1' /> <span>600+ edited photos</span></li>
                   <button  className=' bg-pink-500  text-white w-full h-10 mt-4 rounded-3xl font-semibold'>Select package</button>

                </ul>
              </motion.div>


                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, }}
               className='p-6 bg-white rounded-lg shadow-lg w-full max-w-sm mx-auto hover:border-2 border-amber-400'
              >
                <div className='text-center text-3xl font-bold mb-3'>
                <h1 className='text-black text-xl'>Luxury</h1>
                 <h1 className='text-amber-300'>₹5,999</h1>
                </div>
                <p className='text-sm text-slate-600 mt-2 mb-4'>Complete wedding exprience</p>
                <ul className='text-sm font-semibold text-slate-700 mt-4 '>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-yellow-500 text-white rounded-full mt-1 mr-3 ml-1' /> <span>Multi-day coverage</span></li>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-yellow-500 text-white rounded-full mt-1 mr-3 ml-1' /> <span>Three photographers</span></li>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-yellow-500 text-white rounded-full mt-1 mr-3 ml-1' /> <span>Two engagement sessions</span></li>
                  <li className='mt-3 flex'> <AiOutlineCheck className='bg-yellow-500 text-white rounded-full mt-1 mr-3 ml-1' /> <span>1000+ edited photos</span></li>
                   <button  className='bg-amber-400  text-white w-full h-10 mt-4 rounded-3xl font-semibold'>Select package</button>

                </ul>
              </motion.div>

            </div>

          </div>
        </section>
      </div>
    </div>
  )
}

export default Pakages