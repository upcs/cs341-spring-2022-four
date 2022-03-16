/* author: Francisco Nguyen */

var express = require('express');
var router = express.Router();

var dbms = require('./user_info_dbms');

/* GET home page. */
router.post('/', function(req, res, next) {
    var query = "select name, trails_completed, distance_walked, elevation_gain, achievements " +
                "from user_profiles where username='" + req.body.username + "'";

    dbms.dbquery(query, function(error, results) {
        // console.log(JSON.stringify(results));
        res.json(results[0]);
    });
});

module.exports = router;
