export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';

export function getMovies() {
  return async function (dispatch) {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=bd6c30d59224151decd977c2b20d4b48&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
    const movies = await res.json();
    return dispatch({
      type: 'GET_MOVIES',
      data: movies.results,
    });
  };
}

export function getMovie(id) {
  return async function (dispatch) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bd6c30d59224151decd977c2b20d4b48&language=en-US`);
    const movie = await res.json();
    return dispatch({
      type: 'GET_MOVIE',
      data: movie,
    });
  };
}

export function resetMovie() {
  return {
    type: 'RESET_MOVIE',
  };
}

export function searchMovies() {
  return async function (dispatch) {
    const res = await fetch('https://api.themoviedb.org/3/search/movie?api_key=bd6c30d59224151decd977c2b20d4b48&language=en-US&query=help&page=1&include_adult=false');
    const searchedMovies = await res.json();
    return dispatch({
      type: 'SEARCH_MOVIES',
      data: searchedMovies.results,
    });
  };
}
