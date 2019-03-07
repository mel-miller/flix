import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie'

class App extends Component {

  // set default state
  state = {
    movies: []
  }

  // pull data from api
  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=bd6c30d59224151decd977c2b20d4b48&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      this.setState({
        movies: movies.results
      })
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default App;
