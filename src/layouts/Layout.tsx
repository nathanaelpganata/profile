import React from 'react';

import { LayoutTypes } from '@/types/entities/layout';

import Navigation from './Navigation';

const Layout = ({ children }: LayoutTypes) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleShowNav = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className={`min-h-screen bg-coal-300 overflow-x-hidden`}>
      {isOpen && (
        <div
          className='min-h-screen absolute z-50 bg-coal-300 bg-opacity-70 w-full'
          onClick={toggleShowNav}
        ></div>
      )}
      <Navigation isOpen={isOpen} toggleShowNav={toggleShowNav} />
      {children}
    </div>
  );
};

export default Layout;
