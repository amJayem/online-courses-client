import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
// import logo from '../assets/logo/logo.png'

const Navbar = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-primary text-white">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl bg-neutral rounded-2xl">
            eTutor
          </Link>
          {
            user?.uid ? 
            <p>{user.displayName}</p>
            : 'not log in'
          }
        </div>
        <div className="flex gap-2">
          {/* menu for mobile device */}
          <div className="desktop:hidden">
            <div className=" dropdown">
              <label tabIndex={0} className="btn m-1 bg-primary">Click</label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                
                {
                  user?.uid?
                  <li><Link to="/logout">Logout</Link></li>
                  :
                  <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                  </>
                }
              </ul>
            </div>
          </div>
          {/* menu for desktop */}
          <div className="desktop:flex gap-2 hidden">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/blog">Blog</Link>
              {
                  user?.uid?
                  <li><Link to="/logout">Logout</Link></li>
                  :
                  <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                  </>
              }
          </div>

          <div className="">

            <div className="ml-5 form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered"
              />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.uid ? 
                    <>{user.photoURL}</>
                    : "https://placeimg.com/80/80/people"} alt="" />
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

          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
