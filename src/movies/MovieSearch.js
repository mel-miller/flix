import React, { Component } from 'react';

import MovieRow from './MovieRow';


class MovieSearch extends Component {
  constructor(props) {
    super(props);

    const movies = [
      {
        id: 1,
        posterImg: 'http://image.tmdb.org/t/p/w92/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
        title: 'Movie 1',
      },
      {
        id: 2,
        posterImg: 'http://image.tmdb.org/t/p/w92/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg',
        title: 'Movie 2',
      },
    ];

    const movieRows = [];
    movies.forEach((movie) => {
      const movieRow = <MovieRow movie={movie} />;
      movieRows.push(movieRow);
    });

    this.state = { rows: movieRows };
  }

  render() {
    const { rows } = this.state;
    return (
      <div>
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieSearch;
