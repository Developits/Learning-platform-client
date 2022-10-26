import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <img
          className="h-14"
          src="https://cdn.iconscout.com/icon/free/png-256/code-forces-3628695-3029920.png"
          alt=""
        />
        <Link to="/" className="ml-2 mt-3 font-bold text-3xl">
          Code Force
        </Link>
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost normal-case text-xl" to="/courses">
          Courses
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/blogs">
          Blogs
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/faq">
          FAQ
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost normal-case text-xl">
          <Link>Log in</Link>
        </button>
        <button className="btn btn-ghost normal-case text-xl">
          <Link>Register</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
