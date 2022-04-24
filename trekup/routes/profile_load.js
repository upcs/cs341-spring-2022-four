/* author: Francisco Nguyen */

var express = require('express');
var router = express.Router();
var user_trophies = require("./user_trophies");

var dbms = require('./user_info_dbms');

/* POST profile's info. */
router.post('/', function(req, res, next) {

    var query = `select NAME, TRAILS_COMPLETED, DISTANCE_WALKED, ELEVATION_GAINED, ACHIEVEMENTS 
                from USER_PROFILES where USERNAME='${req.body.username}'`;

    dbms.dbquery(query, function(error, results) {
        if (error != false) {
            console.log(error);
            return;
        }
        // console.log(JSON.stringify(results));
        res.json(results[0]);
    });
    user_trophies.updateTrophies(req.body.username);
});

module.exports = router;
