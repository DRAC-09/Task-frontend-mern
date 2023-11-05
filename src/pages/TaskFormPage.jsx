import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate } from "react-router-dom";

function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { createTask } = useTasks();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    createTask(data);
    navigate("/tasks");
  });

  return (
    <div className="flex h-[calc(100vh-100px)] justify-center items-center">
      <div className="w-full max-w-md bg-zinc-800 p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Tittle"
            {...register("title")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md  my-2"
            autoFocus
          />

          <textarea
            rows="3"
            placeholder="Description"
            {...register("description")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md  my-2"
          ></textarea>
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;
