export const SET_MOVIES = 'SET_MOVIES'; 

export const setMovies = movies =>{
    return ({
        type: SET_MOVIES,
        movies: movies,
    });
}
