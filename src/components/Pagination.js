import React, { useEffect } from 'react';

export default function({ totalTeams, teamsPerPage, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTeams / teamsPerPage); i++)
    pageNumbers.push(i);

  return (
    <ul className="pagination">
      {pageNumbers.map(number => (
        <li key={number}>
          <a onClick={() => paginate(number)}>{number}</a>
        </li>
      ))}
      xcv
    </ul>
  );
}
