var express = require('express');
var router = express.Router();
const asyncHandler = require("express-async-handler");

const catty = require('../models/category')
/* GET home page. */
router.get('/', async (req, res, next) => {
const list = catty.find({}).exec()
  res.render('index', { title: 'Xaviers jersays' }, {Categories: list});
});

module.exports = router;
