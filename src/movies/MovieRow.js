import React, { Component } from 'react';

class MovieRow extends Component {
  render() {
    const { movie } = this.props;
    return (
      <tr>
        <td><img alt="Movie Poster" src={movie.posterImg} /></td>
        <td>{movie.title}</td>
      </tr>
    );
  }
}

export default MovieRow;
