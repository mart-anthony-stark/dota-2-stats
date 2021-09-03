import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingText from '../shared/loadingText';

export default function Teams() {
  const [isLoading, setIsLoading] = useState(true);
  const [teams, setTeams] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [teamsPerPage, setTeamsPerPage] = useState(10);

  const getData = async () => {
    const res = await fetch('https://api.opendota.com/api/teams');
    const data = await res.json();
    const filtered = data.slice(0, 10).filter(team => team.name !== '');
    setTeams(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  // PAGINATION
  const endIndex = currentPage * teamsPerPage;
  const startIndex = endIndex - teamsPerPage;
  const currentData = teams.slice(startIndex, endIndex);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Teams</h2>
      {isLoading ? (
        <LoadingText />
      ) : (
        currentData.map(team => (
          <div key={team.team_id}>
            <h3>{team.name}</h3>
            <img src={team.logo_url} alt="" />
          </div>
        ))
      )}
    </div>
  );
}
