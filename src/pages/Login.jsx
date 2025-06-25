import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { Bounce, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  useEffect(() => {
    document.title = "Neighborly | Login";
  }, []);
  const { loginUser, googleLogin } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        toast.success("Logged In Successfully!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        const user = res.user;
        if (user) {
          toast.success(`${user.displayName} Logged In Successfully!`);
          form.reset();
          navigate(`${location.state ? location.state : "/"}`);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`${(errorCode, errorMessage)}`);
        form.reset();
      });
  };

  return (
    <div>
      <div className="w-full md:w-1/2 mx-auto bg-base-200 border-base-300 rounded-box border p-4 my-10">
        <form onSubmit={handleLogin} className="fieldset ">
          <h1 className="text-2xl font-bold text-center text-orange-500 py-5">
            Login Your Account
          </h1>

          <label className="label text-[16px]">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email"
            required
          />

          <label className="label text-[16px]">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input w-full"
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="z-50 absolute top-[10px] right-4"
            >
              {showPassword ? (
                <FaEyeSlash size={20}></FaEyeSlash>
              ) : (
                <FaEye size={20}></FaEye>
              )}
            </button>
          </div>

          <a className="text-[16px]" href="/">
            Forgot Password?
          </a>

          <button type="submit" className="btn bg-orange-500 text-black mt-4">
            Login
          </button>
          <p className="py-2 text-[16px]">
            Don't have an account ?
            <Link to="/register" className="text-orange-500">
              {" "}
              Register
            </Link>
          </p>

          <div className="flex items-center w-full my-4">
            <hr className="w-full dark:text-gray-600" />
            <p className="px-3 text-base-content">OR</p>
            <hr className="w-full dark:text-gray-600" />
          </div>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="btn bg-white text-black w-full border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
