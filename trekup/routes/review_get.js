/* review_get.js
 * @author Brynn Harrington
 * Date Modified: 13 Mar 2022
 * 
 * Adds a review to a trail in the TRAILS 
 * database as requested by the user 
 * 
 */
// require the express and get the router
var express = require('express');
var router = express.Router();

// require the database management system
var dbms = require('./dbms_trail_info.js');

// store the information
var review_info = [];

// POST for retrieving hikes
router.post('/', function(req, res, next) {
    // store user and hike
    var username = req.query.username;
    var hike = req.query.hike;

    // get the reviews as long as user and hike non-null
    if (username != null && hike != null) {
        dbms.dbquery("'SELECT * FROM REVIEWS WHERE HIKE='" + hike + "' AND USERNAME" + username + "'", function(error, result) {
            if (error) {
                console.log(error);
                return;
            }
            // testing
            console.log(result);
            res.json(result);
        });
    }
});

module.exports = router;