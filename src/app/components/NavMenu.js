import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavMenu = () => {
  return (
<ul class="nav nav-tabs">
  <li class="nav-item">
    <Link class="nav-link" to="/">Rates</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/converter">Converter</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/about">About</Link>
  </li>

</ul>
  );
};

export default NavMenu;
