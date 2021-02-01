import * as React from 'react';
import { FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';

interface SocialIconsProps {}

export const SocialIcons: React.FC<SocialIconsProps> = () => {
  return (
    <div className="social flex flex-col space-y-8 mb-12 text-lg">
      <a href="https://twitter.com" target="_tab">
        <FaTwitter />
      </a>
      <a href="https://github.com/The-sad-philosopher" target="_tab">
        <FaGithub />
      </a>
      <a href="https://dribbble.com" target="_tab">
        <FaDribbble />
      </a>
    </div>
  );
};
