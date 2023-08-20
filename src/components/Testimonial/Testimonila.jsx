import React from 'react';
import logo from './asset/Lookscout.png';
import Avatar from './asset/Avatar.png';

export default function Testimonial() {
  return (
    <div className='flex flex-col items-center justify-center mt-6'>
      <div className='bg-slate-300 rounded-lg p-6 w-3/4'>
        <div className='flex flex-col items-center justify-center'>
          <img src={logo} alt='logo' className='mb-2' />
          <span className='text-center mt-14'>
            Thank you for making it painless, pleasant, and most of all hassle-free!
            <br /> I love LookScout. I can't say enough about LookScout. <br />
            Great job, I will definitely be ordering again!
          </span>
          <img src={Avatar} alt='avatar' className='mt-8' />
        </div>
      </div>
    </div>
  );
}
