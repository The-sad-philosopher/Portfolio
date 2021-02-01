import * as React from 'react';
import { NavItems } from './';
import { Logo } from './Logo';
import { SocialIcons } from './SocialIcons';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="z-50">
      <nav className="flex flex-col justify-between items-center h-screen w-20 text-gray-400 bg-gradient-to-bl from-gray-900 to-black rounded-tr-md rounded-br-md">
        <Logo />
        <NavItems />
        <SocialIcons />
      </nav>
    </header>
  );
};
