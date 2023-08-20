import React from 'react'
import img1 from './asset/press.png'
import img2 from './asset/CompanyLogo.png'
import img3 from './asset/Company.png'
import img4 from './asset/Company2.png'
import img5 from './asset/Company3.png'
import img6 from './asset/Logo3.png'


export default function Proud() {
  return (
    <div>
         <div className='text-center py-8'>
        <h1 className='font-semibold text-2xl'>Proud to Be Used By</h1>
        <h5>Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-</h5>
        <h5>leveling customer service for state of the art customer service.</h5>
        <div className='justify-center pt-6 grid gap-8 md:grid-cols-4 sm:grid-cols-1 lg:grid-cols-6'>
        <img src={img1} alt='logo' />
        <img src={img2} alt='logo' />
        <img src={img3} alt='logo' />
        <img src={img4} alt='logo' />
        <img src={img5} alt='logo' />
        <img src={img6} alt='logo' />
        </div>
     </div>
    </div>
  )
}
