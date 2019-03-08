import React, { Component } from 'react';
import PropTypes from 'prop-types';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  // set default state
  state = {
    movie: {},
  }

  // pull data from api
  async componentDidMount() {
    try {
      const { match } = this.props;
      const res = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=bd6c30d59224151decd977c2b20d4b48&language=en-US`);
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e); // eslint-disable-line
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt="movie.title" />
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt="movie.title" />
        <h1>{movie.title}</h1>
        <p>{movie.release_date}</p>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;

MovieDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};