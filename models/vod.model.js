'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vod = sequelize.define(
    'Vod',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      type: {
        type: DataTypes.STRING,
        notNull: true
      },
      companyId: {
        type: DataTypes.INTEGER,
        notNull: true
      },
      subject: {
        type: DataTypes.STRING,
        notNull: true
      },
      content: {
        type: DataTypes.STRING,
        notNull: false
      },
      portalId: {
        type: DataTypes.STRING,
        notNull: true
      },
      employeeNo: {
        type: DataTypes.STRING,
        notNull: true
      },
      cdnUrl: {
        type: DataTypes.STRING,
        notNull: false
      },
      vodUrl: {
        type: DataTypes.STRING,
        notNull: false
      },

      permission: {
        type: DataTypes.ENUM(
          'PUBLIC',
          'PRIVATE',
          'COMPANY',
          'GROUP',
          'CHANNEL'
        ),
        defaultValue: 'PUBLIC',
        notNull: true
      },
      share: {
        type: DataTypes.BOOLEAN,
        notNull: true
      },
      comment: {
        type: DataTypes.BOOLEAN,
        notNull: true
      },

      thumbnailUrl: {
        type: DataTypes.STRING,
        notNull: false
      },
      thumbnailFileName: {
        type: DataTypes.STRING,
        notNull: false
      },
      thumbnailSize: {
        type: DataTypes.INTEGER,
        notNull: false
      },
      thumbnailPath: {
        type: DataTypes.STRING,
        notNull: false
      },
      thumbnailExtension: {
        type: DataTypes.STRING,
        notNull: false
      }

      // createdAt: {
      //   type: DataTypes.TIMESTAMP
      // },
      // updatedAt: {
      //   type: DataTypes.TIMESTAMP
      // }
    },
    {
      freezeTableName: false,
      underscored: false,
      tableName: 'Vod',
      timestamps: false
    }
  );
  // Vod.associate = function (models) {
  //   Vod.hasMany(models.Live, {
  //     foreignKey: 'vod',
  //     sourceKey: 'id'
  //   });
  // };

  // DB동기화 : force->기존데이터 삭제 여부
  // User.sync({ force: false }).then(() => {
  // Seed데이터 생성가능
  // return User.create({
  //   userName: '존',
  //   engName: 'John'
  // });
  // });
  return Vod;
};
