import React from "react";
import bg from '../assets/hero/hero-img.png';
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div className="lg:hidden sticky top-0">
        <Navbar/>
      </div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${bg})` }}
        >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className=" text-left text-neutral-content">
          <div className="max-w-md px-6 text-white">
            <h1 className="mb-5 text-5xl font-bold"> Learn from expert at Home</h1>
            <p className="mb-5">
              A new way of digital literacy. Learn from anywhere and build your career.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
