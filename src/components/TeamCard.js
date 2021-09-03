import React from 'react';

export default function TeamCard({ team }) {
  return (
    <div className="team-card">
      <h3>{team.name}</h3>
      <img src={team.logo_url} alt={team.name} />
    </div>
  );
}
