import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Teams() {
  const [isLoading, setIsLoading] = useState(true);
  const [teams, setTeams] = useState([]);

  const getData = async () => {
    const res = await fetch('https://api.opendota.com/api/teams');
    const data = await res.json();
    const filtered = data.slice(0, 10).filter(team => team.name !== '');
    setTeams(filtered);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h2>Teams</h2>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        teams.map(team => (
          <div key={team.team_id}>
            <h3>{team.name}</h3>
            <img src={team.logo_url} alt="" />
          </div>
        ))
      )}
    </div>
  );
}
