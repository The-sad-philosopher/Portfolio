import * as React from 'react';
import { AiOutlineCode, AiOutlineHome } from 'react-icons/ai';
import { FiBook } from 'react-icons/fi';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

export const NavItems: React.FC = () => {
  return (
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
  );
};
