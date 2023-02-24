import 'aos/dist/aos.css';

import AOS from 'aos';
import NextImage from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

import { ProjectsTypes } from '@/types/entities/projects';

const ProjectCards = ({
  id,
  title,
  desc,
  url,
  img,
  date,
  stacks,
}: ProjectsTypes) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='flex flex-col flex-shrink-0 snap-start mx-4 h-[31rem] md:h-[37rem] w-[17rem] md:w-[25rem] mb-6'>
      <div className='h-1/3 bg-creme rounded-t-xl overflow-hidden'>
        <NextImage
          src={img}
          width='192'
          height='60'
          alt={id.toString()}
          quality={100}
          priority
          className='h-full w-full object-cover'
        />
      </div>
      <div className='h-2/3 bg-coal-100 rounded-b-lg rounded-t-2xl -translate-y-4 flex flex-col justify-between px-3 py-2'>
        <div className='space-y-2 md:space-y-4 mt-2'>
          <div className='flex justify-between items-start'>
            <h1 className='text-2xl md:text-4xl font-bold'>{title}</h1>
            <p className='text-sm md:text-base font-thin tracking-wider'>
              {date}
            </p>
          </div>
          <div className='flex flex-wrap gap-2'>
            {stacks.map((stack) => (
              <div
                key={stack.id}
                className='px-1.5 md:px-2 py-1 md:py-1 bg-amber-400 text-coal-300 font-semibold rounded-2xl text-sm md:text-base'
              >
                {stack.name}
              </div>
            ))}
          </div>
          <div>
            <p className='text-sm md:text-base'>{desc}</p>
          </div>
        </div>
        <Link
          href={url}
          className='flex w-11/12 justify-center mx-auto text-center font-semibold mb-2 bg-amber-600 hover:bg-amber-700 transition duration-200 text-creme py-2 rounded-xl'
        >
          Visit
        </Link>
      </div>
    </div>
  );
};

export default ProjectCards;
