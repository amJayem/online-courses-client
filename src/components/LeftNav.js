import React from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div>
      <ul className="hidden lg:menu bg-base-100 w-56 rounded-box">
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
