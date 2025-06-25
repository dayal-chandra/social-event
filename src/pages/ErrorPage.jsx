import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl text-center font-bold">404</h1>
      <h1 className="text-3xl text-center font-bold">Page Not Found</h1>
      <Link to="/">
        <button className="btn bg-orange-500 mt-10">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
