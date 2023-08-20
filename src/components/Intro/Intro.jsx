import React from 'react';
import Gitlab from './asset/Gitlab.png';
import slack from './asset/slack.png';
import Paypal from './asset/Paypal.png';
import Netflix from './asset/Netflix.png';
import Graphic from './asset/Graphic.png';

import { motion } from 'framer-motion';
import { fadeIn, slideInLeft, slideInRight } from '../Variants'; // Define your variants here

export default function Intro() {
  return (
    <div className='bg-blue-600 flex flex-col-reverse md:flex-row p-8 md:p-16'>
      {/* Left Section (Text and Logos) */}
      <motion.div
        className='flex-1 flex flex-col items-center md:items-start justify-center md:mr-8'
        initial='hidden'
        animate='show'
        variants={slideInLeft} // Add the appropriate variant here
      >
        <div className='text-white text-center md:text-left'>
          <h1 className='font-bold mb-2 text-4xl md:text-5xl'>Your Supercharged Design Workflow</h1>
          <h5 className='mb-4'>We have been told it is not possible to overachieve our customers' expectations. We have not reinvented the wheel, we decided to build upon it.</h5>
        </div>
        <button className='bg-blue-500  text-white px-3 py-2 rounded w-full md:w-auto md:mr-4  mt-4 md:mt-0'>Get Started</button>
        <div className=' flex-col  md:flex-row md:mt-4'>
          <p className='text-white md:mr-4 mb-2 md:mb-0'>Who supports us </p>
          <div className='mt-4 flex items-center space-y-2 md:space-y-0 md:space-x-2'>
            <img src={Gitlab} alt='GitLab Logo' className='' />
            <img src={slack} alt='Slack Logo' className='' />
            <img src={Paypal} alt='PayPal Logo' className='' />
            <img src={Netflix} alt='Netflix Logo' className='' />
          </div>
        </div>
      </motion.div>

      {/* Right Section (Graphic Logo) */}
      <motion.div
        className='flex-1 flex items-center justify-center text-center'
        initial='hidden'
        animate='show'
        variants={slideInRight} // Add the appropriate variant here
      >
        <img src={Graphic} alt='Graphic Logo' className='object-scale-down h-58 w-96 ' />
      </motion.div>
    </div>
  );
}
