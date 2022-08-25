'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.belongsToMany(models.Member, {through: 'Transactions'});
    }
  }
  Book.init({
    code: DataTypes.STRING,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};