import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import { useQuery, gql } from "@apollo/client";

const CATEGORY_QUERY = gql`
  query ($myslug: String!) {
    category(slug: $myslug) {
      category
      image
      slug
      gifts {
        id
        title
        image
        price
        slug
      }
    }
  }
`;
function CategoryPage() {
  const { myslug } = useParams();
  const { loading, error, data } = useQuery(CATEGORY_QUERY, {
    variables: { myslug },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error....</div>;

  return (
    <div className="py-5">
      <Container>
        <h1 className="text-capitalize">
          {data.category.category}
          <CardDisplay gifts={data.category.gifts} />
        </h1>
      </Container>
    </div>
  );
}

export default CategoryPage;
