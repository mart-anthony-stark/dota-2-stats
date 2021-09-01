import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/heroes.css';

export default function Home() {
  const [heroes, setHeroes] = useState([{ roles: [] }]);

  async function getData() {
    const res = await fetch('https://api.opendota.com/api/heroStats');
    const data = await res.json();
    setHeroes(data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="heroes">
      {heroes.map(hero => (
        <div key={hero.id} className="hero-card">
          <img src={`https://api.opendota.com${hero.img}`} />
          <Link to={`/hero/${hero.id}`}>
            <div className="">
              <img src={`https://api.opendota.com${hero.icon}`} />
              <h3>{hero.localized_name}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
