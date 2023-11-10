import { GoTrash, GoPencil } from "react-icons/go";
import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";
import { useState } from "react";

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
    <div className="flex flex-col justify-between rounded-md shadow-md whitespace-normal break-words">
      <div className="text-white bg-gray-900 bg-opacity-30 px-2 py-2 rounded-md">
        <h1 className="text-md md:text-[10px] font-bold ">{task.title}</h1>
      </div>

      <div className="flex flex-col p-2">
        <div className="h-full mt-3">
          <p className="text-md md:text-xs mb-5 text-start">
            {task.description}
          </p>
        </div>
        {/* <hr className="bg-black h-0.5 my-1" /> */}
        <div className="flex items-center justify-between gap-3 text-sm md:text-[10px]">
          <p>{dayjs(task.date).utc().format("DD/MM/YY")}</p>
          <div className="flex gap-3">
            <Link
              className="text-[18px] md:text-sm text-white"
              to={`/tasks/${task._id}`}
            >
              <GoPencil />
            </Link>
            <button onClick={openModal}>
              <GoTrash className="text-[18px] md:text-sm text-red-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Ventana Mondal */}
      <div className="fixed min-h-screen flex items-center justify-center">
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-black p-4 rounded-lg border-2 border-red-700">
              <p>Delete task permanently?</p>
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => {
                    deleteTask(task._id);
                  }}
                  className=" text-white text-xs mt-2 p-2 bg-green-500 rounded-md"
                >
                  Accept
                </button>
                <button
                  onClick={closeModal}
                  className=" text-white text-xs mt-2 p-2 bg-red-500 rounded-md"
                >
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
