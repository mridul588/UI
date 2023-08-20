import React from 'react';
import img1 from './asset/head.png';
import img2 from './asset/Checkbox.png';
import img3 from './asset/Checkbox1.png';
import img4 from './asset/Checkbox2.png';

export default function Second() {
  return (
    <div className='text-center py-8'>
      <img src={img1} alt='heading' className='mx-auto' />
      
      <h5 className='font-semibold text-2xl'>
        Welcome to your new digital reality that will rock
      </h5>
      <h5 className='font-semibold text-2xl'>
        your world truly at all throughout.
      </h5>
      
      <div className='mt-4 md:w-1/2 mx-auto'>
        <input
          type='text'
          placeholder='Enter your Email'
          className='bg-gray-300 p-2 rounded w-full md:w-3/4 mx-auto mb-2 md:mb-0'
        />
        <button className='bg-blue-500 text-white px-3 py-2 rounded w-full md:w-auto'>
          Submit
        </button>
      </div>
      
      <div className='flex  items-center justify-center pt-6'>
        <img src={img2} alt='logo' className='mx-2 h-5' />
        <img src={img3} alt='logo' className='mx-2 h-5' />
        <img src={img4} alt='logo' className='mx-2 h-5' />
      </div>
    </div>
  );
}
