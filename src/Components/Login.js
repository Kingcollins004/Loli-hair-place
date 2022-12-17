import React from "react";
import image1 from "../Images/logo.png";
import { Link } from "react-router-dom";
import "./component.css";
import Footer from "./Footer";

const Login = () => {
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
          <Link to="/signup" className="button">
            Sign up
          </Link>
        </div>
      </div>
      <div className="create-section">
        <div className="create-account">
          <h1>Create new account</h1>
          <div className="input-field">
            <div className="auto-log">
              <button>Login with Google</button>
              <button>Login with Apple</button>
            </div>
            <div className="input">
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
            </div>
            <div className="sub-script">
              <p>Don't have an account?</p>
              <Link to="/signup" className="link">
                Sign up
              </Link>
            </div>
            <button className="btn">Login</button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Login;
