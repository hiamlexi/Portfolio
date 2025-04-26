import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="px-4 py-2 rounded-lg bg-white flex items-center justify-center font-bold shadow-sm">
        <p className="blue-gradient_text text-base sm:text-lg">Linh Pham</p>
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? ' text-blue-500' : ' text-gray-300')}
        >
          About Me
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? ' text-blue-500' : ' text-gray-300')}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? ' text-blue-500' : ' text-gray-300')}
        >
          Contact Me
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
