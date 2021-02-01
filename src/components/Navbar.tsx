import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineCode, AiOutlineHome } from 'react-icons/ai';
import { FiBook } from 'react-icons/fi';
import { FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';
import { IoPersonCircleOutline } from 'react-icons/io5';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="z-50">
      <nav className="flex flex-col justify-between items-center bg-gray-900 h-screen w-20 text-gray-400">
        <NavLink
          to="/"
          exact
          className="brand_logo bg-gray-600 w-12 h-12 mt-12 rounded-2xl"
        ></NavLink>
        <div className="nav_links flex flex-col space-y-12 text-2xl">
          <NavLink to="/" exact>
            <AiOutlineHome className="hover:text-red-400 duration-100" />
          </NavLink>
          <NavLink to="/project">
            <AiOutlineCode className="hover:text-red-400 duration-100" />
          </NavLink>
          <NavLink to="/post">
            <FiBook className="hover:text-red-400 duration-100" />
          </NavLink>
          <NavLink to="/about">
            <IoPersonCircleOutline className="hover:text-red-400 duration-100" />
          </NavLink>
        </div>
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
      </nav>
    </header>
  );
};
