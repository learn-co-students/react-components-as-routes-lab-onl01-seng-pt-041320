import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      <ul>
      {directors.map((r, i) => (
        <div className="actor">
        <h3>{r.name}</h3>
        <li key={i}>Movies: {r.movies.join(", ")}</li>
        </div>
      ))}
      </ul>
    </div>
  );
}

export default Directors
