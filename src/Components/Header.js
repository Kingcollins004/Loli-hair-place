import React from "react";
import image1 from "../Images/logo.png";
import { Link } from "react-router-dom";
import "./component.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={image1}></img>
      </div>
      <div className="navs">
        <Link to="/"> Home</Link>
        <Link to="/catalogue"> Catalogue</Link>
        <Link to="/newarrival"> New Arrival</Link>
      </div>
      <div className="btns">
        <Link to="/login" className="button">
          Login
        </Link>
        <Link to="/signup" className="button">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Header;
