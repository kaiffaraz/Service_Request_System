import axios from "axios";

const API = axios.create({

  baseURL: "https://service-request-system-932c.onrender.com/api",

});

export default API;