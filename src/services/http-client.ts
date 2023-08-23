import axios from "axios";

// bilal this is for api calls
const HttpClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default HttpClient;
