/* review_add.js
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
var dbms = require('./dbms_reviews_info.js');

// store the information
var trail_info = [];

// POST for adding a review to a hike
router.post('/', function(req, res, next) {
    // values necessary for the review
    var hike = req.query.hike;
    var username = req.query.name;
    var rating = req.query.rating;
    var comment = req.query.comment;

    // add the review to the hike
    db.dbquery(`INSERT INTO REVIEWS (HIKE, USERNAME, RATING, COMMENT) VALUES (${hike},
        ${username}, ${rating}, ${comment})`, function(err, result) {
        if (err) {
            console.log(err);
            return;
        }
    });
});
module.exports = router;