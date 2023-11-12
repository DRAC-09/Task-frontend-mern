import tasks from "../assets/tasks.png";
import addtask from "../assets/addtask.png";

function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center font-light pt-3 pb-10 md:px-44 md:pt-10 overflow-hidden">
      <h1 className="text-3xl text-center font-bold">
        Welcome to our Task Manager!
      </h1>
      <div className="flex flex-col items-start md:flex-row gap-5 mt-10">
        <img src={tasks} alt="tasks" className="w-[600px]" />
        <p className="text-justify mb-2 md:text-2xl md:pr-20">
          Our Task Manager is a tool designed to help you stay organized and
          boost your productivity. Whether you're a student, a professional, or
          anyone in between, our intuitive interface easy to manage your tasks
          efficiently.
        </p>
      </div>
      <div className="flex flex-col items-start md:flex-row-reverse gap-5 mt-10">
        <img src={addtask} alt="addtask" className="w-[600px]" />
        <p className="text-justify mb-2 md:text-2xl md:pl-20">
          Get started today and take control of your tasks with our Task
          Manager. Your path to enhanced productivity begins here!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
