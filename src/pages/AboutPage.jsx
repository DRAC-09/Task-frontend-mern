import tasks from "../assets/tasks.png";
import addtask from "../assets/addtask.png";

function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center font-light md:pt-3 pb-10 md:px-20">
      <h1 className="text-3xl text-center font-bold mt-5">
        Welcome to our Task Manager!
      </h1>
      <div className="md:flex justify-center">
        <div className="flex flex-col items-center gap-5 mt-12 md:flex-1">
          <img src={tasks} alt="tasks" className="h-auto max-h-[350px]" />
          <p className="text-justify mb-2 md:text-2xl sm:text-xl md:px-10">
            Our Task Manager is a tool designed to help you stay organized and
            boost your productivity. Whether you're a student, a professional,
            or anyone in between, our intuitive interface easy to manage your
            tasks efficiently.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 mt-10 md:flex-1">
          <img src={addtask} alt="addtask" className="h-auto max-h-[350px]" />
          <p className="text-justify mb-2 md:text-2xl sm:text-xl md:px-10">
            Get started today and take control of your tasks with our Task
            Manager. Your path to enhanced productivity begins here!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
