import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import Aos from 'aos';
import { motion } from 'framer-motion';

export default function Home(props) {
  const [heroes, setHeroes] = useState([{ roles: [] }]);

  async function getData() {}
  useEffect(() => {
    Aos.init({});
    getData();
  }, []);
  return (
    <motion.div
      className="home"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 20 }}
    >
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
        <div className="lines">
          <h2 className="join" data-aos="fade-up" data-aos-duration="2500">
            JOIN THE BATTLE OF THE ANCIENTS
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            Every day, millions of players worldwide enter the battle as one of
            over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest
            multi-player action RTS game ever made and there's always a new
            strategy or tactic to discover. It's completely free to play and
            always will be – start defending your ancient now.
          </p>
        </div>
      </section>
    </motion.div>
  );
}
