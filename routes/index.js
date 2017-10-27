var express = require('express');
var router = express.Router();

/* GET home page. */
var title = "get your professional image today!"

router.get('/', function(req, res, next) {
  res.render('index', {title});
});

module.exports = router;
