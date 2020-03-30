const Sequelize = require('sequelize');
const sequelize = new Sequelize('graph', 'graph', 'graph', {
  host: 'localhost',
  dialect: 'postgresql'
});

// Table
const MovieModel = sequelize.define(
  'movie',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    score: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: 'movie',
    timestamps: false
  }
);
// Synchronize table
sequelize
  .sync({
    force: false
  })
  // Insert dummy data
  .then(() =>
    MovieModel.create({
      name: 'Star wars',
      score: 4
    })
  )
  .then(() =>
    MovieModel.create({
      name: 'Avgengers',
      score: 5
    })
  )
  .then(() =>
    MovieModel.create({
      name: 'Cats',
      score: 2
    })
  )
  .then(() =>
    MovieModel.create({
      name: 'Tazza',
      score: 3
    })
  );

const Movies = sequelize.models.movie;

module.exports = {
  Movies: Movies
};
