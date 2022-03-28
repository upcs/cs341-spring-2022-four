/* author: Francisco Nguyen */

var express = require('express');
var router = express.Router();

var dbms = require('./user_info_dbms_promise');

// require bcrypt for password encryption 
var bcrypt = require('bcryptjs');

/* GET home page. */
router.post('/', function(req, res, next) {
    var password_hashed = bcrypt.hashSync(req.body.password, 10);
    var query = `select * from user_profiles 
                where username='${req.body.username}'
                and password_hashed='${password_hashed}'`;
    console.log(query);

    var account = dbms.dbquery(query);
    account.then(function(results) {
        console.log("results: " + JSON.stringify(results));
        if (results.length > 0) {
            res.send("user exists");
        }
    });
});

module.exports = router;
