import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-backend-e5cn.onrender.com",
  withCredentials: true,
});

export default apiRequest;
