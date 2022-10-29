import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/logo/logo.png";
import {} from "react-icons/wi";
import {
  FaFacebook,
  FaFirefoxBrowser,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-2 my-2">
      <footer className="bg-info rounded">
        <div className="d-flex flex-column flex-sm-row  p-5  justify-content-evenly">
          <div className="">
            <img className="nav-logo" src={bg} alt="" />
            <p className="ms-2 footer-text">
              eTutor
              <br />
              Providing online education for everyone.
            </p>
          </div>

          <div className="ms-2 d-flex  flex-sm-row">
            <Link className="social-icon">
              <FaFacebook />
            </Link>
            <Link className="social-icon">
              <FaYoutube />
            </Link>
            <Link className="social-icon">
              <FaWhatsapp />
            </Link>
            <Link className="social-icon">
              <FaFirefoxBrowser />
            </Link>
          </div>
        </div>
        <div className="text-center text-white pb-3">
        <span> eTutor &copy; All rights reserved </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
