import {
  GET_MOVIES, GET_MOVIE, RESET_MOVIE, SEARCH_MOVIES,
} from './actions';

const initialState = {
  movies: [],
  moviesLoaded: false,
  moviesLoadedAt: null,
  movie: {},
  movieLoaded: false,
  searchedMovies: [],
};

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: data,
        moviesLoaded: true,
        moviesLoadedAt: new Date(),
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: data,
        movieLoaded: true,
      };
    case RESET_MOVIE:
      return {
        ...state,
        movie: {},
        movieLoaded: false,
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        searchedMovies: data,
      };
    default:
      return state;
  }
}
