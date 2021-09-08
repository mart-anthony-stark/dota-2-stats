import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingText from '../shared/loadingText';
import TeamCard from './TeamCard';
import Pagination from './Pagination';
import '../styles/teams.css';
import { motion } from 'framer-motion';

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
    <motion.div
      className="comp"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 20 }}
    >
      <div className="teams-container">
        <table className="teams">
          <thead className="header">
            <th>Teams</th>
            <th>Rating</th>
            <th>Wins</th>
            <th>Losses</th>
          </thead>
          <tbody>
            {isLoading ? (
              <LoadingText />
            ) : (
              currentData.map(team => (
                <tr key={team.team_id} team={team} className="team-row">
                  <td className="name">
                    <img src={team.logo_url} alt="" />
                    {team.name}
                  </td>
                  <td id="rating">{team.rating}</td>
                  <td id="wins">{team.wins}</td>
                  <td id="losses">{team.losses}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        totalTeams={teams.length}
        teamsPerPage={teamsPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </motion.div>
  );
}
