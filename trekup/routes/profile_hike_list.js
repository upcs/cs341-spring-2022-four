/* author: Francisco Nguyen */

var express = require('express');
var router = express.Router();

var dbms = require('./user_info_dbms');

/* POST get user's list of completed hikes. */
router.post('/', function(req, res, next) {
    var query = `select HIKE_NAME, DISTANCE, ELEVATION_CHANGE 
                from USERS_HIKES_COMPLETED where USERNAME='${req.body.username}'`;

    dbms.dbquery(query, function(error, results) {
        if (error != false) {
            console.log(error);
            return;
        }
        // console.log(JSON.stringify(results));
        res.json(results);
    });
});

module.exports = router;
