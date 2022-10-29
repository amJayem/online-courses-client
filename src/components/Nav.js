import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { FaUserAlt, FaUserAltSlash } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthProvider";
import { useState } from "react";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () =>{
    setToggle(!toggle);
  }

  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.log("log out error: ", e));
  };
  return (
    <div className="px-2 mt-1">
      <div className=" nav-bar bg-info d-flex flex-row p-3 mb-3 align-items-center justify-content-evenly rounded">
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
          <Link to="/faq" className="text me-2">
            FAQ
          </Link>
        </div>
        <div>
          <Link to='/'>
            <img src={logo} alt="" className="nav-logo" />
          </Link>
        </div>
        <div className="d-flex flex-column flex-sm-row align-items-center ">
          
          {user?.uid ? (
            <Button variant="none" className="m-2" title={user?.email}>
              {user?.photoURL ? (
                <img className="profile-img" src={user.photoURL} alt="" />
              ) : (
                <FaUserAlt title={user?.email}/>
              )}
            </Button>
          ) : (
            <Button className="m-2" variant="secondary"
            title='User not signed in'><FaUserAltSlash/></Button>
          )}

          {user?.uid ? (
            <Link onClick={handleLogOut} className="m-2 ">
              <Button variant="warning">Logout</Button>
            </Link>
          ) : (
            <>
              <Link to="/register" className="m-2">
                <Button>Register</Button>
              </Link>
              <Link to="/login" className="m-2">
                <Button variant="warning">Login</Button>
              </Link>
            </>
          )}

          { toggle?
            <Button onClick={handleToggle} variant="light"  className="m-2">
              <span className="">
                Light <WiMoonAltFirstQuarter />
              </span>
            </Button>
            :
            <Button onClick={handleToggle} variant="dark"  className="m-2">
              <span className="">
                Night <WiMoonAltFirstQuarter />
              </span>
            </Button>
          }
        </div>
      </div>
    </div>
  );
};

export default Nav;
