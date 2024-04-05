import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About</a></p>
    <p><a href="#database">Database</a></p>
    <p><a href="#blog">Blog</a></p>
    <p><a href="#contact">Contact</a></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setNavbarVisible(false);
      } else if (window.scrollY < 50) {
        setNavbarVisible(false);
      }else {
        setNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`navbar ${navbarVisible ? '' : 'hide-navbar'}`}>
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
