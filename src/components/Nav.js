import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navigation.css';

export default function Nav({ currentPage, setCurrentPage }) {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setCurrentPage('Home');
        break;
      case '/about':
        setCurrentPage('About');
        break;
      case '/heroes':
        setCurrentPage('Heroes');
        break;
      case '/teams':
        setCurrentPage('Teams');
        break;
    }
  }, []);
  const handleToggle = () => {
    if (isSideOpen) {
      setIsSideOpen(false);
    } else {
      setIsSideOpen(true);
    }
  };

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
      <div
        className={`menu ${isSideOpen ? 'open' : ''}`}
        onClick={handleToggle}
      >
        <span
          className={`iconify`}
          data-icon="mdi:microsoft-xbox-controller-menu"
          style={{
            fontSize: 50,
            cursor: 'pointer',
            color: 'white'
          }}
        />
      </div>
    </nav>
  );
}
