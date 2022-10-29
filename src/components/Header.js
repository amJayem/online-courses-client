import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import bg from "../assets/hero/hero-img.png";

const Header = () => {
  return (
    <div className="px-3">
      <div
        className="hero-area py-5"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className=" ">
          <div className="text-white">
            <h1>Online Education for Everyone</h1>
            <hr />
            <h1 className="mb-1 ">
              Learn from expert at Home
            </h1>
            <p className="mb-2">
              A new way of digital literacy. Learn from anywhere and build your
              career.
            </p>
            <Link to='/courses'><Button variant="light" >Get Started</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
