import React from 'react';
import img1 from './asset/Lookscout.png';
import img2 from './asset/fb.png';
import img3 from './asset/g.png';
import img4 from './asset/ap.png';
import img5 from './asset/ig.png';

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white lg:text-left pl-12 pr-12">
      <div className="mx-6 py-8 text-center md:text-left">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="mb-4 font-semibold uppercase">
              <img src={img1} alt='logo' />
            </h6>
            <p className='text-neutral-600'>
              Generate outside the box thinking with the possibility to target the low.
            </p>
          </div>
          <div>
            <h6 className="mb-4 font-semibold uppercase">
              Resources
            </h6>
            <p className="mb-4">
              <a className="text-neutral-600">Community</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600">Events</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600">Help Center</a>
            </p>
            <p>
              <a className="text-neutral-600">Partner</a>
            </p>
          </div>
          <div>
            <h6 className="mb-4 font-semibold uppercase">
              Products
            </h6>
            <p className="mb-4">
              <a className="text-neutral-600">Integrations</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600">Solutions</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600">Features</a>
            </p>
            <p>
              <a className="text-neutral-600">Enterprise</a>
            </p>
          </div>
          <div>
            <h6 className="mb-4 font-semibold uppercase">
              Get Email Notifications
            </h6>
            <p className="mb-4 text-neutral-600">
              Generate outside the box thinking with the possibility to target the low.
            </p>
            <div className='mt-4 flex mx-auto'>
              <input
                type='text'
                placeholder='Enter Email'
                className='bg-gray-800 px-12 py-2 rounded w-full md:w-3/4 mx-auto mb-2 md:mb-0'
              />
              <button className='bg-blue-500 text-white px-3 py-2 rounded'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className='text-grey-100 h-px my-4 mx-5 f' />
      <div className="flex justify-between   border-b-2 border-neutral-200 p-6 dark:border-neutral-500">
        <div className="mr-12 hidden lg:block">
          <span>&copy; 2023 Lookscout. All Rights Reserved</span>
        </div>
        <div className="flex justify-center">
          <a className="mr-4 text-neutral-300">
            <img src={img2} alt='fb' />
          </a>
          <a className="mr-4 text-neutral-300 ">
            <img src={img3} alt='gmail' />
          </a>
          <a className="mr-4 text-neutral-300">
            <img src={img4} alt='apple' />
          </a>
          <a className="text-neutral-300 ">
            <img src={img5} alt='insta' />
          </a>
        </div>
      </div>
    </div>
  )
}
