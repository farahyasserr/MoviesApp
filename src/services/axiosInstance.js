import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.themoviedb.org/3',
    // headers: {'Content-Type': 'octet-stream'}
  });

  instance.interceptors.request.use(function (config) {
    //Do something before request is sent
    console.log("config",config)
    return config;
  }, function (error) {
    console.log("error",error)
    //Do something with request error
    return Promise.reject(error);
  });

export default instance;
