import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";
import noTask from "../assets/noTask.svg";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
    console.log(typeof getTasks());
  });

  if (tasks.length === 0)
    return (
      <div className="flex flex-col h-[calc(100vh-150px)] w-full items-center justify-center">
        <img className="w-28" src={noTask} alt="" />
        <h1 className="text-[20px]">NO TASKS</h1>
      </div>
    );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-start md:mx-10 py-5">
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))}
    </div>
  );
}

export default TasksPage;
