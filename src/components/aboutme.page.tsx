import 'aos/dist/aos.css';

import AOS from 'aos';
import NextImage from 'next/image';
import React, { useEffect } from 'react';

const AboutMeSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='flex relative justify-center items-center h-screen w-full'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl tracking-[1rem] font-semibold absolute top-24'>
          ABOUT ME
        </h1>

        <div className='flex flex-col md:flex-row max-w-[18rem] sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-5xl bg-coal-100 rounded-3xl p-6 gap-8 mt-32'>
          <div className='md:w-1/3'>
            <NextImage
              src='/images/profile-picture.jpg'
              width='800'
              height='1100'
              alt='profile-picture'
              quality={100}
              priority
              className='rounded-3xl z-10 object-cover w-1/2 md:w-full'
            />
          </div>
          <div className='md:w-2/3 flex flex-col justify-between'>
            <div>
              <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold flex flex-wrap'>
                Nathanael Putra Ganata
              </h1>

              <p className='mt-4 text-sm md:text-base lg:text-lg font-medium'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                quasi autem adipisci ullam quod nostrum maiores blanditiis totam
                maxime quam, dignissimos vel illum repellendus ipsum nobis. Sunt
                deleniti placeat quisquam nisi libero, consectetur laudantium
                odit reiciendis aliquid quibusdam ab in quo minima veritatis,
                reprehenderit ducimus incidunt tenetur numquam dolores. Esse
                praesentium suscipit nostrum exercitationem vel id possimus
                aliquam illum doloremque.
              </p>
            </div>
            <div>
              <h2 className='text-lg md:text-xl lg:text-2xl font-semibold'>
                Connect With Me
              </h2>
              <p className='mt-2 text-sm md:text-base lg:text-lg font-medium'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, ab optio maxime dolorem corrupti fugiat delectus animi
                soluta iure veniam assumenda impedit, accusantium praesentium
                minus aperiam vero ex. Saepe, itaque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
