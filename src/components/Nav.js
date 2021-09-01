import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';

export default function Nav() {
  return (
    <nav>
      <div className="links">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/heroes">
          <button>Heroes</button>
        </Link>
      </div>
    </nav>
  );
}
