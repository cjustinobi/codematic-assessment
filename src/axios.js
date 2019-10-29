import axios from 'axios';

const $axios = axios.create({
  baseURL: 'https://wrenew-backend.herokuapp.com/api/'
});

export default $axios;