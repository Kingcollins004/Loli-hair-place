import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

import { useRef, useState, useEffect } from "react";
import images from "../Components/images";
import "./home.css";
import image1 from "../Images/newA1.png";
import image2 from "../Images/newA2.png";
import image3 from "../Images/newA3.png";
import image4 from "../Images/newA4.png";
import cate1 from "../Images/cate1.png";
import cate2 from "../Images/cate2.png";
import cate3 from "../Images/cate3.png";
import logo from "../Images/logo.png";
import Footer from "../Components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  // const [width, setWidth] = useState(0);
  // const carousel = useRef();
  // useEffect(() => {
  //   console.log(carousel.current.scrollWidth);
  // });
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <Header />
      <Slider {...settings}>
        {images.map((images) => {
          return (
            <div className="items" key={images}>
              <img src={images} alt="slider"></img>
            </div>
          );
        })}
      </Slider>

      <div className="new-arrival-section">
        <div className="heading">
          <h2>New Arrival</h2>
          <h4>watch all</h4>
        </div>

        <div className="img-container">
          <div className="wigs">
            <img src={image1} alt="desc"></img>
            <p>Wigs : N15,000</p>
          </div>
          <div className="attach">
            <img src={image2} alt="desc"></img>
            <p>Attachments : N15,900</p>
          </div>
          <div className="bags">
            <img src={image3} alt="desc"></img>
            <p>Bags : N15,000</p>
          </div>
          <div className="shoes">
            <img src={image4} alt="desc"></img>
            <p>Shoes: N15,000</p>
          </div>
          <div className="attach">
            <img src={image2} alt="desc"></img>
            <p>Attachments : N15,900</p>
          </div>
          <div className="wigs">
            <img src={image1} alt="desc"></img>
            <p>Wigs : N15,000</p>
          </div>
          <div className="bags">
            <img src={image3} alt="desc"></img>
            <p>Bags : N15,000</p>
          </div>
        </div>
      </div>

      <div className="categories">
        <div className="heading">
          <h2>Categories</h2>
          <h4>Watch all</h4>
        </div>
        <div className="cate-containers">
          <div className="cate-div-cont">
            <Link to="/wigs" className="cate-div">
              <img src={cate1} alt="cate"></img>
              <button className="btn">Wigs and attachment</button>
            </Link>
            <Link to="/bags" className="cate-div">
              <img src={cate2} alt="cate"></img>
              <button className="btn">Bags</button>
            </Link>
            <Link to="/shoes" className="cate-div">
              <img src={cate3} alt="cate"></img>
              <button onClick="/shoes" className="btn">
                Shoes
              </button>
            </Link>
          </div>
          <div className="card-container">
            <div className="">
              <img src={logo} alt="logo"></img>
              <h5>Your number one shop for your hair, shoes and bags</h5>
            </div>
            <div>
              <h3>New to Loli's place?</h3>
              <p>
                Subscribe to our newsletter to get updates on our latest offers
              </p>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                ></input>
                <button onClick="/bags" type="button" className="card-btn">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="new-arrival-section">
        <div className="heading">
          <h2>New Arrival</h2>
          <h4>watch all</h4>
        </div>

        <div className="img-container">
          <div className="wigs">
            <img src={image1} alt="desc"></img>
            <p>Wigs : N15,000</p>
          </div>
          <div className="attach">
            <img src={image2} alt="desc"></img>
            <p>Attachments : N15,900</p>
          </div>
          <div className="bags">
            <img src={image3} alt="desc"></img>
            <p>Bags : N15,000</p>
          </div>
          <div className="shoes">
            <img src={image4} alt="desc"></img>
            <p>Shoes: N15,000</p>
          </div>
          <div className="attach">
            <img src={image2} alt="desc"></img>
            <p>Attachments : N15,900</p>
          </div>
          <div className="wigs">
            <img src={image1} alt="desc"></img>
            <p>Wigs : N15,000</p>
          </div>
          <div className="bags">
            <img src={image3} alt="desc"></img>
            <p>Bags : N15,000</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
