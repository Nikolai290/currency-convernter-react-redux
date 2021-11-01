import React from 'react';
import Tabs from '@mui/material/Tabs/Tabs';
import Tab from '@mui/material/Tab/Tab';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Tabs sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Link class="nav-link" to="/">
          <Tab label="Rates" />
        </Link>
        <Link class="nav-link" to="/converter">
        <Tab label="Converter" />
        </Link>
        <Link class="nav-link" to="/about">
        <Tab label="About" />
        </Link>
      </Tabs>
    </div>
  );
};

export default Navbar;
