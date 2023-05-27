import 'aos/dist/aos.css';

import AOS from 'aos';
import NextImage from 'next/image';
import React, { useEffect } from 'react';
import { AiFillLinkedin, AiOutlineGithub, AiTwotoneMail } from 'react-icons/ai';
import Link from 'next/link';

const AboutMeSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='flex relative justify-center items-center h-screen w-full'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl tracking-[1rem] font-semibold absolute top-14 sm:top-24'>
          ABOUT ME
        </h1>

        <div className='flex flex-col md:flex-row max-w-[18rem] sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-5xl bg-coal-100 rounded-3xl p-6 gap-2 sm:gap-8 mt-32'>
          <div className='md:w-1/3'>
            <NextImage
              src='/images/profile-picture.png'
              width='800'
              height='1100'
              alt='profile-picture'
              quality={100}
              priority
              className='rounded-3xl z-10 object-cover w-1/2 md:w-full'
            />
          </div>
          <div className='md:w-2/3 flex flex-col'>
            <div>
              <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold flex flex-wrap'>
                Nathanael Putra Ganata
              </h1>
              <p className='mt-2 sm:mt-4 text-xs md:text-base lg:text-lg font-medium'>
                Results-driven Web Developer specializing in front-end and
                back-end technologies. Familiar with JavaScript, Python, PHP,
                and Golang, coupled with proficiency in database management
                using MySQL, PostgreSQL, and MongoDB. With over 2 years of
                hands-on experience, adept at collaborating within
                cross-functional teams, project management, and optimizing
                workflow efficiency.
              </p>
            </div>
            <hr className='opacity-50 my-2 sm:my-5' />
            <div className='flex flex-row justify-between items-end'>
              <div className='flex flex-col gap-y-0.5'>
              <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex flex-wrap mb-2'>
                Feel free to{' '}
                <span className='before:block before:absolute before:-inset-y-0.5 before:-inset-x-1.5 before:-skew-y-3 before:bg-amber-500/70 relative inline-block mx-3'>
                  <span className='relative text-white'>contact</span>
                </span>{' '}
                me:
              </h2>
              <span className='flex flex-row gap-2 items-center'>
                <AiTwotoneMail className='w-5 h-5 mt-1' />
                <Link
                  href='mailto:nathanaelpg8@gmail.com'
                  target='blank'
                  className='hover:underline underline-offset-4 text-xs sm:text-lg'
                >
                  nathanaelpg8@gmail.com
                </Link>
              </span>
              <span className='flex flex-row gap-2 items-center'>
                <AiOutlineGithub className='w-5 h-5 mt-1' />
                <Link
                  href='https://github.com/nathanaelpganata'
                  target='blank'
                  className='hover:underline underline-offset-4 text-xs sm:text-lg'
                >
                  nathanaelpganata
                </Link>
              </span>
              <span className='flex flex-row gap-2 items-center'>
                <AiFillLinkedin className='w-5 h-5 mt-1' />
                <Link
                  href='https://www.linkedin.com/in/nathanaelpg/'
                  target='blank'
                  className='hover:underline underline-offset-4 text-xs sm:text-lg'
                >
                  nathanaelpg
                </Link>
              </span>
              </div>
              <div className='mt-4 sm:mt-auto justify-end hidden sm:flex'>
              <NextImage
                src='/images/blackcat.gif'
                alt='blackcat gif'
                width={110}
                height={200}
                className='rounded-lg'
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
