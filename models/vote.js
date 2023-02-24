'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vote extends Model {
    static associate(models) {
      //define the association here
      Vote.belongsTo(models.Profile, { foreignKey: 'voterId'})
      Vote.belongsTo(models.Profile, { foreignKey: 'profileId'})
    }
  }
  Vote.init({
    value: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 5,
      },
    },
    profileId: { 
      type: DataTypes.INTEGER,
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
        key:'id',
      },
    },

  }, {
    sequelize,
    modelName: 'Vote',
  });
  return Vote;
};



