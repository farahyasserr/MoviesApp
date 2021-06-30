export const SET_MOVIES = 'SET_MOVIES';
export const ADD_MORE_MOVIES = 'ADD_MORE_MOVIES'
export const LOADING_MORE = 'LOADING_MORE'

export const setMovies = moviesData => ({
    type: SET_MOVIES,
    payload: {
        movies: moviesData.results,
        hasMore: moviesData.page < moviesData.total_pages
    },
});

export const addMoreMovies = moviesData => ({
    type: ADD_MORE_MOVIES,
    payload: {
        movies: moviesData.results,
        hasMore: moviesData.page < moviesData.total_pages
    },
});

export const loadingMore = () => ({
    type: LOADING_MORE,
});


