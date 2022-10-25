import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
      <Link to="/courses" className="btn btn-ghost normal-case text-xl">
        courses
      </Link>
      <Link to="/blogs" className="btn btn-ghost normal-case text-xl">
        Blogs
      </Link>
      <Link to="/faq" className="btn btn-ghost normal-case text-xl">
        Faq
      </Link>
    </div>
  );
};

export default Header;
