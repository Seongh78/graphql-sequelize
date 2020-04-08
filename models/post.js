'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      user_id: DataTypes.INTEGER,
    },
    {
      freezeTableName: true,
      underscored: true,
      tableName: 'post',
    }
  );
  Post.associate = function (models) {
    // associations can be defined here
    Post.belongsTo(models.User, {
      foreignKey: 'user_id',
      sourceKey: 'id',
    });
  };
  return Post;
};
