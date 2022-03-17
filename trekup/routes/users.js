var express = require('express');
var router = express.Router();

/* GET user thingie. */
router.get('/', function(req, res, next) {
  res.send('respond with resource');
});

module.exports = router;
