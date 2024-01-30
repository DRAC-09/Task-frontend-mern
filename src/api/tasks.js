import axios from "./axios";
import Cookies from "js-cookie";

const cookies = Cookies.get();
const token = cookies.token;

export const getTasksRequest = () =>
  axios.get(`/tasks`, { headers: { token: token } });
export const getTaskRequest = (id) => axios.get(`/tasks/${id}`);
export const createTaskRequest = (task) => axios.post(`/tasks`, task);
export const updateTasksRequest = (id, task) => axios.put(`/tasks/${id}`, task);
export const deleteTasksRequest = (id) => axios.delete(`/tasks/${id}`);
