import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { Bounce, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  useEffect(() => {
    document.title = "Neighborly | Register";
  }, []);
  const { createUser, setUser, updateUser, googleLogin } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 character.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain a uppercase letter.");
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain a lowercase letter.");
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        if (user) {
          toast.success(`${name} Registered Successfully!`);
          form.reset();
          navigate(`${location.state ? location.state : "/"}`);
        }

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`${(errorCode, errorMessage)}`);
      });
  };

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

  return (
    <div className="w-full md:w-1/2 mx-auto bg-base-200 border-base-300 rounded-box border py-10 px-5 my-5">
      <form onSubmit={handleRegister} className="fieldset w-full">
        <h1 className="text-2xl font-bold text-center text-orange-500 pb-5">
          Please Register
        </h1>

        <label className="label text-[16px] text-base-content">Name</label>
        <input
          type="text"
          name="name"
          className="input w-full"
          placeholder="Your Name"
          required
        />
        <label className="label text-[16px] text-base-content">Photo URL</label>
        <input
          type="url"
          name="photo"
          className="input w-full"
          placeholder="Photo URL"
          required
        />
        <label className="label text-[16px] text-base-content">Email</label>
        <input
          type="email"
          name="email"
          className="input w-full"
          placeholder="Email"
          required
        />

        <label className="label text-[16px] text-base-content">Password</label>
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
        <button type="submit" className="btn  bg-orange-500 text-black mt-4">
          Register
        </button>
        <p className="text-[16px]">
          Already have an account?{" "}
          <Link className="text-orange-500" to="/login">
            Login
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
        className="btn bg-white w-full text-black border-[#e5e5e5]"
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
  );
};

export default Register;
