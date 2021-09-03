import React, { useEffect } from 'react';
import '../styles/pagination.css';

export default function({ totalTeams, teamsPerPage, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTeams / teamsPerPage); i++)
    pageNumbers.push(i);

  return (
    <div className="pagination">
      {pageNumbers.map(number => (
        <a
          className="page-number"
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </a>
      ))}
    </div>
  );
}
