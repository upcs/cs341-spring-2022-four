/* author: Francisco Nguyen */

var express = require('express');
var router = express.Router();

var dbms = require('./user_info_dbms');

// require bcrypt for password encryption 
var bcrypt = require('bcrypt');

/* GET home page. */
router.post('/', function(req, res, next) {
    var password_hashed = bcrypt.hashSync(req.body.password, 10);
    var query = `select * from user_profiles 
                where username='${req.body.username}'
                and password_hashed='${password_hashed}'`;

    dbms.dbquery(query, function(error, results) {
        if (error != false) {
            console.log(error);
            return;
        }
        // console.log(JSON.stringify(results));
        if (results.length > 0) {
            res.send("user exists");
        }
    });
});

module.exports = router;
