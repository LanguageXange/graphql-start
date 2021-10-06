import React from "react";
import lion from "../../assets/image/lion2.jpg";
import "./Card.css";
import star from "../../assets/svg/star.svg";
import animal from "../../assets/images";
import { Link } from "react-router-dom";

function Card({ gift }) {
  return (
    <Link to={`/product/${gift.slug}`} className="Card">
      <img className="main-img" src={animal[gift.image]} alt="product" />
      <h4>{gift.title}</h4>
      <div className="card-start">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </div>
      <div className="card-price">
        <p>CAD $</p>
        <h4>{gift.price}</h4>
      </div>
      <div className="card-prime">
        <span>prime</span> FREE delivery by{" "}
        <span className="bold">Tuesday, Feb 16</span>
      </div>
    </Link>
  );
}

export default Card;
