'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      freezeTableName: true,
      underscored: true,
      tableName: 'user',
    }
  );
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Post, {
      foreignKey: 'user_id',
      sourceKey: 'id',
    });
  };

  // DB동기화 : force->기존데이터 삭제 여부
  // User.sync({ force: false }).then(() => {
  // Seed데이터 생성가능
  // return User.create({
  //   userName: '존',
  //   engName: 'John'
  // });
  // });
  return User;
};
