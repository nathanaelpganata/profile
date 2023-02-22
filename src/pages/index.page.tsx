import React from 'react';

import AboutMeSection from '@/components/aboutme.page';
import HeroSection from '@/components/hero.page';
import MasterySection from '@/components/mastery.page';
import ProjectsSection from '@/components/projects.page';
import SEO from '@/components/SEO';
import Layout from '@/layouts/Layout';

const index = () => {
  return (
    <Layout>
      <SEO
        title='Profile | Nathanael P Ganata'
        description='This is Nathanael P Ganata Profile'
      />
      <div className='snap-y scroll-smooth h-screen snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-amber-300 scrollbar-thumb-amber-500'>
        <div className='text-creme font-primary h-screen'>
          <section id='home' className='snap-center'>
            <HeroSection />
          </section>
          <section id='projects' className='snap-center h-screen'>
            <ProjectsSection />
          </section>
          <section id='mastery' className='snap-center h-screen'>
            <MasterySection />
          </section>
          <section id='aboutme' className='snap-center h-screen'>
            <AboutMeSection />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default index;
