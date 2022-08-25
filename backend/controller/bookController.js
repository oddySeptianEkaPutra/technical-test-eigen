"use strict"

const { Book, Member, Transaction } = require('../models');
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

  static async borrowBook(req, res) {
    try {
      const transaction = {
        name: req.body.name,
        title: req.body.title,
      }

      const checkMember = await Member.findAll({
        where: {
          name: transaction.name
        }
      })

      if(checkMember.length === 0) {
        throw {name: "member not found"};
      }

      const checkBook = await Book.findAll({
        where: {
          [Op.and]: [{
            title: transaction.title
          }, {
            stock: {
              [Op.gt]: 0
            }
          }]
        }
      })

      if(checkBook.length === 0) {
        throw {name: "book not found"};
      }

      const newTransaction = {
        BookId: checkBook[0].id,
        MemberId: checkMember[0].id,
      }

      const transact = await Transaction.create(newTransaction);
      await checkBook[0].decrement('stock', {by: 1});
    
      res.status(201).json({
        statusCode: 201,
        data: transact
      })
    } catch (err) {
      if(err.name === "member not found") {
        res.status(404).json({
          statusCode: 404,
          message: 'Member Not Found'
        })
      } else if (err.name === "book not found") {
        res.status(404).json({
          statusCode: 404,
          message: 'Book Not Found'
        })
      } else {
        res.status(500).json({
          statusCode: 500,
          message: 'Internal Server Error'
        })
      }
    }
  }
}

module.exports = BookController;