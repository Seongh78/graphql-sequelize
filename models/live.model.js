'use strict';
module.exports = (sequelize, DataTypes) => {
  const Live = sequelize.define(
    'Live',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      inputId: {
        type: DataTypes.STRING,
        notNull: true
      },
      channelId: {
        type: DataTypes.INTEGER,
        notNull: true
      },
      onair: {
        type: DataTypes.BOOLEAN,
        notNull: false
      },
      status: {
        type: DataTypes.ENUM(
          'WAITING',
          'STARTING',
          'RUNNING',
          'STOPPING',
          'IDLE'
        ),
        defaultValue: 'WAITING',
        notNull: true
      },
      uploadUrl1: {
        type: DataTypes.STRING,
        notNull: false
      },
      uploadUrl2: {
        type: DataTypes.STRING,
        notNull: false
      },
      streamKey1: {
        type: DataTypes.STRING,
        notNull: false
      },
      streamKey2: {
        type: DataTypes.STRING,
        notNull: false
      }
      // vod: {
      //   type: DataTypes.STRING,
      //   notNull: true
      // }
    },
    {
      freezeTableName: false,
      underscored: false,
      tableName: 'Live',
      timestamps: false
    }
  );
  Live.associate = function (models) {
    // associations can be defined here
    Live.belongsTo(models.Vod, {
      foreignKey: 'vod',
      target: 'id'
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
  return Live;
};
