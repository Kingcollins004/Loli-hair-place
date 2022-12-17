import React from "react";
// import "./baglist.css";
import { Link } from "react-router-dom";
import "./wigImg.css";

function BagList({ eachWig }) {
  return (
    <div className="flexing">
      {eachWig.map((eachWig) => {
        const { id, image, name, price } = eachWig;
        return (
          <article key={id} className="listdisp">
            <Link to={`/bags/${id}`} className="text">
              <img src={image} alt={name} className="display-img"></img>
              <h5 className="display-name">{name}</h5>
              <h4 className="display-price">{price}</h4>
            </Link>
          </article>
        );
      })}
    </div>
  );
}

export default BagList;
