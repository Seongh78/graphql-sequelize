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
    join: Boolean!
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => {
      models.Vod.findOne({ where: { id: 'ck8gv93q1001a07712ye6oxsf' } }).then(
        result => {
          console.log(result);
        }
      );
      console.log('models.Vod: ');
      return `Hello ${name || 'World'}`;
    },

    join: (_, __) => {
      models.Live.findAll({
        // where: { id: 'ck8gv93q1001a07712ye6oxsf' },
        include: ['Vod']
      }).then(result => {
        console.log(result);
      });
      return true;
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Server is running on localhost:4000'));
