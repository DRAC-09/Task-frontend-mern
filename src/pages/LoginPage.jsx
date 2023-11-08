import "../styles/style.css";
import { inputSyle, labelStyle, button } from "../styles/tailwind";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {loginErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white my-2" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold text-center pb-5">Login</h1>

        <form onSubmit={onSubmit}>
          <div className="bg-zinc-800 mb-5">
            <div className="relative bg-inherit">
              <input
                id="email"
                type="email"
                {...register("email", { required: true })}
                className={inputSyle}
                placeholder=""
                autoFocus
              />
              <label htmlFor="email" className={labelStyle}>
                Email
              </label>
            </div>
          </div>
          {errors.email && <p className="text-red-500">Email is required</p>}

          <div className="bg-zinc-800 mb-5">
            <div className="relative bg-inherit">
              <input
                id="password"
                type="password"
                {...register("password", { required: true })}
                className={inputSyle}
                placeholder=" "
              />
              <label htmlFor="password" className={labelStyle}>
                Password
              </label>
            </div>
          </div>
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <div className="flex justify-end">
            <button type="submit" className={button}>
              Login
            </button>
          </div>
        </form>

        <p className="flex gap-x-2 justify-center mt-5 text-sm md:text-md">
          Don´t have an account?{" "}
          <Link to="/register" className="text-sky-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
