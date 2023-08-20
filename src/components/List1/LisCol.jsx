import React from 'react';
import skills from "./items.js";
// import './skills.css';

const Servicess = () => {
  return (
    <section className='section' id='services' style={{ marginTop: '120px' }}>
      <div className='container mx-auto'>
        <div className='text-center py-8'>
          <h1 className='font-semibold text-2xl'>Messaging For All</h1>
          <h5>User generated content in real time will have multiple touchpoints off shoring</h5>
        </div>

        <div className='skills__container grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {skills.map(({ name, percentage, description }, index) => {
            return (
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Servicess;
