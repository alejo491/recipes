'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate(models) {
      this.belongsTo(models.User, {foreignKey: 'authorId', as: 'author'})
    }
  }
  Recipe.init({
    authorId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    image: DataTypes.BLOB,
    description: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};