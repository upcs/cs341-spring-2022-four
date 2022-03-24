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
var bcrypt = require('bcryptjs');

// require the database management system
var dbms = require('./dbms_user_info.js');

// POST request to register an account
router.post('/', function(req, res) {
    // verify no existing users with same information
    var user_exists = false;
    var added = true;

    // search for the user
    //////// USERS change to actual TABLE name
    dbms.dbquery("SELECT * FROM USERS WHERE USERNAME='" + req.query.username + "'", function(err, result) {
        // error checking
        if (err) {
            console.log(error);
            return;
        }

        // user found - cannot add
        if (result.length != 0) {
            added = false;
            user_exists = true;
            res.send("user_exists=" + user_exists);
        }

        // otherwise successful
        // if (added == true) {
        if (added) {
            // hash the password
            const hashed_pass = bcrypt.hashSync(req.query.password, 10);

            // insert the password 
            //////// USERS change to actual TABLE name
            dbms.dbquery("INSERT INTO USERS (USERNAME, PASSWORD) VALUES ('" + req.query.username + "', " + hashed_pass + "', "),
                function(error, result) {
                    if (error) {
                        console.log(error);
                        return;
                    }
                    res.send("successfully added");
                };
        }
    });
});

module.exports = router;