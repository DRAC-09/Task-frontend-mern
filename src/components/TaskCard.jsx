import { GoTrash, GoPencil } from "react-icons/go";
import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/tailwind.css";

//Modificar la fecha
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskCard(prop) {
  const { task } = prop;
  const { deleteTask } = useTasks();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col justify-between rounded-md shadow-xl whitespace-normal break-words bg-black bg-opacity-30">
      <div className="bg-gray-950 bg-opacity-30 px-2 py-2 rounded-md">
        <h1 className="text-md md:text-2sm text-center font-mono">
          {task.title}
        </h1>
      </div>

      <div className="flex flex-col p-2">
        <div className="h-full mt-3">
          <p className="text-md md:text-2 sm font-light mb-5 text-start">
            {task.description}
          </p>
        </div>
        <hr className="border-t-1 border-sky-950 border-opacity-40 my-1" />
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs md:text-[12px]">
            {dayjs(task.date).utc().format("DD/MM/YY")}
          </p>
          <div className="flex gap-3">
            <Link className="text-[16px] md:text-2sm" to={`/tasks/${task._id}`}>
              <GoPencil />
            </Link>
            <button onClick={openModal}>
              <GoTrash className="text-[16px] md:text-2sm text-red-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Ventana Mondal */}
      <div className="fixed min-h-screen flex items-center justify-center">
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 px-5">
            <div className="bg-black p-4 rounded-lg border-2 border-red-700">
              <p className="md:text-2xl">Delete task "{task.title}"?</p>
              <div className="flex gap-2 justify-center mt-2">
                <button
                  onClick={() => {
                    deleteTask(task._id);
                  }}
                  className="btn bg-sky-500 text-sm"
                >
                  Accept
                </button>
                <button onClick={closeModal} className="btn bg-red-500 text-sm">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
