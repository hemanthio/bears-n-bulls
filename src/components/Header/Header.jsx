import React from 'react';
import bears from '../Header/bears.webp'
import gsap from 'gsap';
import { useEffect } from 'react';

function Header() {

  useEffect(() => {
    const animateText = () => {
      const tl = gsap.timeline();
      tl.fromTo(".bears-n-bulls,.welcome-text,.strategy-meets",{opacity:0,x:-300},{opacity:1,x:0,stagger:1} );
      

    };

    animateText();
  }, []);
  return (
    <>
      <div className='relative   w-full h-screen bg-green-800 text-center'>
      <div className='w-full h-full absolute inset-0 bg-black opacity-90'></div>
        <img src={bears} className='w-full max-sm:w-full h-full object-cover absolute inset-0 opacity-40 '/>
        <div className='flex flex-col items-center justify-center h-full relative 
        max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center  '>

          <div className='font-inter  mb-16'>
            <h3 className='text-2xl max-sm:text-xl text-opacity-70 text-white font-[600] welcome-text'>Welcome to</h3>
            <h1 className='text-7xl max-sm:text-4xl p-2 text-white font-[700] bears-n-bulls'>Bears N Bulls</h1>
            <h2 className='text-2xl text-opacity-70 text-white px-3 font-[500] strategy-meets'>Where Strategy Meets Opportunity</h2>
            <button className='p-2 px-4 mt-5 bg-white text-black font-inter font-[500] rounded-3xl get-started-btn'>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
