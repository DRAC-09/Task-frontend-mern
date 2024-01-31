import "../styles/tailwind.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: loginErrors, isAuthenticated } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      // navigate("/home");
      window.location.replace("/tasks");
    }
  }, [isAuthenticated]);

  return (
    <div className="flex h-full items-center justify-center">
      <div className="bg-black bg-opacity-40 max-w-md w-full p-10">
        {loginErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white my-2" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold text-center pb-5">Login</h1>

        <form onSubmit={onSubmit}>
          <div className="bg-slate-950">
            <div className="relative bg-inherit">
              <input
                id="email"
                type="email"
                {...register("email", { required: true })}
                className="input peer"
                placeholder=""
                autoFocus
              />
              <label htmlFor="email" className="label">
                Email
              </label>
            </div>
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">Email is required</p>
          )}

          <div className="bg-slate-950 mt-5">
            <div className="relative bg-inherit">
              <input
                id="password"
                type="password"
                {...register("password", { required: true })}
                className="input peer bg-black bg-opacity-10 "
                placeholder=" "
              />
              <label htmlFor="password" className="label">
                Password
              </label>
            </div>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">Password is required</p>
          )}
          <div className="flex justify-center mt-5">
            <button type="submit" className="btn bg-sky-800">
              Login
            </button>
          </div>
        </form>

        <p className="flex flex-col md:flex-row items-center gap-x-2 justify-center mt-5 text-sm md:text-md">
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
