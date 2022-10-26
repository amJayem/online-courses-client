import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import './Main.css';

const Main = () => {
  return (
    <div className="main-container">
      <div className=" sticky top-0">
        <Navbar />
      </div>
      <div className="px-28 min-h-screen">
        {/* <Header></Header> */} 
        {/* desktop:flex max-mobile:flex-col */}
        <div className="flex justify-between mt-5">
          {/* <div className="mobile:hidden desktop:menu shrink w-1/6">
            <LeftNav></LeftNav>
          </div> */}

          <div className="flex-auto">
            <Outlet></Outlet>
          </div>

          <div className="">
            {/* <RightNav /> */}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
