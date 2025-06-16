import axios from 'axios';

const api = axios.create({
  baseURL: 'https://studious-tribble-x54px9gpxjrp2v96v-8000.app.github.dev',  // всегда обращаемся к backend на localhost:8000
});

export default api;
