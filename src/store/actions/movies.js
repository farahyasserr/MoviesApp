export const SET_MOVIES = 'SET_MOVIES';
export const ADD_MORE_MOVIES = 'ADD_MORE_MOVIES'
export const ADD_MOVIE_TO_SEARCH_HISTORY = 'ADD_MOVIE_TO_SEARCH_HISTORY'
export const setMovies = moviesData => ({
    type: SET_MOVIES,
    payload: {
        movies: moviesData.results,
        hasMore: moviesData.page < moviesData.total_pages,
        movieName: moviesData.movieName
    },
});

export const addMoreMovies = moviesData => ({
    type: ADD_MORE_MOVIES,
    payload: {
        movies: moviesData.results,
        hasMore: moviesData.page < moviesData.total_pages
    },
});

export const addToSearchHistory = movieName => ({
    type: ADD_MOVIE_TO_SEARCH_HISTORY,
    payload: movieName
})



