import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import "./categories.css";
import WigData from "../Data/WigData";
import { useState } from "react";
import WigImage from "../Image-Display/WigImage";
import "./wbs.css";
import Footer from "../Components/Footer";

const Wigs = () => {
  const [eachWig, setEachWig] = useState(WigData);
  return (
    <div>
      <Header />
      <div className="section">
        <h3>Catalogue</h3>
        <p>Expolre our amazing categories of product</p>

        <div className="nav-link">
          <Link to="/wigs" className="link">
            Wigs
          </Link>
          <Link to="/bags" className="link">
            Bags
          </Link>
          <Link to="/shoes" className="link">
            Shoes
          </Link>
        </div>
        <div className="display-section">
          <WigImage eachWig={eachWig} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wigs;
