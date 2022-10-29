import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import '../styles/Main.css'

const Main = () => {
  return (
    <div>
      <Nav></Nav>
          <div>
            <Outlet></Outlet>
          </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
