'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init({
    BookId: DataTypes.INTEGER,
    MemberId: DataTypes.INTEGER,
    rentalDate: DataTypes.DATE,
    returnDue: DataTypes.DATE,
    returnDate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};