import { inputSyle, textStyle, labelStyle } from "../styles/tailwind";
import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

//Modificar la fecha
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams(); // Obtiene un objeto con los datos dinamico de la URL.

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs.utc(task.date).format("YYYY-MM-DD"));
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };

    if (params.id) {
      updateTask(params.id, dataValid);
    } else {
      createTask(dataValid);
    }

    navigate("/tasks");
  });

  return (
    <div className="flex h-[calc(100vh-100px)] justify-center items-center">
      <div className="w-full max-w-md bg-zinc-800 p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <div className="bg-zinc-800 mb-10">
            <div className="relative bg-inherit">
              <input
                type="text"
                placeholder=" "
                autoFocus
                {...register("title")}
                className={inputSyle}
              />
              <label className={labelStyle}>Title</label>
            </div>
          </div>

          <div className="bg-zinc-800 mb-5">
            <div className="relative bg-inherit">
              <textarea
                type="text"
                placeholder=" "
                {...register("description")}
                className={textStyle}
              ></textarea>
              <label className={labelStyle}>Description</label>
            </div>
          </div>

          <div className="bg-zinc-800 mb-5">
            <div className="relative bg-inherit">
              <input
                type="date"
                placeholder=""
                {...register("date")}
                className={inputSyle}
              />
              <label htmlFor="date" className={labelStyle}>
                Date
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="border border-cyan-800  rounded-md px-3 ">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;
