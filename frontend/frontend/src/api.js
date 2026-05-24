import axios from "axios";

const API = axios.create({
   // baseURL: "http://localhost:5000/api"
   baseURL: `${process.env.VITE_API_URL}/api`
});

export default API;