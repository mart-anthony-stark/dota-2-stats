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
        <div className="group">
          <h2 className="tagline">
            “A MODERN MULTIPLAYER MASTERPIECE.”<span>-DESTRUCTOID</span>
          </h2>
          <button className="store-btn">
            <span class="iconify" data-icon="la:steam" />
            Play For Free
          </button>
        </div>
      </div>
      <section>
        <h2>JOIN THE BATTLE OF THE ANCIENTS</h2>
      </section>
    </div>
  );
}
