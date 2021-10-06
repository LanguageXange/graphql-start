import React from "react";
import "./MainHero.css";
import animals from "../../assets/images";
import { Container } from "reactstrap";
import { useQuery, gql } from "@apollo/client";
const FETCH_MAIN_CARDS = gql`
  {
    mainCards {
      title
      image
    }
  }
`;

function MainHero() {
  const { loading, error, data } = useQuery(FETCH_MAIN_CARDS);
  //console.log(loading, error, data);
  return (
    <div className="MainHero">
      <Container>
        <div className="header-container">
          <h2>
            Find your <br /> new four-legged <br /> best friend
          </h2>

          <img src={animals.rhino} alt="rhino" />
        </div>
        <div className="cards-container">
          {loading ? "Loading....." : null}
          {error ? "ooops something happens" : null}
          {data?.mainCards.map((card) => {
            return (
              <div className="card">
                <h3>{card.title}</h3>
                <img
                  src={card.image}
                  alt="gift display"
                  style={{ width: "100%" }}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default MainHero;
