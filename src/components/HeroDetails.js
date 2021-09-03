import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/heroDetails.css';

export default function HeroDetails({ match, location }) {
  const [hero, setHero] = useState([{ roles: [] }]);
  const getData = async () => {
    setHero(location.state.hero);
    console.log(location.state.hero);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="hero-details">
      <Link to="/">Back</Link>
      {hero.localized_name}
      <img
        className="hero-image"
        src={`https://api.opendota.com${hero.img}`}
        alt=""
      />
      <p>Primary attribute: {hero.primary_attr}</p>
      <p>Roles: {hero.roles}</p>

      {/* <p>Base Health: {hero.base_health}</p> */}
      <div className="bar-container">
        <div
          className="bar health"
          style={{ width: (hero.base_health / 500) * 100 + 200 }}
        >
          {hero.base_health} HP
        </div>
      </div>

      {/* <p>Base Mana: {hero.base_mana}</p> */}
      <div className="bar-container">
        <div
          className="bar mana"
          style={{ width: (hero.base_mana / 500) * 100 + 200 }}
        >
          {hero.base_mana} MP
        </div>
      </div>

      <p>Base Strength{hero.base_str}</p>
      <p>Base Agility: {hero.base_agi}</p>
      <p>Base Intelligence: {hero.base_int}</p>
      <p>
        Base Attack: {hero.base_attack_min} - {hero.base_attack_max}
      </p>
      <p>Base Str Gain: {hero.str_gain}</p>
      <p>Base Agi Gain: {hero.agi_gain}</p>
      <p>Base Int Gain: {hero.int_gain}</p>
      <p>Attack Range: {hero.attack_range}</p>
      <p>Projectile Speed: {hero.projectile_speed}</p>
      <p>Attack Rate: {hero.attack_rate}</p>
      <p>Move Speed: {hero.move_speed}</p>
    </div>
  );
}
