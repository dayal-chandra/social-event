import React, { use } from "react";
import logo from "/event-logo.png";
import { Link, NavLink } from "react-router";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../provider/AuthProvider";
import { Bounce, toast } from "react-toastify";

const Header = () => {
  const { user, logoutUser } = use(AuthContext);
  // console.log(user);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success(`${user.displayName} Logged Out Successfully!`);
      })
      .catch((error) => {
        toast.error(`${error}`);
      });
  };

  return (
    <div className="navbar fixed py-0 px-2 md:px-20 bg-base-100 ">
      <div className="navbar-start">
        <Link to="/">
          <div className="flex justify-center items-center gap-2">
            <img className="w-10" src={logo} alt="" />
            <p className="text-2xl font-bold text-orange-500">Neighborly</p>
          </div>
        </Link>
      </div>

      <div className="navbar-end space-x-5">
        <div className="flex justify-center items-center gap-5 font-semibold">
          <NavLink className="p-2 hidden md:flex" to="/upcoming-events">
            Upcoming Events{" "}
          </NavLink>

          {user ? (
            <button
              onClick={handleLogout}
              className="btn border-orange-500 text-orange-500 hidden md:flex"
            >
              Logout
            </button>
          ) : (
            <NavLink className="p-2" to="/login">
              Login
            </NavLink>
          )}
        </div>
        <div>
          <label className="toggle text-base-content">
            <input type="checkbox" value="dark" className="theme-controller" />

            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>

            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
        </div>

        <div className="bg-base-100">
          <div className="flex-1">
            {user ? (
              <div className="dropdown">
                <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={`${user.photoURL}`}
                      alt="profile"
                      data-tooltip-id="my-tooltip-inline"
                      data-tooltip-content={`${user ? user.displayName : ""}`}
                      data-tooltip-place="top"
                    />
                    <Tooltip
                      id="my-tooltip-inline"
                      place="top"
                      style={{ backgroundColor: "#f97316", color: "black" }}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu font-semibold dropdown-content right-0 z-[1] p-2 mt-4 shadow bg-base-100 rounded-box w-44 md:w-52 border border-orange-500"
                >
                  <li>
                    <NavLink to="/create-event">Create Event</NavLink>
                  </li>
                  <li>
                    <NavLink to="/manage-events">Manage Events</NavLink>
                  </li>
                  <li>
                    <NavLink to="/joined-events">Joined Events</NavLink>
                  </li>
                  <li className="md:hidden">
                    <NavLink to="/upcoming-events">Upcoming Events</NavLink>
                  </li>

                  {/* <li className="md:hidden">
                    <NavLink to="/login">Login</NavLink>
                  </li> */}
                  <li className="md:hidden">
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="border-orange-500 border-b"></div>
    </div>
  );
};

export default Header;
