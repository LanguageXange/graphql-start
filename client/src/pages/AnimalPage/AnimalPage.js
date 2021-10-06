import React from "react";
import { Container } from "react-bootstrap";
import animals from "../../assets/images";
import star from "../../assets/svg/star.svg";
import "./AnimalPage.css";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const GIFT_QUERY = gql`
  query ($myslug: String!) {
    gift(slug: $myslug) {
      title
      image
      inStock
      description
      price
    }
  }
`;

function AnimalPage() {
  const { myslug } = useParams();
  const { loading, error, data } = useQuery(GIFT_QUERY, {
    variables: { myslug },
  });

  //   console.log(myslug, "what is myslug");

  //   console.log(data, "what is data");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error....</div>;

  return (
    <div className="py-5">
      <Container>
        <div className="d-flex">
          <img
            src={
              "https://images.ctfassets.net/aq13lwl6616q/78UPvYbF57bWTxK00Ob8ty/1bcc41db745d328c9058030cb42ff5b7/google-1-1.svg?w=160"
            }
            className="product-img"
            style={{ marginRight: "1rem" }}
            alt="product"
          />
          <div className="text-container">
            <h1>{data.gift.title}</h1>
            <div className="star-container">
              <img src={star} alt="stars" />
              <img src={star} alt="stars" />
              <img src={star} alt="stars" />
              <img src={star} alt="stars" />
              <img src={star} alt="stars" />
              <div className="rating-stock-container">
                <p>1402 rating</p>
                <p>{data.gift.inStock} in stock</p>
              </div>
            </div>
            <div className="about-container">
              <h4>About this Gift</h4>
              {data.gift.description.map((desc) => (
                <li>{desc}</li>
              ))}
            </div>
          </div>
          <div className="cart-container border">
            <p className="price">
              <span>CAD$ {data.gift.price}</span>
            </p>
            <p className="delivery-time">
              FREE delivery: Thursday, Feb 25 Details
              <button className="buy-now-btn" style={{ marginTop: "2rem" }}>
                Add to Cart
              </button>
              <button>Buy Now</button>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AnimalPage;
