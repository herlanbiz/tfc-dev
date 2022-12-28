var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.contentType('application/json').status(200)
  res.json({ status: true, message: 'API connected' })
});

module.exports = router;
