import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
          <div className="container">
            <Outlet></Outlet>
          </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
