import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';

export default function Nav({ currentPage, setCurrentPage }) {
  return (
    <nav>
      <div className="logo">Dota Talk</div>
      <div className="links">
        <Link to="/">
          <button
            className={currentPage == 'Home' ? 'link active' : 'link'}
            onClick={() => setCurrentPage('Home')}
          >
            Home
          </button>
        </Link>
        <Link to="/about">
          <button
            className={currentPage == 'About' ? 'link active' : 'link'}
            onClick={() => setCurrentPage('About')}
          >
            About
          </button>
        </Link>
        <Link to="/heroes">
          <button
            className={currentPage == 'Heroes' ? 'link active' : 'link'}
            onClick={() => setCurrentPage('Heroes')}
          >
            Heroes
          </button>
        </Link>
        <Link to="/teams">
          <button
            className={currentPage == 'Teams' ? 'link active' : 'link'}
            onClick={() => setCurrentPage('Teams')}
          >
            Teams
          </button>
        </Link>
      </div>
    </nav>
  );
}
