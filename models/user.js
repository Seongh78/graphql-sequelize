'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userId: DataTypes.STRING,
      userName: DataTypes.STRING,
      engName: DataTypes.STRING
    },
    {
      freezeTableName: true,
      underscored: true,
      tableName: 'user'
    }
  );
  User.associate = function(models) {
    // associations can be defined here
  };

  // DB동기화 : force->기존데이터 삭제 여부
  User.sync({ force: false }).then(() => {
    // Seed데이터 생성가능
    // return User.create({
    //   userName: '존',
    //   engName: 'John'
    // });
  });
  return User;
};
