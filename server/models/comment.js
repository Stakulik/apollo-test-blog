'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.User, {as: 'user'});
    }
  }
  Comment.init({
    body: {
      type: DataTypes.TEXT,
      allowNull:false,
      validate: {
        notNull: true
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notNull: true
      }
    },
    published_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
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
    modelName: 'Comment',
  });
  return Comment;
};