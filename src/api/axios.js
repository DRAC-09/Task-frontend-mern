import axios from "axios";
import Cookies from "js-cookie";

const cookies = Cookies.get();
const token = cookies.token;

const instance = axios.create({
  baseURL: `https://task-backend-mern-nu.vercel.app/api`,
  // baseURL: `http://localhost:${PORT}/api`,
  headers: { token: token },
  withCredentials: true,
});

export default instance;
