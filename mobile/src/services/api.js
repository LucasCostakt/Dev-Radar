import axios from 'axios';

const api = axios.create({
  baseURL:'http://200.18.68.202:3333' ,
});

export default api;
