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

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.log("log out error: ", e));
  };

  return (
    <Navbar className="bg mb-5" bg="" expand="lg">
      <Container>
        <Navbar>
          <Link className="name" to="/">
            eTutor
          </Link>
        </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/courses">Courses</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/blog">Blog</Link>
            </Nav.Link>
            {user?.uid ? (
              <Nav.Link>
                <Link onClick={handleLogOut}>Logout</Link>
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
          <div>
            <p className="">{ user?.displayName || user?.email}</p>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navber;
