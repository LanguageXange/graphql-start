import React from "react";
import MainHero from "../components/MainHero/MainHero";
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import { useQuery, gql, useMutation } from "@apollo/client";

const FETCH_GIFTS = gql`
  {
    gifts {
      image
      id
      price
      slug
      title
      rating
      description
    }
  }
`;

const ADD_GIFT_MUTATION = gql`
  mutation (
    $image: String!
    $category: String!
    $title: String!
    $stock: Int!
    $price: String!
    $description: [String!]!
    $rating: Float
    $slug: String!
  ) {
    addGift(
      image: $image
      category: $category
      title: $title
      inStock: $stock
      price: $price
      description: $description
      rating: $rating
      slug: $slug
    ) {
      id
    }
  }
`;

function LandingPage() {
  const { loading, error, data } = useQuery(FETCH_GIFTS);
  const [firstArgIsAFunction] = useMutation(ADD_GIFT_MUTATION); // return an array
  // console.log(firstStuff, "what return after useMutation");
  const handleClick = () => {
    console.log("click");
    // firstArg refers to addGift
    return firstArgIsAFunction({
      variables: {
        image: "sdfsdfd",
        category: "1",
        title: "This is a really cool backapck",
        stock: 13,
        price: "32,333",
        description: ["das"],
        rating: 3.5,
        slug: "backpack",
      },
    });
  };
  //console.log(data);
  if (loading) return <div>Loading</div>;
  if (error) return <div>Oooops something is wrong</div>;
  return (
    <div>
      <MainHero />
      <CategoryDisplay />
      <CardDisplay gifts={data.gifts} />

      <button onClick={handleClick}> ADD A Gift</button>
    </div>
  );
}

export default LandingPage;
