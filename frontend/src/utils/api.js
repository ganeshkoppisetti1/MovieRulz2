import axios from "axios";

const API = axios.create({
  baseURL: "https://movierulz2.onrender.com", 
  withCredentials: true, 
});

export default API;
