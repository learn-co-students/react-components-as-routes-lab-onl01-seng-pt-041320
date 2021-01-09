import React from 'react';
import { movies } from '../data';

const Movies = () => {
  
  return (
    
    <div>
      <h1>Movies Page</h1>
      
      {movies.map((movie) => {
        return (<div>
        <h1>{movie.title}</h1>
        <h1>{movie.time}</h1>
        <ul>{movie.genres.map((genre) => <li>{genre}</li>)}
        </ul>
        </div>)}
        )}
    </div>
  );
};

export default Movies;
