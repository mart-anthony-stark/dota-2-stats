import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HeroDetails({ match }) {
  return (
    <div>
      <Link to="/">Back</Link>
      {match.params.id}
    </div>
  );
}
