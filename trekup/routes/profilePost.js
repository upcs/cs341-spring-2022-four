/* author: Francisco Nguyen */

var express = require('express');
var router = express.Router();

var dbms = require('./user_info_dbms');

/* GET home page. */
router.post('/', function(req, res, next) {
  var query = "select name, trails_completed, distance_walked, " + 
              "elevation_gain, achievements " +
              "from user_profiles where username='frann'";

  console.log("clicking made a post");
  console.log("" + req.body.value);

  dbms.dbquery(query, function(error, results) {
    console.log(JSON.stringify(results));
  });
});

module.exports = router;
