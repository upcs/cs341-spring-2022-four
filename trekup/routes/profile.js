/* authoer: Francisco Nguyen */

var express = require('express');
var router = express.Router();

var dbms = require('./user_info_dbms');

/* GET home page. */
router.post('/', function(req, res, next) {
  var query = "select * from test";

  console.log("clicking made a post");
  console.log("" + req.body.value);

  dbms.dbquery(query, function(error, results) {
    console.log(JSON.stringify(results));
  });
});

module.exports = router;
