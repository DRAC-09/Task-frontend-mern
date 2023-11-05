import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  deteleTasksRequest,
  getTasksRequest,
} from "../api/tasks";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within an TaskProvider");
  }
  return context;
};

export function TaskProvider(prop) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task) => {
    await createTaskRequest(task);
  };

  const deleteTask = async (id) => {
    try {
      const res = await deteleTasksRequest(id);
      if (res.status === 204) setTasks(tasks.filter((task) => task._id != id)); // Arreglo nuevo sin la tarea eliminada
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        getTasks,
      }}
    >
      {prop.children}
    </TaskContext.Provider>
  );
}
