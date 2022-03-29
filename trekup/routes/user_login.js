/* author: Francisco Nguyen */

var express = require('express');
var router = express.Router();

// var dbms = require('./user_info_dbms_promise');
var dbms = require('./dbms_promise');

// require bcrypt for password encryption 
var bcrypt = require('bcrypt');

/* POST for login. */
router.post('/', function(req, res, next) {
    var get_salt_query = `select SALT from USER_PROFILES where USERNAME='${req.body.username}'`;
    var salt_result = dbms.dbquery(get_salt_query);

    salt_result.then(function(results) {
        if (results.length < 1) 
            return -1;

        console.log("salt: " + results[0].SALT);
        const password_hashed = bcrypt.hashSync(req.body.password, results[0].SALT);
        console.log("password: " + password_hashed);

        var login_query = `select * from USER_PROFILES 
                where USERNAME='${req.body.username}'
                and PASSWORD_HASHED='${password_hashed}'`;
        
        return dbms.dbquery(login_query);
    }).then(function(results) {
        if (results.length > 0) {
            res.send("user exists");
        } else {
            res.send("user does not exist");
        }
    });
});

module.exports = router;
