import "../styles/tailwind.css";
import landing from "../assets/landing.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center">
      <div className="flex md:w-2/5 flex-col items-center md:items-start justify-center md:pl-5">
        <p className="text-justify">
          Welcome to our task management platform! We're excited to have you on
          board. With our tool, you can efficiently organize your daily tasks
          and maintain complete control over your projects.
        </p>
        <div className="flex gap-2 mt-5 w-full">
          <button className="btn bg-sky-800 md:text-xl">
            <Link to="/login">Login</Link>
          </button>
          <button className="btn bg-sky-800 md:text-xl">
            <Link to="/Register">Register</Link>
          </button>
        </div>
      </div>
      <div className="flex md:w-3/5  justify-center md:items-center">
        <img
          src={landing}
          alt="Landing Page"
          className="w-[400px] md:w-[400px] md:mx-10"
        />
      </div>
    </div>
  );
}

export default HomePage;
