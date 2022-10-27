import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navber from "../components/Navbar";
import '../styles/Main.css'

const Main = () => {
  return (
    <div>
      <Navber></Navber>
          <div className="container">
            <Outlet></Outlet>
          </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
