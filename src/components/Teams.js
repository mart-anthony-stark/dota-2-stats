import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingText from '../shared/loadingText';
import TeamCard from './TeamCard';
import Pagination from './Pagination';
import '../styles/teams.css';

export default function Teams() {
  const [isLoading, setIsLoading] = useState(true);
  const [teams, setTeams] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [teamsPerPage] = useState(25);

  const getData = async () => {
    const res = await fetch('https://api.opendota.com/api/teams');
    const data = await res.json();
    const filtered = data.slice(0, 10).filter(team => team.name !== '');
    setTeams(data.filter(team => team.name !== ''));
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
      <div className="teams">
        <table>
          <thead>
            <th>Teams</th>
            <th>Rating</th>
            <th>Wins</th>
            <th>Losses</th>
          </thead>
          {isLoading ? (
            <LoadingText />
          ) : (
            currentData.map(team => (
              <tr key={team.team_id} team={team} className="team-row">
                <td className="">
                  <img src={team.logo_url} alt="" />
                  {team.name}
                </td>
                <td>{team.rating}</td>
                <td>{team.wins}</td>
                <td>{team.losses}</td>
              </tr>
            ))
          )}
        </table>
      </div>
      <Pagination
        totalTeams={teams.length}
        teamsPerPage={teamsPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}
