import 'aos/dist/aos.css';

import AOS from 'aos';
import React, { useEffect } from 'react';

import MasteryCards from '@/components/cards/mastery-cards.page';
import { masteryData } from '@/constant/masteryData';

const MasterySection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='flex relative justify-center items-center h-screen w-full'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl tracking-[1rem] font-semibold absolute top-14 sm:top-24'>
          MASTERY
        </h1>
        <div className='flex flex-wrap justify-center gap-x-6 sm:gap-x-12 gap-y-4 sm:gap-y-8 max-w-[20rem] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mt-40'>
          {masteryData.map((mastery) => (
            <MasteryCards {...mastery} key={mastery.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MasterySection;
