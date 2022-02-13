import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <ul className="navlinks">
        <div className="link">
          <NavLink to="/login">Login</NavLink>
        </div>
        <div className="link">
          <NavLink to="/register">Register</NavLink>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
