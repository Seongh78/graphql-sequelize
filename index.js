import { GraphQLServer } from 'graphql-yoga';
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')
const models = require('./models');

/* Sequelize init */
models.sequelize
  .sync()
  .then(() => {
    console.log('Sequelize Success');
  })
  .catch(err => {
    console.log('Sequelize Error : ', err);
  });

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Server is running on localhost:4000'));
