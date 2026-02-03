import axios from "axios";

const API = axios.create({
  baseURL: "https://movierulzg.onrender.com", // your backend URL
  withCredentials: true, // allow cookies if login uses sessions
});

export default API;
