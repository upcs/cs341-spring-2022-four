/* author: Francisco Nguyen */

var express = require('express');
var router = express.Router();

var dbms = require('./user_info_dbms');


/* POST to check if user has already completed this hike */
router.post('/', function(req, res, next) {
    console.log("entered checking post");
    //check if the user already said they completed this hike
    var check_query = `select * from USERS_HIKES_COMPLETED 
                       where USERNAME='${req.body.username}' and HIKE_NAME='${req.body.hike_name}'`;
    console.log(check_query);
    dbms.dbquery(check_query, function(error, results) {
        if (error != false) {
            console.log(error);
            return;
        }

        //check if user has already added this hike
        if (results.length > 0) {
            console.log("found that user has completed hike");
            res.send("user already added hike");
        } else {
            res.send("user hasn't added hike");
        }
    });
});

module.exports = router;
