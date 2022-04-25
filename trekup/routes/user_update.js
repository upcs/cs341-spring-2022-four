/* author: Logan Machida */

var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

var dbms = require('./dbms_promise');

/* Update the user information */
router.post('/', function(req, res, next) {
    var currUser = req.body.currUser;
    var currPass = req.body.currPass;
    var newPass = req.body.newPass;
    var newUser = req.body.newUser;
    var newName = req.body.newName;

    var get_salt_query = `select SALT from USER_PROFILES where USERNAME='${currUser}'`;
    dbms.dbquery(get_salt_query).then(function(results) {
        if (results.length < 1) 
            return -1;

        console.log("salt: " + results[0].SALT);
        const password_hashed = bcrypt.hashSync(currPass, results[0].SALT);
        console.log("password: " + password_hashed);

        var login_query = `select * from USER_PROFILES 
                where USERNAME='${currUser}'
                and PASSWORD_HASHED='${password_hashed}'`;
        console.log(login_query);
        
        return dbms.dbquery(login_query);
    }).then(function(results) {
        if (results.length < 1) {
            return -1;
        }
        
        if (results.length > 0) {
            console.log("password matches");
            if (newPass) {
                var new_password_hashed = bcrypt.hashSync(newPass, results[0].SALT);

                dbms.dbquery(`UPDATE USER_PROFILES SET PASSWORD_HASHED = '${new_password_hashed}' WHERE USERNAME = '${currUser}'`);
                res.send();
            }   
            if(newName){
                dbms.dbquery(`UPDATE USER_PROFILES SET NAME = '${newName}' WHERE USERNAME = '${currUser}'`);
                res.send();
            }   
        } else {
            return res.status(500).send("Database error");
        }
    });
});

module.exports = router;
