import 'aos/dist/aos.css';

import AOS from 'aos';
import React, { useEffect } from 'react';

const AboutMeSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='flex relative justify-center items-center h-screen w-full'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl tracking-[1rem] font-semibold absolute top-24'>
          ABOUT ME
        </h1>
      </div>
    </div>
  );
};

export default AboutMeSection;
