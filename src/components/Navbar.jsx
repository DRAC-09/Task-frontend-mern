import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="flex justify-between py-5 px-10 bg-sky-700 mb-5">
      <Link className="text-xl font-bold" to="/">
        Tasks Manager
      </Link>
      <ul className="flex gap-x-5">
        {isAuthenticated ? (
          <>
            <li>
              <h1>Wolcome {user.username}</h1>
            </li>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
            <li>
              <Link to="/add-task">Add Task</Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
                className="ml-5"
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
