import { PORT } from "../config";
import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:${PORT}/api`,
  withCredentials: true,
});

export default instance;
