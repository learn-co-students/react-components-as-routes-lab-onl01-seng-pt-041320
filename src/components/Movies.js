import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>

      {movies.map((movie, i) => (
        <div key={i} id={i}>
          <h3>{movie.title}</h3>
          <p>time: {movie.time}</p>
          <p>Genres:</p>
          <ul>
            {movie.genres.map((genre, n) => (
            <li key={n}>{genre}</li>
          ))}</ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
