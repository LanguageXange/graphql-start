const { ApolloServer, gql } = require("apollo-server");
const { myMainCards, mybooks, mygifts, mycategories } = require("./db");
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
`;

const resolvers = {
  Query: {
    books: () => mybooks,
    mainCards: () => myMainCards,
    categories: () => mycategories,
    gifts: () => mygifts,
    gift: (parent, args, context) => {
      //console.log("parent=", parent, "args=", args, "context=", context);
      let itemSlug = args.slug;
      return mygifts.find((gift) => gift.slug === itemSlug);
    },
    category: (parent, args, ctx) => {
      let itemSlug = args.slug;
      return mycategories.find((category) => category.slug === itemSlug);
    },
  },

  Category: {
    gifts: (parent, args, ctx) => {
      // console.log(parent); //{ id: '1', image: 'url', category: 'food', slug: 'food' }
      return mygifts.filter((gift) => gift.category === parent.id);
    },
  },

  Gift: {
    category: (parent, args, ctx) => {
      //console.log(parent); //return all the gifts
      return mycategories.find((category) => category.id === parent.category);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(() => {
  console.log("server is ready !");
});
