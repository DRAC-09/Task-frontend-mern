import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  deteleTasksRequest,
  getTaskRequest,
  getTasksRequest,
  updateTasksRequest,
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

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id, task) => {
    try {
      await updateTasksRequest(id, task);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        getTasks,
        getTask,
        updateTask,
      }}
    >
      {prop.children}
    </TaskContext.Provider>
  );
}
