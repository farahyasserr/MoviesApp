import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.themoviedb.org/3',
});

instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  console.log("error", error)
  return Promise.reject(error);
});

export default instance;
