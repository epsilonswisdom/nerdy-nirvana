'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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

class Vote extends Model {
  static associate(models) {
    //define the association here
    Vote.belongsTo(models.Profile, { foreignKey: 'voterId'})
    Vote.belongsTo(models.Profile, { foreignKey: 'profileId'})
  }
}

class Profile extends Model {
  static associate(models) {
    Profile.belongsTo(models.User, { foreignKey: 'userId'})

    Profile.hasMany(models.Vote, {
      as: 'votesGiven',
      foreignKey: 'voterId'
    })
    
    Profile.hasMany(models.Vote, {
      as: 'votesReceived',
      foreignKey: 'profileId'
    })
  }
}