import axios from "axios";

const axiosI = axios.create({
  baseURL: process.env.REACT_APP_BaseURL,
});

export default axiosI;