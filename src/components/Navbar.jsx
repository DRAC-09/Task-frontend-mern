import logo from "../assets/task.png";
import { FaCircleUser } from "react-icons/fa6";
import {
  TfiAngleDown,
  TfiFiles,
  TfiWrite,
  TfiSettings,
  TfiPowerOff,
} from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function NavBar() {
  const { isAuthenticated, logout, user } = useAuth();
  const [userMenu, setUserMenu] = useState(false);
  const location = useLocation();

  const openModal = () => setUserMenu(true);
  const closeModal = () => setUserMenu(false);

  return (
    <nav className="fixed w-full mb-5 py-4 px-5 md:px-28 shadow-xl z-20">
      <div className="container mx-au to flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="Task Manager" className="h-7 w-7" />
          <Link
            className="text-xl font-bold"
            to={isAuthenticated ? "/tasks" : "/"}
          >
            Tasks Manager
          </Link>
        </div>
        <ul className="flex space-x-4 focus:border-b-2 items-center justify-center">
          {isAuthenticated ? (
            <>
              <li
                className={`${
                  location.pathname === "/tasks"
                    ? "border-b px-1 py-1"
                    : "text-white"
                } hidden sm:block mr-3`}
              >
                <div className="flex items-center gap-2">
                  <TfiFiles />
                  <Link to="/tasks">Tasks</Link>
                </div>
              </li>

              <li
                className={`${
                  location.pathname === "/add-task"
                    ? "border-b px-1 py-1"
                    : "text-white"
                } hidden sm:block`}
              >
                <div className="flex items-center gap-2">
                  <TfiWrite />
                  <Link to="/add-task">Add Task</Link>
                </div>
              </li>

              <li className="pl-10 block">
                <button
                  onClick={openModal}
                  className="flex items-center justify-center gap-2 pt-1 capitalize"
                >
                  <FaCircleUser className="text-[20px]" />
                  <h1>{user.username}</h1>
                  <TfiAngleDown />
                  {/* {userMenu ? <FaChevronUp /> : <FaChevronDown />} */}
                </button>
                {userMenu && (
                  <div>
                    <div className="hidden sm:block">
                      <div
                        onClick={closeModal} // Cierra la modal al hacer clic en el contenedor principal
                        className="fixed inset-0 flex items-start justify-end pt-14 pr-20"
                      >
                        <div className="right-3 grid grid-cols-[1fr_5fr] gap-3 items-center text-[13px] px-3 py-2 bg-white text-sky-950 border rounded-sm mr-8">
                          <TfiSettings />
                          <Link>Perfil</Link>
                          <TfiPowerOff />
                          <Link
                            to="/"
                            onClick={() => {
                              logout();
                            }}
                          >
                            Logout
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="block sm:hidden">
                      <div
                        onClick={closeModal} // Cierra la modal al hacer clic en el contenedor principal
                        className="fixed inset-0 flex items-start justify-end pt-14 mr-5"
                      >
                        <div className="mr-0">
                          <ul className="grid grid-cols-[1fr_3fr] gap-2 items-center justify-left text-md px-4 py-3 bg-white text-sky-950 rounded-sm capitalize">
                            <TfiFiles />
                            <li>
                              <Link to="/tasks">Tasks</Link>
                            </li>
                            <TfiWrite />
                            <li>
                              <Link to="/add-task">Add Task</Link>
                            </li>
                            <TfiSettings />
                            <Link>Perfil</Link>
                            <TfiPowerOff />
                            <li>
                              <Link
                                to="/"
                                onClick={() => {
                                  logout();
                                }}
                                className=""
                              >
                                Logout
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </>
          ) : (
            <div className="flex gap-2">
              {/* <button className="bg-sky-800 rounded-md pb-1 px-2 mt-1 text-sm">
                <Link to="/login">Login</Link>
              </button>
              <button className="bg-sky-800 rounded-md pb-1 px-2 mt-1 text-sm">
                <Link to="/Register">Register</Link>
              </button> */}
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
