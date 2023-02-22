import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import {
  AiFillLinkedin,
  AiOutlineCloseCircle,
  AiOutlineGithub,
} from 'react-icons/ai';
import { GiHamburgerMenu, GiHollowCat } from 'react-icons/gi';

type NavigationProps = {
  isOpen: boolean;
  toggleShowNav: () => void;
};

const Navigation = ({ isOpen, toggleShowNav }: NavigationProps) => {
  const links = [
    { href: '#projects', label: 'Projects' },
    { href: '#mastery', label: 'Mastery' },
    { href: '#aboutme', label: 'About Me' },
  ];

  const contacts = [
    { href: '/', logo: <AiOutlineGithub className='w-8 h-8' /> },
    { href: '/', logo: <AiFillLinkedin className='w-8 h-8' /> },
  ];

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <header className='fixed top-0 z-[100] w-full bg-transparent text-creme'>
      {/* Desktop Nav Start */}
      <div className=' w-11/12 h-16 items-center justify-between mx-auto md:flex hidden'>
        <Link href='#home'>
          <GiHollowCat className='w-10 h-10 ' />
        </Link>
        <ul className='md:flex justify-center tiems-center gap-x-14 font-semibold hidden w-full'>
          {links.map((link) => (
            <li key={`${link.href}${link.label}`} className='list-none'>
              <Link className='hover:text-creme/50' href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className='flex m-4 gap-x-4 '>
          {contacts.map((contact) => (
            <li key={`${contact.href}`}>
              <Link href={contact.href}>{contact.logo}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='relative flex md:hidden h-16 items-center ml-4'>
        {!isOpen && (
          <GiHamburgerMenu
            className='text-3xl  cursor-pointer hover:text-creme/50'
            onClick={toggleShowNav}
          />
        )}
      </div>
      {/* Desktop Nav End */}
      {/* Mobile Nav Start */}
      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        className='absolute top-4 left-0 w-full block md:hidden'
      >
        <div className='flex justify-between items-center mx-4'>
          <Link href='#home'>
            <GiHollowCat className='w-16 h-16' />
          </Link>
          <AiOutlineCloseCircle
            className='h-8 w-8 cursor-pointer hover:text-creme/50'
            onClick={toggleShowNav}
          />
        </div>
        <nav className='relative z-20 flex h-screen w-full flex-col mt-6'>
          <ul>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`} className='py-3 ml-6'>
                <Link
                  href={href}
                  className='flex w-full justify-start font-semibold'
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='flex m-4 gap-x-4 mt-12'>
            {contacts.map((contact) => (
              <li key={`${contact.href}`}>
                <Link href={contact.href}>{contact.logo}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
      {/* Mobile Nav End */}
    </header>
  );
};

export default Navigation;
