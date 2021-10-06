import React from "react";
import Card from "../Card/Card";
import { Container } from "react-bootstrap";

function CardDisplay({ gifts }) {
  return (
    <div className="card-display">
      <Container className="card-display-container">
        {gifts.map((gift) => {
          return <Card gift={gift} />;
        })}
      </Container>
    </div>
  );
}

export default CardDisplay;
