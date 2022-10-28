import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { FaUserAlt, FaUserAltSlash } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.log("log out error: ", e));
  };
  return (
    <div className="px-2 mt-1">
      <div className="bg-info d-flex flex-row p-3 mb-3 align-items-center justify-content-evenly rounded">
        <div className="d-flex flex-column flex-sm-row">
          <Link to="/" className="text me-2">
            Home
          </Link>
          <Link to="/courses" className="text me-2">
            Courses
          </Link>
          <Link to="/blog" className="text me-2">
            Blog
          </Link>
          <Link to="" className="text me-2">
            FAQ
          </Link>
        </div>
        <div>
          <Link to='/' className="text">
            <img src={logo} alt="" className="nav-logo" />
          </Link>
        </div>
        <div className="d-flex flex-column flex-sm-row align-items-center">
          <Link className=" text">
            <span className="mx-2">
              Dark <WiMoonAltFirstQuarter />
            </span>
          </Link>
          {user?.uid ? (
            <Link className=" text">
              {user?.photoURL ? (
                <img className="profile-img" src={user.photoURL} alt="" />
              ) : (
                <FaUserAlt></FaUserAlt>
              )}
            </Link>
          ) : (
            <FaUserAltSlash />
          )}
          {user?.uid ? (
            <Link onClick={handleLogOut} className="m-1">
              <Button variant="warning">Logout</Button>
            </Link>
          ) : (
            <>
              <Link to="/register" className="m-1">
                <Button>Register</Button>
              </Link>
              <Link to="/login" className="me-1">
                <Button variant="dark">Login</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
