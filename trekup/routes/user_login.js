/* author: Francisco Nguyen */

var express = require('express');
var router = express.Router();

var dbms = require('./user_info_dbms_promise');

// require bcrypt for password encryption 
var bcrypt = require('bcrypt');

/* GET home page. */
router.post('/', function(req, res, next) {
    var get_salt_query = `select salt from user_profiles where username='${req.body.username}'`;
    var salt_result = dbms.dbquery(get_salt_query);

    salt_result.then(function(results) {
        if (results.length < 1) 
            return -1;

        console.log("salt: " + results[0].salt);
        const password_hashed = bcrypt.hashSync(req.body.password, results[0].salt);
        console.log("password: " + password_hashed);

        var login_query = `select * from user_profiles 
                where username='${req.body.username}'
                and password_hashed='${password_hashed}'`;
        
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
