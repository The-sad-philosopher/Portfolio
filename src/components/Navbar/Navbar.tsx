import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItems } from './';
import { SocialIcons } from './SocialIcons';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="z-50">
      <nav className="flex flex-col justify-between items-center bg-black h-screen w-20 text-gray-400">
        <NavLink
          to="/"
          exact
          className="brand_logo bg-gray-600 w-12 h-12 mt-12 rounded-2xl"
        ></NavLink>
        <NavItems />
        <SocialIcons />
      </nav>
    </header>
  );
};
