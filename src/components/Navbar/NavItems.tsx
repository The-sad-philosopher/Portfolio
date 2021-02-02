import * as React from 'react';
import { AiOutlineCode, AiOutlineHome } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

export const NavItems: React.FC = () => {
  return (
    <div className="flex flex-col space-y-12 text-2xl">
      <NavLink to="/" exact activeClassName="text-red-500">
        <AiOutlineHome className="hover:text-red-400 duration-100" />
      </NavLink>
      <NavLink to="/project" activeClassName="text-red-500">
        <AiOutlineCode className="hover:text-red-400 duration-100" />
      </NavLink>
      <NavLink to="/about" activeClassName="text-red-500">
        <IoPersonCircleOutline
          fontSize="1.6rem"
          className="hover:text-red-400 duration-100"
        />
      </NavLink>
      <NavLink to="/post" activeClassName="text-red-500">
        <FiSettings className="hover:text-red-400 duration-100" />
      </NavLink>
    </div>
  );
};
