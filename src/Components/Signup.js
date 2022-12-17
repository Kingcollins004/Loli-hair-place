import React from "react";
import image1 from "../Images/logo.png";
import { Link } from "react-router-dom";
import "./component.css";
import Footer from "./Footer";

const Signup = () => {
  return (
    <section>
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
          <Link to="/login">Login</Link>
        </div>
      </div>
      <div className="create-section-s">
        <div className="create-account-s">
          <h1>Create new account</h1>
          <div className="input-field-s">
            <div className="auto-log-s">
              <button className="google">Sign up with Google</button>
              <button>Sign up with Apple</button>
            </div>
            <div className="input-s">
              <div className="names">
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="Fname"
                />
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="Lname"
                />
              </div>
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="email"
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="password"
              />
              <input
                type="password"
                id="password"
                placeholder="Confirm Password"
                className="password"
              />
            </div>
            <div className="sub-script-s">
              <p>Already have an account?</p>
              <Link to="/login" className="link-s">
                Login
              </Link>
            </div>
            <button className="btn-s">Sign up</button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Signup;
