import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/mobileNav.css';

export default function MobileNav({
  setCurrentPage,
  currentPage,
  isNavOpen,
  setNavOpen
}) {
  return (
    <div className={isNavOpen ? 'mobile-nav open' : 'mobile-nav'}>
      <Link to="/">
        <button
          className={currentPage == 'Home' ? 'link active' : 'link'}
          onClick={() => {
            setCurrentPage('Home');
            setNavOpen(false);
          }}
        >
          Home
        </button>
      </Link>
      <Link to="/about">
        <button
          className={currentPage == 'About' ? 'link active' : 'link'}
          onClick={() => {
            setCurrentPage('About');
            setNavOpen(false);
          }}
        >
          About
        </button>
      </Link>
      <Link to="/heroes">
        <button
          className={currentPage == 'Heroes' ? 'link active' : 'link'}
          onClick={() => {
            setCurrentPage('Heroes');
            setNavOpen(false);
          }}
        >
          Heroes
        </button>
      </Link>
      <Link to="/teams">
        <button
          className={currentPage == 'Teams' ? 'link active' : 'link'}
          onClick={() => {
            setCurrentPage('Teams');
            setNavOpen(false);
          }}
        >
          Teams
        </button>
      </Link>
    </div>
  );
}
