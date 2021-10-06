const { gql } = require("apollo-server");
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Gift {
    id: ID! ## for identifying
    slug: String! ## for identifying (resolver)
    title: String!
    image: String!
    rating: Float # can be null
    price: String!
    description: [String!]! # array of string
    inStock: Int!
    onSale: Boolean
    category: Category # so that if we click a certain category we can link to the corresponding gift
  }

  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    gifts: [Gift!]!
  }

  type MainCard {
    title: String!
    image: String! # now it cannot be null after adding exclamation mark
  }
  # the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    mainCards: [MainCard]
    gifts: [Gift]
    gift(slug: String!): Gift # select only one gift
    categories: [Category!]
    category(slug: String!): Category # select only one category
  }

  type Mutation {
    addGift(
      slug: String!
      title: String!
      image: String!
      rating: Float
      price: String!
      description: [String!]!
      inStock: Int!
      onSale: Boolean
      category: String
    ): Gift

    removeGift(id: ID!): Boolean
    updateGift(
      id: ID!
      title: String
      image: String
      rating: Float
      price: String
      description: [String!]
      inStock: Int
      onSale: Boolean
      category: String
    ): Boolean
  }
`;
module.exports = typeDefs;
