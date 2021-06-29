import {Alert} from 'react-native';
import axiosInstance from "./axiosInstance";
import {setMovies} from '../store/actions/movies';

 
  export const getMovies= async (dispatch)  => {
    axiosInstance.get('/search/movie?api_key=b3070a5d3abfb7c241d2688d066914e7&query=Rocky&page=1' )
        .then(async res => { 
            console.log("SUCCESS",res.data.results);
            dispatch(setMovies(res.data.results));
            return res.data;
        })
        .catch(err => {
            console.log("error!");
            return err;
        })

}

