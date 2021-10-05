const { ApolloServer } = require("apollo-server");
const { myMainCards, mybooks, mygifts, mycategories } = require("./db");
const typeDefs = require("./schema");
const Query = require("./resolvers/Query");
const Category = require("./resolvers/Category");
const Gift = require("./resolvers/Gift");
const Mutation = require("./resolvers/Mutation");

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Category, Gift, Mutation },
  context: {
    myMainCards,
    mybooks,
    mygifts,
    mycategories,
  },
});

server.listen().then(() => {
  console.log("server is ready !");
});
