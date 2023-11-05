import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";

//Modificar la fecha
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskCard(prop) {
  const { task } = prop;
  const { deleteTask } = useTasks();
  // console.log(prop.task);
  return (
    <div className="bg-zinc-700 py-3 px-3 rounded-sm">
      <h1 className="text-md font-bold">{task.title}</h1>
      <p className="text-xs">{task.description}</p>
      <div className="flex items-center justify-between mt-5 gap-3 text-xs flex-wrap">
        <p>{dayjs(task.date).utc().format("DD/MM/YY")}</p>
        <div className="flex gap-2">
          <Link to={`/tasks/${task._id}`}>Edit</Link>
          <button
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
