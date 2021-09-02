import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      <Link to="/">Back</Link>
      {hero.localized_name}
      <img src={`https://api.opendota.com${hero.img}`} alt="" />
      <p>Primary attribute: {hero.primary_attr}</p>
      <p>Roles: {hero.roles}</p>
      <p>Base Health: {hero.base_health}</p>
      <p>Base Mana: {hero.base_mana}</p>
      <p>Base Strength{hero.base_str}</p>
      <p>Base Agility: {hero.base_agi}</p>
      <p>Base Intelligence: {hero.base_int}</p>
      <p>
        Base Attack: {hero.base_attack_min} - {hero.base_attack_max}
      </p>
      <p>Base Str Gain: {hero.str_gain}</p>
      <p>Base Agi Gain: {hero.agi_gain}</p>
      <p>Base Int Gain: {hero.int_gain}</p>
    </div>
  );
}
