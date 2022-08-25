"use strict"

const { Book } = require('../models');
const { Op } = require('sequelize');

class BookController {
  static async getAllBook(req, res) {
    try {
      const books = await Book.findAll({
        where: {
          stock: {
            [Op.gt]: 0
          }
        }
      })

      res.status(200).json({
        statusCode: 200,
        data: books,
      })
    } catch (err) {
      if (err) {
        res.status(500).json({
          message: 'Internal Server Error'
        })
      }
    }
  }
}

module.exports = BookController;