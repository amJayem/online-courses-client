import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import Home from "../Pages/Home";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex justify-between">
        
        <div>
            <LeftNav></LeftNav>
        </div>

        <div className="grow">
          <Home />
        </div>

        <div className="grow">
          <RightNav />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
