import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const Logo: React.FC = () => (
  <NavLink
    to="/"
    exact
    className="bg-gray-800 w-12 h-12 mt-6 rounded-2xl"
  ></NavLink>
);
