const { Movies } = require('./db');

const resolvers = {
  Query: {
    movies: () => {
      return Movies.all();
    },
    movie: (_, args) => {
      return Movies.find({
        where: args
      });
    }
  },
  Mutation: {
    createMovie: (_, args) => {
      const movie = Movies.create({
        name: args.name,
        score: args.score
      });
      return movie;
    },
    deleteMovie: (_, args) => {
      const movie = Movies.destroy({
        where: args
      });
      return { id: args.id };
    },
    updateMovie: (_, args) => {
      const data = {};
      if (args.name === undefined) {
        data.score = args.score;
      } else if (args.score === undefined) {
        data.name = args.name;
      } else {
        data.name = args.name;
        data.score = args.score;
      }
      const movie = Movies.update(data, {
        where: { id: args.id }
      });
      return { id: args.id };
    }
  }
};

module.exports = {
  resolvers: resolvers
};
