import "../styles/tailwind.css";
import landing from "../assets/landing.png";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import Cookies from "js-cookie";

function HomePage() {
  const { isAuthenticated } = useAuth();
  // const cookies = Cookies.get();
  // const token = cookies.token;
  // console.log(token);
  return (
    <div className="flex flex-col-reverse md:flex-row md:pt-10">
      <div className="flex md:w-1/2 flex-col items-center md:items-start justify-center md:px-10 animate-fade-up animate-once animate-ease-linear">
        <p className="text-justify md:text-2xl font-light">
          Welcome to our task management platform! We're excited to have you on
          board. With our tool, you can efficiently organize your daily tasks
          and maintain complete control over your projects.
        </p>
        {isAuthenticated ? (
          <div className="flex gap-2 justify-center mt-5">
            <Link
              to="/tasks"
              className="btn bg-fuchsia-700 md:text-2xl px-5 pb-2 rounded-xl"
            >
              Tasks
            </Link>
          </div>
        ) : (
          <div className="flex gap-2 justify-center mt-5">
            <Link
              to="/login"
              className="btn bg-fuchsia-700 md:text-2xl px-5 pb-2 rounded-xl"
            >
              Login
            </Link>
            <Link
              to="/Register"
              className="btn bg-fuchsia-700 md:text-2xl px-5 pb-2 rounded-xl"
            >
              Register
            </Link>
          </div>
        )}
      </div>
      <div className="flex md:w-1/2  justify-center md:items-center animate-fade-down animate-once animate-ease-linear">
        <img
          src={landing}
          alt="Landing Page"
          className="md:w-[600px] md:mx-10"
        />
      </div>
    </div>
  );
}

export default HomePage;
