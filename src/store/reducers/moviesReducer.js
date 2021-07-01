import { SET_MOVIES, ADD_MORE_MOVIES, ADD_MOVIE_TO_SEARCH_HISTORY } from '../actions/movies';

const initialState = {
    movies: null,
    hasMore: false,
    searchHistory: []
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return { ...state, movies: action.payload.movies, hasMore: action.payload.hasMore }
        case ADD_MORE_MOVIES:
            return { ...state, movies: state.movies.concat(action.payload.movies), hasMore: action.payload.hasMore }
        case ADD_MOVIE_TO_SEARCH_HISTORY:
            {
                let newArr = (state.searchHistory.includes(action.payload) === false) ? [action.payload].concat(state.searchHistory) : state.searchHistory
                newArr = newArr.slice(0, 10)
                return { ...state, searchHistory: [...newArr] }
            }
        default: return state;
    }
}

export default moviesReducer;