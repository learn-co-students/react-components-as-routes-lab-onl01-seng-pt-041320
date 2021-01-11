import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      <ul>
      {movies.map((r, i) => (
        <div className="actor">
        <h3>{r.title}</h3>
        <h3>{r.time}</h3>
        <li key={i}>Genres: {r.genres.join(", ")}</li>
        </div>
      ))}
      </ul>
    </div>
  );
};

export default Movies;
