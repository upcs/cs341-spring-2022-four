/* user_add.js
 *
 * @author Brynn Harrington
 * Date Modified: 13 Mar 2022
 *  
 * Adds a user to the USERS database
 * as requested by the user with hashed 
 * password
 * 
 */
// require the express and get the router
var express = require('express');
var router = express.Router();
var user_trophies = require("./user_trophies");

// require bcrypt for password encryption 
var bcrypt = require('bcrypt');

// require the database management system
// var dbms = require('./user_info_dbms_promise.js');
var dbms = require('./dbms_promise.js');

// POST request to register an account
router.post('/', function(req, res) {
    // verify no existing users with same information
    var user_exists = false;
    var added = true;
    console.log("entered create-an-account post");

    // search if username is taken
    var check_query = `select * from USER_PROFILES where USERNAME='${req.body.username}'`;
    var checked_username = dbms.dbquery(check_query);
    checked_username.then(function(results) {
        // user found - cannot add
        if (results.length != 0) {
            added = false;
            user_exists = true;
        }

        // otherwise successful
        if (user_exists == false) {
            // hash the password
            const salt = bcrypt.genSaltSync(10);
            const hashed_pass = bcrypt.hashSync(req.body.password, salt);

            //adding new account to database
            let add_query = `insert into USER_PROFILES (NAME, USERNAME, EMAIL, PASSWORD_HASHED, SALT) 
                            values ('${req.body.name}', '${req.body.username}', '${req.body.email}', '${hashed_pass}', '${salt}')`;
            dbms.dbquery(add_query);
            // call trophies function to add initial trophy
            user_trophies.updateTrophies(req.body.username);
            console.log("added new user");
            res.send("added");
        } else {
            console.log("did not add new user");
            res.send("did not add");
        }
    });
});

module.exports = router;