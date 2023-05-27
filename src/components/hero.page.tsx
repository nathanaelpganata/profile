import 'aos/dist/aos.css';

import AOS from 'aos';
import { motion } from 'framer-motion-3d';
import NextImage from 'next/image';
import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

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
        <motion.pointLight animate={{ x: 2 }} />
        <NextImage
          src='/images/profile-picture.png'
          width='800'
          height='1100'
          alt='CC'
          quality={100}
          priority
          className='rounded-full z-10 object-cover w-36 h-36 object-top pointer-events-none select-none'
        />
        <h1 className='text-4xl font-bold text-center leading-[48px] pt-4 tracking-wide z-10 select-none'>
          Nathanael Putra
          <br /> Ganata
        </h1>
        <p className='text-xl font-thin z-10 select-none'>
          <Typewriter
            words={[
              'Front-end Web Developer',
              'Project Manager',
              'Tech enthusiast',
              'Data analyst',
            ]}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>

        <div className='absolute top-2 border-2 w-32 h-32 rounded-full animate-ping  border-amber-200'></div>
        {/* <div className='absolute -top-16 border-2 w-96 h-96 rounded-full opacity-50  border-ruby'></div> */}
        <div className='absolute -top-16 border-2 w-72 h-72 rounded-full opacity-50 animate-pulse border-amber-200'></div>
        <div className='absolute -top-44 border-2 w-[40rem] h-[40rem] rounded-full opacity-50 animate-pulse border-amber-200'></div>
        <div className='absolute -top-28 border-4 w-[60rem] rotate-45 h-[32rem] rounded-full opacity-90 animate-pulse border-amber-200'></div>
        <div className='absolute -top-28 border-4 w-[60rem] -rotate-45 h-[32rem] rounded-full opacity-90 animate-pulse border-amber-200'></div>
      </div>
    </div>
  );
};

export default HeroSection;
