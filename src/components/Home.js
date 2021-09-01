import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
  const [heroes, setHeroes] = useState([{ roles: [] }]);

  async function getData() {}
  useEffect(() => {
    getData();
  }, []);
  return <div>home</div>;
}
