import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
// import logo from '../assets/logo/logo.png';
import "../styles/Navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.log("log out error: ", e));
  };

  return (
    <Navbar className="bg mb-5" bg="" expand="lg">
      <Container>
        <Navbar>
          <Link className="text" to="/">
            eTutor
          </Link>
        </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="text" to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text" to="/courses">Courses</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text" to="/blog">Blog</Link>
            </Nav.Link>
            {user?.uid ? (
              <Nav.Link>
                <Link className="text" onClick={handleLogOut}>Logout</Link>
              </Nav.Link>
            ) : (
              <>
                <Nav.Link>
                  <Link to="login">Login</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/register">Register</Link>
                </Nav.Link>
              </>
            )}
          </Nav>
          <div className="d-flex align-items-center">
            <Nav.Link className="bg-white text-black p-1 fw-bold">{ user?.displayName || user?.email}</Nav.Link>
            <img className="profile-img" src={user?.photoURL} alt=""/>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navber;
