import axios from "axios";

console.tron.log('services/api')

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;
