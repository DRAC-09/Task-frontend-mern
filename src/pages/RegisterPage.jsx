import "../styles/tailwind.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex h-full items-center justify-center">
      <div className="bg-black bg-opacity-40 max-w-md w-full p-10">
        {registerErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white my-2" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold text-center pb-5">Register</h1>

        <form onSubmit={onSubmit}>
          <div className="bg-slate-950">
            <div className="relative bg-inherit">
              <input
                id="username"
                type="text"
                {...register("username", { required: true })}
                className="input peer"
                placeholder=" "
                autoFocus
              />
              <label htmlFor="username" className="label">
                Username
              </label>
            </div>
          </div>
          {errors.username && (
            <p className="text-red-500 text-sm">Username is required</p>
          )}

          <div className="bg-slate-950 mt-5">
            <div className="relative bg-inherit">
              <input
                id="email"
                type="email"
                {...register("email", { required: true })}
                className="input peer"
                placeholder=" "
              />
              <label htmlFor="email" className="label">
                Email
              </label>
            </div>
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm">Email is required</p>
          )}

          <div className="bg-slate-950 mt-5">
            <div className="relative bg-inherit">
              <input
                id="password"
                type="password"
                {...register("password", { required: true })}
                className="input peer"
                placeholder=" "
              />
              <label htmlFor="password" className="label">
                Password
              </label>
            </div>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">Password is required</p>
          )}

          <div className="flex justify-end">
            <button type="submit" className="btn bg-sky-800">
              Register
            </button>
          </div>
        </form>

        <p className="flex gap-x-2 justify-center mt-5 text-sm md:text-md">
          Alrady have an account?{" "}
          <Link to="/login" className="text-sky-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
