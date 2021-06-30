import {Alert} from 'react-native';
import axiosInstance from "./axiosInstance";
import {setMovies} from '../store/actions/movies';

 
  export const getMovies= (dispatch, movieName, pageNumber)  => {
      return new Promise(async (resolve,reject)=>{
        axiosInstance.get(`/search/movie?api_key=b3070a5d3abfb7c241d2688d066914e7&query=${movieName}&page=1` )
        .then(res => { 
            console.log("SUCCESS",res.data.results);
            dispatch(setMovies(res.data.results));
            resolve (res.data);
        })
        .catch(err => {
            console.log("error!");
            reject (err);
        })
      })
}

