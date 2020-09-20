import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>ALL Employee</NavLink>
    </li>
    <li>
      <NavLink to="/add">ADD Employee</NavLink>
    </li>

  </ul>
};

export default NavLinks;