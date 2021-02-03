import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { SiFlutter } from 'react-icons/si';
const styles = {
  background: 'linear-gradient(to bottom right, #272727, #1b1b1b)',
};

export const Logo: React.FC = () => (
  <NavLink
    to="/"
    exact
    className="w-12 h-12 mt-6 rounded-xl flex justify-center items-center text-red-500 text-2xl"
    style={styles}
  >
    <SiFlutter />
  </NavLink>
);
