import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HeroDetails({ match, location }) {
  const [hero, setHero] = useState([]);
  const getData = async () => {
    setHero(location.state.hero);
    console.log(location.state.hero);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Link to="/">Back</Link>
      {hero.localized_name}
      {hero.localized_name}
    </div>
  );
}
