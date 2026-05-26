import axios from "axios";

const API = axios.create({

  baseURL: "https://service-request-system.onrender.com/api",

});

export default API;