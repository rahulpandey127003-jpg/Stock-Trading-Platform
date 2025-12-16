import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://stocktrade-demo.xyz", // backend
  withCredentials: true,
});

export default axiosInstance;
