import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import Movie from './Movie';
import { searchMovies } from './actions';


class MovieSearch extends PureComponent {
  handleSearch = (event) => {
    const { searchMovies } = this.props;
    const searchTerm = event.target.value;
    searchMovies(searchTerm);
  }

  render() {
    const { searchedMovies } = this.props;
    return (
      <SearchArea>
        <input onChange={this.handleSearch} />
        <SearchResults>
          {searchedMovies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </SearchResults>
      </SearchArea>
    );
  }
}

const mapStateToProps = state => ({
  searchedMovies: state.movies.searchedMovies,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  searchMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);

const SearchArea = styled.div`
  background: #ddd;
  padding: 20px;
`;

const SearchResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;

  img {
    margin: 1rem;
  }
`;
