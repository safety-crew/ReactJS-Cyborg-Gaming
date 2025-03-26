import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="most-popular-item">
      <div className="card-wrapper">
        <img className="most-popular-item-image" src={props.image} alt="" />
        <div className="most-popular-item-content">
          <h4 className="most-popular-item-title">
            {props.title} <br />
            <span>{props.category}</span>
          </h4>
          <ul>
            <li>
              <span>{props.rate}</span>
            </li>
            <li>
              <span>{props.downloads}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
