/* author: Francisco Nguyen */

var express = require('express');
var router = express.Router();

var dbms = require('./user_info_dbms');

/* GET home page. */
router.post('/', function(req, res, next) {
    // var query = `select * from user_profiles 
    //             where username='${req.body.username}'
    //             and password_hashed='${password_hashed}'`;

    // dbms.dbquery(query, function(error, results) {
    //     if (error != false) {
    //         console.log(error);
    //         return;
    //     }
    //     // console.log(JSON.stringify(results));
    //     if (results.length > 0) {
    //         res.send("user exists");
    //     }
    // });
    console.log("made post");
});

module.exports = router;
