import React from 'react';
import Tabs from '@mui/material/Tabs/Tabs';
import Tab from '@mui/material/Tab/Tab';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Tabs sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Link className="nav-link" to="/">
          <Tab label="Rates" value='rates'/>
        </Link>
        <Link className="nav-link" to="/converter">
        <Tab label="Converter"  value='converter'/>
        </Link>
        <Link className="nav-link" to="/about">
        <Tab label="About"  value='about'/>
        </Link>
      </Tabs>
    </div>
  );
};

export default Navbar;
