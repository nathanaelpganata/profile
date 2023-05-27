import 'aos/dist/aos.css';

import AOS from 'aos';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { projectsData } from '@/constant/projectsData';

import ProjectCards from './cards/project-cards.page';

const ProjectsSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='flex relative justify-center items-center h-screen w-full'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl tracking-[1rem] font-semibold absolute top-14 sm:top-24'>
          PROJECTS
        </h1>
        <div className='w-[18rem] md:w-[40rem] lg:w-[55rem] xl:w-[75rem] mt-24 md:mt-10 xl:mt-36'>
          <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-amber-400 scrollbar-thumb-amber-600'>
            {projectsData.map((project) => (
              <ProjectCards key={project.id} {...project} />
            ))}
            <div className='flex flex-col group flex-shrink-0 snap-start mx-4 h-[31rem] md:h-[37rem] w-[12rem] mb-6 items-center text-black justify-center'>
              <Link
                href='https://github.com/nathanaelpganata'
                target='blank'
                className='rounded-full bg-black p-8 cursor-pointer opacity-50 hover:opacity-100 duration-150 transition ease-in-out'
              >
                <FaArrowRight className='w-8 h-8 text-white' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
