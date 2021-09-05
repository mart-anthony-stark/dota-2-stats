import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

export default function Home(props) {
  const [heroes, setHeroes] = useState([{ roles: [] }]);

  async function getData() {}
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="home">
      <div className="hero">
        <h2 className="tagline">“A MODERN MULTIPLAYER MASTERPIECE.”</h2>
      </div>
    </div>
  );
}
