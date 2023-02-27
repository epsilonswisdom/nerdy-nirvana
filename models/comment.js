'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Anime, {
        foreignKey: 'animeId',
      })
      Comment.belongsTo(models.Profile, {
        foreignKey: 'profileId'
      })
    }
  }
  Comment.init({
    text: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    animeId: {
      type:DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Animes',
        key: 'id'
      }
    },
    profileId: {
      type:DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};