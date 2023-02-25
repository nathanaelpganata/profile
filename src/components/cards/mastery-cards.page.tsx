import NextImage from 'next/image';
import React from 'react';

import { MasteryTypes } from '@/types/entities/mastery';

const MasteryCards = ({ id, name, percentage, image }: MasteryTypes) => {
  return (
    <div className='flex flex-col justify-center item-center text-center overflow-hidden'>
      <div className='relative group mx-auto'>
        <NextImage
          src={image}
          width='200'
          height='200'
          alt={id.toString()}
          quality={100}
          priority
          className='rounded-full z-10 object-cover object-center w-14 md:w-28 h-14 md:h-28'
        />
        <div className='bg-transparent absolute inset-0 rounded-full w-full h-full group-hover:bg-coal-300/80 transition duration-200 hidden md:block' />
        <p className='absolute top-10 right-0 left-0 z-10 text-xl font-semibold text-transparent group-hover:text-creme transition duration-200 cursor-default hidden md:block'>
          {percentage}
        </p>
      </div>
      <div className='mt-2'>
        <h1 className='text-lg md:text-xl font-semibold'>{name}</h1>
        <h1 className='text-sm font-semibold block md:hidden'> {percentage}</h1>
      </div>
    </div>
  );
};

export default MasteryCards;
