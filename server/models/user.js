'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    nickname: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: true
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull:false,
      validate: {
        notNull: true
      }
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull:false,
      validate: {
        notNull: true
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
