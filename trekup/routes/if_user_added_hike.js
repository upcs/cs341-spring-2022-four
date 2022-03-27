/* author: Francisco Nguyen */

var express = require('express');
var router = express.Router();

var dbms = require('./user_info_dbms');


/* GET home page. */
router.post('/', function(req, res, next) {
    console.log("entered checking post");
    //check if the user already said they completed this hike
    var check_query = `select * from users_hikes_completed 
                       where username='${req.body.username}' and hike_name='${req.body.hike_name}'`;
    dbms.dbquery(check_query, function(results) {
        console.log("performed query");
        if (results.length > 0) {
            console.log("found that user has completed hike");
            res.send("user already added hike");
        }
    });
});

module.exports = router;
