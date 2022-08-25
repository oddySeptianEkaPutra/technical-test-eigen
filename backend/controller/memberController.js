"use strict"

const { Member } = require('../models');

class MemberController {
  static async getAllMember(req, res) {
    try {
      const members = await Member.findAll();

      res.status(200).json({
        statusCode: 200,
        data: members,
      })
    } catch (err) {
      if (err) {
        res.status(500).json({
          statusCode: 500,
          message: 'Internal Server Error'
        })
      }
    }
  }
}

module.exports = MemberController;