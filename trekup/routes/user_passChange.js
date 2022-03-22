/* user_passChange.js
 *
 * @author Brynn Harrington
 * Date Modified: 13 Mar 2022
 *  
 * Gets a user to the USER_PROFILES database
 * as requested by the user and allows hashed 
 * password to be change
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
router.post('/', function(req, res, next) {
    // necessary values
    var username = req.query.username;
    var old_pass = req.query.old_pass;
    var new_pass = req.query.new_pass;

    // testing 
    console.log(old_pass);

    // get the user
    ////// NEED to change table name 
    dbms.dbquery("SELECT * FROM USER_PROFILES WHERE USERNAME = '" + username + "'", function(err, result) {
        // error checking 
        if (err) {
            console.log(err);
            return;
        }

        // verify entered correct password to change
        const found = bcrypt.compareSync(old_pass, result[0].PASSWORD);
        if (found) {
            const hashed_pass = bcrypt.hashSync(new_pass, 10);
            dbms.dbquery("UPDATE USER_PROFILES SET PASSWORD = '" + hashed_pass + "' WHERE USERNAME = '" + username + "'",
                function(error, result) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                }
            );
            // store the result 
            res.json(result);
        } else {
            res.json(null);
        }
    });
});

module.exports = router;