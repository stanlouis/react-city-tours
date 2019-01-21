import React from 'react';
import './Navbar.scss';
import logo from '../logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <a href="#home" className="navbar-brand">
        <img src={logo} alt="logo" />
      </a>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#home">
            Home <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li class="nav-item">
          <a className="nav-link" href="#tours">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
