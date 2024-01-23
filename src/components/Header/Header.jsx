import React from 'react';
import bears from '../Header/bears.webp'

function Header() {
  return (
    <>
      <div className='relative w-full h-screen bg-green-800 text-center'>
      <div className='w-full h-full absolute inset-0 bg-black opacity-90'></div>
        <img src={bears} className='w-full h-full object-cover absolute inset-0 opacity-40'/>
        <div className='flex flex-col items-center justify-center h-full relative'>

          <div className='font-inter mb-16'>
            <h3 className='text-2xl text-opacity-70 text-white font-[600] '>Welcome to</h3>
            <h1 className='text-7xl p-2 text-white font-[700] '>Bears N Bulls</h1>
            <h2 className='text-2xl text-opacity-70 text-white px-3 font-[500]'>Where Strategy Meets Opportunity</h2>
            <button className='p-2 px-3 mt-5 bg-white text-black font-inter font-[500] rounded-3xl'>Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
