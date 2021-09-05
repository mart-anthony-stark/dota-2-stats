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
      {/* <img
        className="wallpaper"
        src="https://wallpaperaccess.com/full/671214.jpg"
        alt=""
      /> */}
      <div className="hero">“A MODERN MULTIPLAYER MASTERPIECE.”</div>
    </div>
  );
}
