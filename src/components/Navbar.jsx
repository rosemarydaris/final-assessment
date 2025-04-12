import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
      <Link to="/add">Add Blog</Link>
    </nav>
  );
};

export default Navbar;
