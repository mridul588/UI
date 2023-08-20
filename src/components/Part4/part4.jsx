import React from 'react';
import pic from './assets/div3.png';
import pic1 from './assets/photo.png';
import skills from './items';
import { motion } from 'framer-motion';
import { fadeIn, slideInLeft, slideInRight } from '../Variants'; // Make sure to import the appropriate variants

function Part() {
  return (
    <>
      <div className='container mx-auto' style={{ marginTop: '80px' }}>
        <div className='text-center py-8'>
          <h1 className='font-semibold text-2xl'>Redefining Product Features</h1>
          <h5>
            Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence <br />
            on cross-platform integration.
          </h5>
        </div>
        <div className='grid gap-1 md:grid-cols-2 lg:grid-cols-2 p-10 content-start'>
          {/* Left Section*/}
          <motion.div
            className='skills__container grid gap-8 md:grid-cols-1 lg:grid-cols-1 pl-50'
            initial='hidden'
            animate='show'
            variants={slideInLeft} // Add the appropriate variant here
          >
            {skills.map(({ name, percentage, description }, index) => (
              <div className='skills__item box1' key={index}>
                <div className='skills__titles'>
                  <h3 className='skills__name '><img src={name} alt="Icon" /></h3>
                  <span className='skills__number to-black font-semibold'>{percentage}</span>
                </div>
                <p className='skills__description'>{description}</p>
                <div className='skills__bar'>
                  <span className='text-blue-500 font-semibold'>Learn more <span className='ml-1'>&rarr;</span></span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Section */}
          <motion.div
            className='flex-1 flex flex-col items-end p-8'
            initial='hidden'
            animate='show'
            variants={slideInRight} // Add the appropriate variant here
          >
            <img src={pic1} alt='Graphic Logo' className='object-scale-down h-58 w-96 ' />
          </motion.div>
        </div>
      </div>
      <div className='bg-gray-900 grid gap-1 md:grid-cols-2 lg:grid-cols-2 p-8 content-start'>
        {/* Left Section*/}
        <motion.div
          className='flex-1 flex flex-col text-center'
          initial='hidden'
          animate='show'
          variants={slideInLeft} // Add the appropriate variant here
        >
          <img src={pic} alt='Graphic Logo' className='object-scale-down h-58 w-96 ' />
        </motion.div>

        {/* Right Section */}
        <motion.div
          className='skills__container grid gap-8 md:grid-cols-1 lg:grid-cols-1'
          initial='hidden'
          animate='show'
          variants={slideInRight} // Add the appropriate variant here
        >
          {skills.map(({ name, percentage, description }, index) => (
            <div className='skills__item box1 text-white mt-[-10px]' key={index}>
              <div className='skills__titles'>
                <h3 className='skills__name '><img src={name} alt="Icon" /></h3>
                <span className='skills__number to-black font-semibold'>{percentage}</span>
              </div>
              <p className='skills__description'>{description}</p>
              <div className='skills__bar'>
                <span className='text-blue-500 font-semibold'>Learn more <span className='ml-1'>&rarr;</span></span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Part;
