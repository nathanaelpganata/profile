import 'aos/dist/aos.css';

import AOS from 'aos';
import NextImage from 'next/image';
import React, { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='h-screen items-center justify-center flex'>
      <div
        className='relative flex flex-col items-center space-y-4'
        data-aos='fade-up'
        data-aos-delay='100'
      >
        <NextImage
          src='/images/profile-picture.jpg'
          width='800'
          height='1100'
          alt='CC'
          quality={100}
          priority
          className='rounded-full z-10 object-cover w-36 h-36 object-top'
        />
        <h1 className='text-4xl font-bold text-center leading-[48px] pt-4 tracking-wide'>
          NATHANAEL PUTRA
          <br /> GANATA
        </h1>
        <h2>Front-end Developer</h2>

        <div className='absolute -top-2 border-2 w-32 h-32 rounded-full animate-ping border-amber-200'></div>
        <div className='absolute -top-20 border-2 w-72 h-72 rounded-full opacity-50 animate-pulse border-amber-200'></div>
        <div className='absolute -top-16 border-2 w-96 h-96 rounded-full opacity-50 animate-ping border-ruby'></div>
        <div className='absolute -top-28 border-4 w-[32rem] h-[32rem] rounded-full opacity-90 animate-pulse border-amber-200'></div>
        {/* <div className="relative -top-48 w-[42rem]  rounded-full animate-spin">
                    <div className="relative inset-0 bg-green-800 w-4 h-4 rounded-full animate-ping"></div>
                </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
