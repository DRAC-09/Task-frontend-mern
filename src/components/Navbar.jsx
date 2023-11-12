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
    <nav className="fixed flex justify-center w-full mb-5 py-4 px-5 md:px-28 shadow-xl z-20">
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
                  location.pathname === "/" || location.pathname === "/home"
                    ? "border-b px-1 py-1"
                    : "text-white"
                } hidden sm:block`}
              >
                <div className="flex items-center gap-2">
                  {/* <TfiWrite /> */}
                  <Link to="/home">Home</Link>
                </div>
              </li>

              <li
                className={`${
                  location.pathname === "/tasks"
                    ? "border-b px-1 py-1"
                    : "text-white"
                } hidden sm:block`}
              >
                <div className="flex items-center gap-2">
                  {/* <TfiFiles /> */}
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
                  {/* <TfiWrite /> */}
                  <Link to="/add-task">Add Task</Link>
                </div>
              </li>

              <li
                className={`${
                  location.pathname === "/about"
                    ? "border-b px-1 py-1"
                    : "text-white"
                } hidden sm:block`}
              >
                <div className="flex items-center gap-2">
                  {/* <TfiWrite /> */}
                  <Link to="/about">About</Link>
                </div>
              </li>

              <li className="pl-10 block">
                <button
                  onClick={openModal}
                  className="flex items-center justify-center gap-2 pt-1 capitalize"
                >
                  <FaCircleUser className="text-[20px]" />
                  <h1 className="text-xs w-[50px] truncate md:text-base md:w-[150px]">
                    {user.username}
                  </h1>
                  <TfiAngleDown />
                </button>
                {userMenu && (
                  <div>
                    <div className="hidden sm:block">
                      <div
                        onClick={closeModal} // Cierra la modal al hacer clic en el contenedor principal
                        className="fixed inset-0 flex items-start justify-end pt-14 pr-28"
                      >
                        <ul className="text-2sm bg-white text-sky-950 border rounded-sm w-[120px]">
                          <li className="selected">
                            <TfiSettings />
                            <Link>Perfil</Link>
                          </li>
                          <li className="selected">
                            <TfiPowerOff />
                            <Link
                              to="/"
                              onClick={() => {
                                logout();
                              }}
                            >
                              Logout
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="block sm:hidden">
                      <div
                        onClick={closeModal} // Cierra la modal al hacer clic en el contenedor principal
                        className="fixed inset-0 flex items-start justify-end pt-14 pr-5"
                      >
                        <ul className="text-md bg-white text-sky-950 border rounded-sm w-[120px]">
                          <li className="selected">
                            <TfiFiles />
                            <Link to="/home">Home</Link>
                          </li>
                          <li className="selected">
                            <TfiFiles />
                            <Link to="/tasks">Tasks</Link>
                          </li>
                          <li className="selected">
                            <TfiWrite />
                            <Link to="/add-task">Add Task</Link>
                          </li>
                          <li className="selected">
                            <TfiFiles />
                            <Link to="/about">About</Link>
                          </li>
                          <li className="selected">
                            <TfiSettings />
                            <Link>Perfil</Link>
                          </li>
                          <li className="selected">
                            <TfiPowerOff />
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
                )}
              </li>
            </>
          ) : (
            <>
              <li
                className={`${
                  location.pathname === "/" || location.pathname === "/home"
                    ? "border-b px-1 py-1"
                    : "text-white"
                } hidden sm:block`}
              >
                <div className="flex items-center gap-2">
                  {/* <TfiWrite /> */}
                  <Link to="/home">Home</Link>
                </div>
              </li>

              <li
                className={`${
                  location.pathname === "/about"
                    ? "border-b px-1 py-1"
                    : "text-white"
                } hidden sm:block`}
              >
                <div className="flex items-center gap-2">
                  {/* <TfiWrite /> */}
                  <Link to="/about">About</Link>
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
