import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeftNav from "../components/LeftNav";
import Navbar from "../components/Navbar";
import RightNav from "../components/RightNav";
import './Main.css';

const Main = () => {
  return (
    <div className="main-container">
      <div className=" sticky top-0">
        <Navbar />
      </div>
      <div className="px-28">
        <Header></Header>
        <div className="desktop:flex max-mobile:flex-col  justify-between mt-10 ">
          <div className="mobile:hidden desktop:menu shrink w-1/6">
            <LeftNav></LeftNav>
          </div>

          <div className="flex-auto">
            <Outlet></Outlet>
          </div>

          <div className="flex-1">
            <RightNav />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
