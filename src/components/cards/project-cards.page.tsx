import 'aos/dist/aos.css';

import AOS from 'aos';
import NextImage from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';

import { ProjectsTypes } from '@/types/entities/projects';

const ProjectCards = ({
  id,
  title,
  desc,
  liveUrl,
  img,
  date,
  stacks,
  gitUrl,
}: ProjectsTypes) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='flex flex-col group flex-shrink-0 snap-start mx-4 h-[31rem] md:h-[37rem] w-[17rem] md:w-[20rem] mb-6 select-none opacity-100 md:opacity-70 hover:opacity-100 duration-200 transition'>
      <div className='h-1/3 bg-creme rounded-t-xl overflow-hidden'>
        <NextImage
          src={img}
          width='192'
          height='60'
          alt={id.toString()}
          quality={100}
          priority
          className='h-full w-full object-cover group-hover:scale-110 transition duration-200 object-top'
        />
      </div>
      <div className='h-2/3 bg-transparent rounded-b-lg flex flex-col justify-between px-3 py-2 pt-1 group-hover:bg-black/40'>
        <div className='space-y-2 md:space-y-4 mt-2'>
          <div className='flex justify-between items-start gap-4'>
            <h1 className='text-xl md:text-2xl font-bold'>{title}</h1>
            <p className='text-sm md:text-base font-thin tracking-wider whitespace-nowrap'>
              {date}
            </p>
          </div>
          <div className='flex flex-wrap gap-2'>
            {stacks?.map((stack) => (
              <div
                key={stack.id}
                className='px-1.5 md:px-2 py-1 md:py-1 bg-black/30 group-hover:bg-ruby text-creme transition duration-250 font-semibold rounded-2xl text-xs md:text-sm'
              >
                {stack.name}
              </div>
            ))}
          </div>
          <div>
            <p className='text-sm md:text-base'>{desc}</p>
          </div>
        </div>
        <div className='flex flex-row gap-2'>
          {!!gitUrl && (
            <Link
              href={gitUrl}
              className='flex w-11/12 justify-center mx-auto text-center font-semibold mb-2 bg-transparent border border-black hover:bg-black transition duration-200 text-creme py-2 rounded-lg items-center gap-1'
              target='blank'
            >
              <AiOutlineGithub className='w-5 h-5' /> GitHub
            </Link>
          )}
          {!!liveUrl && (
            <Link
              href={liveUrl}
              className='flex w-11/12 justify-center mx-auto text-center font-semibold mb-2 bg-transparent border border-amber-600 hover:bg-amber-600 transition duration-200 text-creme py-2 rounded-lg'
              target='blank'
            >
              View
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
