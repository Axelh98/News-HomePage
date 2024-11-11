import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <a href="#">W.</a>    
      </div>
      <div className="links">
        <a href="#">Home</a>
        <a href="#">New</a>
        <a href="#">Popular</a>
        <a href="#">Trending</a>
        <a href="#">Categories</a>
      </div>
    </div>
  );
};

export default Navbar;