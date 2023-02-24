'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Anime.belongsTo(models.Profile, { foreignKey: 'profileId'})
      
    }
  }
  Anime.init({
    title: { 
      type:DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate: {
        min: 0,
        max: 10,
      },
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
    voterId: {
      type:DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id',
      }
    },
  }, {
    sequelize,
    modelName: 'Anime',
  });
  return Anime;
};