import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/heroes.css';

export default function Home() {
  const [heroes, setHeroes] = useState([{ roles: [] }]);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    const res = await fetch('https://api.opendota.com/api/heroStats');
    const data = await res.json();
    setHeroes(data);
    setIsLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="heroes">
      {isLoading ? (
        <h3 className="loading">Loading...</h3>
      ) : (
        heroes.map(hero => (
          <Link
            key={hero.id}
            to={{ pathname: `/hero/${hero.id}`, state: { hero } }}
            style={{ textDecoration: 'none' }}
          >
            <div className="hero-card">
              <img
                className="hero-image"
                src={`https://api.opendota.com${hero.img}`}
              />

              <div className="hero-link">
                <img
                  src={`https://api.opendota.com${hero.icon}`}
                  alt={hero.localized_name}
                />
                <h3>{hero.localized_name}</h3>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
