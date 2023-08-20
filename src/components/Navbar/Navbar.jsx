import React, { useState } from 'react';
import Image from './assets/Lookscout.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav bg-blue-600 p-4'>
      <div className='flex justify-between items-center ml-5 md:ml-20 pr-5'>
        {/* Logo */}
        <div>
          <a href="#" className="logo flex items-center">
            <img src={Image} alt="Logo" />
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden relative">
          <button onClick={toggleMenu} className="text-white">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex ${isMenuOpen ? 'flex-col items-center space-y-4' : 'hidden'} space-x-10 text-white ml-5 pl-0 mr-20 md:ml-0`}>
          <h4 className="font-bold"><a href="#home">HOME</a></h4>
          <h4 className="font-bold"><a href="#products">Our Products</a></h4>
          <h4 className="font-bold"><a href="#resources">Resources</a></h4>
          <h4 className="font-bold"><a href="#contacts">Contacts</a></h4>
          <div className='flex justify-start'>
         <div className='flex justify-start space-x-10'>
         <h4 className="font-bold"><a href="#login">Log In</a></h4>
          <h4 className="font-bold bg-blue-500 px-3 py-1 rounded"><a href="#signup">Sign Up</a></h4>
         </div>
          </div>
        </div>

        {/* Close Hamburger Button (Top-Right Corner) */}
        {isMenuOpen && (
          <button onClick={toggleMenu} className="absolute top-0 right-0 m-2 text-white">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
