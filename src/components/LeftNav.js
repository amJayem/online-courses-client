import React from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div>
      <ul className="hidden lg:menu bg-base-100 w-56 rounded-box">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" alt="" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <Link className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
            <Link>Settings</Link>
          </li>
          <li>
            <Link>Logout</Link>
          </li>
        </ul>
      </div>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Courses</Link>
        </li>
        <li>
          <Link>Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftNav;
