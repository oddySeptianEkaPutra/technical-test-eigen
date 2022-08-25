const express = require('express');
const router = express.Router();
const memberController = require('../controller/memberController');
const bookController = require('../controller/bookController');

router.get('/members', memberController.getAllMember);
router.get('/books', bookController.getAllBook);

module.exports = router;