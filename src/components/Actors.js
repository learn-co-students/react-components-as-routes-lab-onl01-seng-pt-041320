import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      <ul>
      {actors.map((r, i) => (
        <div className="actor">
        <h3>{r.name}</h3>
        <li key={i}>Songs: {r.movies.join(", ")}</li>
        </div>
      ))}
      </ul>
    </div>
  );
};

export default Actors;
