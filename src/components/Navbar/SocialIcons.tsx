import * as React from 'react';
import { FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';

interface SocialIconsProps {}

export const SocialIcons: React.FC<SocialIconsProps> = () => {
  return (
    <div className="social flex flex-col space-y-8 mb-12 text-lg">
      <a href="https://twitter.com" target="_tab">
        <FaTwitter className="hover:text-red-400 duration-100" />
      </a>
      <a href="https://github.com/The-sad-philosopher" target="_tab">
        <FaGithub className="hover:text-red-400 duration-100" />
      </a>
      <a href="https://dribbble.com" target="_tab">
        <FaDribbble className="hover:text-red-400 duration-100" />
      </a>
    </div>
  );
};
