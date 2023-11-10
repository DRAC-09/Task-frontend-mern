import landing from "../assets/landing.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center h-[calc(100vh-160px)]">
      <div className="flex flex-col items-center md:items-start justify-center md:px-20">
        <p className="text-justify">
          Welcome to our task management platform! We're excited to have you on
          board. With our tool, you can efficiently organize your daily tasks
          and maintain complete control over your projects.
        </p>
        <div className="flex gap-2 mt-5">
          <button className="bg-sky-800 rounded-full pb-1 px-4 mt-1 text-md">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-sky-800 rounded-full pb-1 px-4 mt-1 text-md">
            <Link to="/Register">Register</Link>
          </button>
        </div>
      </div>
      <div className="flex justify-center md:items-center">
        <img
          src={landing}
          alt="Landing Page"
          className="w-[400px] md:w-[1000px] md:mx-20"
        />
      </div>
    </div>
  );
}

export default HomePage;
