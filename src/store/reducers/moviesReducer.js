import { SET_MOVIES } from '../actions/movies';

const initialState = {   
    movies: null,
}

const moviesReducer = (state = initialState , action)=>{
    switch(action.type){
        case SET_MOVIES: 
             console.log("action",action.movies);
             return {...state, movies: action.movies}

        default: return state; 
    }
}

export default moviesReducer; 