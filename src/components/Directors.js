import React from 'react';
// import { library } from 'webpack';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((dir, index) => (<div key={index}>
        <h2>Director Name: {dir.name}</h2>
          <h3>Movies</h3>
            <ul>{dir.movies.map((movie, index) =>
                (<li key={index}>{movie}</li>)
              )}
            </ul>
        </div>
      ))}
    </div>
  )
}

export default Directors
