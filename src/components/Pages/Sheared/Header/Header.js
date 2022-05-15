import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li className="lg:mx-2">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="lg:mx-2">
        <NavLink to="/appointment">Appointment</NavLink>
      </li>
      <li className="lg:mx-2">
        <NavLink to="/reviews">Reviews</NavLink>
      </li>
      <li className="lg:mx-2">
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li className="lg:mx-2">
        <NavLink to="/about">About Us</NavLink>
      </li>
      {user && (
        <li className="lg:mx-2">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
      <li className="lg:mx-2">
        {user ? (
          <button onClick={logout} className="btn btn-outline btn-primary">
            SignOut
          </button>
        ) : (
          <NavLink to="/login">Login/Signup</NavLink>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Doctor's Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <label
          tabIndex="1"
          for="my-drawer-2"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
