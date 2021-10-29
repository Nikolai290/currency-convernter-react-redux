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
        <Link class="nav-link" to="/Converter">
        <Tab label="Converter" />
        </Link>
        <Link class="nav-link" to="/About">
        <Tab label="About" />
        </Link>
      </Tabs>
    </div>
  );
};

export default Navbar;
