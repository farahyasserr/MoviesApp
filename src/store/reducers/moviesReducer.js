import { SET_MOVIES, ADD_MORE_MOVIES, LOADING_MORE } from '../actions/movies';

const initialState = {
    movies: null,
    hasMore: false
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return { ...state, movies: action.payload.movies, hasMore: action.payload.hasMore }
        case ADD_MORE_MOVIES:
            return { ...state, movies: state.movies.concat(action.payload.movies), hasMore: action.payload.hasMore, loadingMore: false }
        case LOADING_MORE:
            return { ...state, loadingMore: true }
        default: return state;
    }
}

export default moviesReducer;