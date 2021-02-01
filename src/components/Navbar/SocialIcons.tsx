import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';

interface SocialIconsProps {}

export const SocialIcons: React.FC<SocialIconsProps> = () => {
  return (
    <div className="social flex flex-col space-y-8 mb-12 text-lg">
      <NavLink to="">
        <FaTwitter />
      </NavLink>
      <NavLink to="">
        <FaGithub />
      </NavLink>
      <NavLink to="">
        <FaDribbble />
      </NavLink>
    </div>
  );
};
