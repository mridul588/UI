import React from 'react';
import skills from "./Blog1.js";

const Blogs = () => {
  return (
    <section className='section' id='services' style={{ marginTop: '30px' }}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 pl-12 pr-12'> {/* Add more vertical padding */}
        <div className='text-center py-8'>
          <h1 className='font-semibold text-2xl'>Latest Blog Posts</h1>
          <h5>Completely synergize resource taxing relationships via premier niche markets. Professionally  cultivate one-to-one customer service with robust ideas.</h5>
        </div>

        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'> {/* Center content */}
          {skills.map(({ name, percentage, description, foot }, index) => { // Destructure 'foot' property
            return (
              <div className='box1' key={index}>
                <div className='skills__titles'>
                  <h3 className='skills__name '><img src={name} alt="Icon" /></h3>
                </div>
                <div className='p-1'>
                  <span className='skills__number font-semibold'>{percentage}</span>
                </div>
                <p className='skills__description'>{description}</p>
                <div className='skills__bar'>
                  <h3 className='skills__footer p-10'><img src={foot} alt="Icon" /></h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
