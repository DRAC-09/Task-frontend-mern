import { inputSyle, labelStyle } from "../styles/tailwind";
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
          <div className="bg-zinc-800 mb-10">
            <div className="relative bg-inherit">
              <input
                type="email"
                {...register("email", { required: true })}
                className={inputSyle}
                placeholder=""
              />
              <label className={labelStyle}>Email</label>
            </div>
          </div>
          {errors.email && <p className="text-red-500">Email is required</p>}

          <div className="bg-zinc-800 mb-5">
            <div className="relative bg-inherit">
              <input
                type="password"
                {...register("password", { required: true })}
                className={inputSyle}
                placeholder=" "
              />
              <label className={labelStyle}>Password</label>
            </div>
          </div>
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}

          <button type="submit">Login</button>
        </form>

        <p className="flex gap-x-2 justify-between mt-5">
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
