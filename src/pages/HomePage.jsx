import "../styles/tailwind.css";
import landing from "../assets/landing.png";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:pl-20 md:pt-10">
      <div className="flex md:w-1/2 flex-col items-center md:items-start justify-center md:px-10">
        <p className="text-justify md:text-2xl font-light">
          Welcome to our task management platform! We're excited to have you on
          board. With our tool, you can efficiently organize your daily tasks
          and maintain complete control over your projects.
        </p>
        {isAuthenticated ? (
          <div className="flex gap-2 justify-center mt-5">
            <button className="btn bg-fuchsia-700 md:text-2xl px-5 pb-2 rounded-xl">
              <Link to="/tasks">Tasks</Link>
            </button>
          </div>
        ) : (
          <div className="flex gap-2 justify-center mt-5">
            <button className="btn bg-fuchsia-700 md:text-2xl px-5 pb-2 rounded-xl">
              <Link to="/login">Login</Link>
            </button>
            <button className="btn bg-fuchsia-700 md:text-2xl px-5 pb-2 rounded-xl">
              <Link to="/Register">Register</Link>
            </button>
          </div>
        )}
      </div>
      <div className="flex md:w-1/2  justify-center md:items-center">
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
