import * as React from 'react';
import { NavItems } from './';
import { Logo } from './Logo';
import { SocialIcons } from './SocialIcons';

const styles = {
  background: 'linear-gradient(to bottom left, #161818, #111111)',
};

export const Navbar: React.FC = () => {
  return (
    <header className="z-50">
      <nav
        className="flex flex-col justify-between items-center h-screen w-20 text-gray-400  rounded-tr-md rounded-br-md"
        style={styles}
      >
        <Logo />
        <NavItems />
        <SocialIcons />
      </nav>
    </header>
  );
};
