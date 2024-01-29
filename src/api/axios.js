import axios from "axios";

const instance = axios.create({
  baseURL: `https://task-backend-mern-nu.vercel.app/api`,
  // baseURL: `http://localhost:${PORT}/api`,
  withCredentials: true,
});

export default instance;
