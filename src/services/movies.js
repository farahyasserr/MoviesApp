import { Alert } from 'react-native';
import axiosInstance from "./axiosInstance";
import { setMovies, addMoreMovies, addToSearchHistory } from '../store/actions/movies';


export const getMovies = (dispatch, movieName) => {
    axiosInstance.get(`/search/movie?api_key=b3070a5d3abfb7c241d2688d066914e7&query=${movieName}&page=1`)
        .then(res => {
            dispatch(setMovies(res.data));
            res.data.results.length > 0 && dispatch(addToSearchHistory(movieName))
        })
        .catch(err => {
            console.log("error!");
        })
}


export const loadMoreMovies = (dispatch, movieName, pageNumber) => {
    axiosInstance.get(`/search/movie?api_key=b3070a5d3abfb7c241d2688d066914e7&query=${movieName}&page=${pageNumber}`)
        .then(res => {
            dispatch(addMoreMovies(res.data));
        })
        .catch(err => {
            console.log("error!");
        })
}
