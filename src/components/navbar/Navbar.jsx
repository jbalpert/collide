import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="collide__navbar">
      <div className="collide__navbar-links">
        <div className="collide__navbar-links_logo">
          <img alt="logo" src={logo} />
        </div>
        <div className="collide__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#possibility">What's Collide</a></p>
          <p><a href="#features">Get Involved</a></p>
        </div>
      </div>
      <div className="collide__navbar-sign">
        <button type="button">Sign up</button>
      </div>
      <div className="collide__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="collide__navbar-menu_container scale-up-center">
          <div className="collide__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
