import React from 'react'
import{ motion} from "framer-motion"
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div>
      <div>
        <section id="Hero" className='relative w-full min-h-screen flex items-center px-6 md:px-16'>
          <div >
            <div className='absolute inset-0  -z-10 '>
               <img  className='w-full h-full object-cover brightness-50' src="https://img.freepik.com/free-photo/elegant-wedding-ceremony-venue-with-floral-decorations_23-2151976686.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
            </div>
            <motion.div 
            initial={{opacity:0,x:50}}
              whileInView={{opacity:1,x:0}}
              transition={{duration:0.6,}}
           className='pt-40 pl-4 absolute inset-0 -z-10'> <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400'> Capture your Love Stories  </h1>
            <p className='text-slate-200 mt-3 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, esse.</p>
            </motion.div>

            <motion.div 
             initial={{opacity:0,x:50}}
              whileInView={{opacity:1,x:0}}
              transition={{duration:0.6,}}
              viewport={{once:true}}
             className='mt-6 flex flex-wrap gap-4'
            >
              <div className=' pointer-events-auto'
              >
                <div>
               <Link  className='px-6 h-10 inline-flex items-center justify-center mr-4 rounded-3xl font-semibold bg-amber-300 hover:bg-amber-400 text-white' to="/Contect" >Pre-Wedding</Link>
               <Link  className='px-6 h-10 inline-flex items-center justify-center rounded-3xl font-semibold border-2 border-white text-white hover:bg-white hover:text-black' to="/Service">Services</Link>
                </div>
                </div>
            </motion.div>
             
          </div>

        </section>
      </div>
    </div>
  )
}

export default Hero