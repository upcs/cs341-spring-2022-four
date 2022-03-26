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

// require bcrypt for password encryption 
var bcrypt = require('bcrypt');

// require the database management system
var dbms = require('./user_info_dbms_promise.js');

// POST request to register an account
router.post('/', function(req, res) {
    // verify no existing users with same information
    var user_exists = false;
    var added = true;
    console.log("entered post");

    // search for the user
    //////// USERS change to actual TABLE name
    var check_query = `select * from user_profiles where username='${req.body.username}'`;
    var checked_username = dbms.dbquery(check_query);
    checked_username.then(function(results) {
        // console.log("checked if username is taken");
        // console.log(JSON.stringify(results));
        // user found - cannot add
        if (results.length != 0) {
            added = false;
            user_exists = true;
        }
        // console.log("username is not taken");

        // otherwise successful
        if (user_exists == false) {
            // hash the password
            const hashed_pass = bcrypt.hashSync(req.body.password, 10);
            console.log(hashed_pass);

            //////// USERS change to actual TABLE name
            let add_query = `insert into user_profiles (name, username, email, password_hashed) 
                            values ('${req.body.name}', '${req.body.username}', '${req.body.email}', '${hashed_pass}')`;
            dbms.dbquery(add_query);
        }
    });
});

module.exports = router;