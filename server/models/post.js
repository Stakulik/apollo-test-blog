'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, {as: 'user'});
    }
  }
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: true
      }
    },
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
    modelName: 'Post',
  });
  return Post;
};
