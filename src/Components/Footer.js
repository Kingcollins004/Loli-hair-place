import React from "react";
import "./component.css";
import image1 from "../Images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logof">
        <img src={image1} alt="logo"></img>
      </div>
      <div className="footer-link">
        <div className="help-links">
          <h4>Let us help you</h4>
          <div className="links">
            <a href="#">Help center</a>
            <a href="#">Delivery options and timeline</a>
            <a href="#">Wholesale and bulk purchases</a>
            <a href="#">Shipments</a>
            <a href="#">Dispute resolution policy</a>
          </div>
        </div>
        <div className="about-links">
          <h4>About Loli's Hairplace</h4>
          <div className="links">
            <a href="#">About us</a>
            <a href="#">Terms and conditions</a>
            <a href="#">Flashsales</a>
          </div>
        </div>
        <div>
          <h4>Join us</h4>
          <a href="#">About us</a>
          <a href="#">Terms and conditions</a>
          <a href="#">Flashsales</a>
        </div>
        <div>
          <h4>Payment methods and delivery</h4>
          <a href="#">About us</a>
          <a href="#">Terms and conditions</a>
          <a href="#">Flashsales</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
