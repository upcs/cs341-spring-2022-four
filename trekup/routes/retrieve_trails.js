/* trails.js
 * @author Brynn Harrington
 * Date Modified: 20 Feb 2022
 * 
 * Create a new route to access the trail data for the 
 * requested attribute from the database and return that 
 * data to the client.
 * 
 */
// require the express and get the router
var express = require('express');
var router = express.Router();

// require the database management system
var dbms = require('./trail_info_dbms.js');

// store the information
// var trail_info[];

// POST for retrieving hikes
router.post('/', function(req, res, next) {
    // store the type of query 
    var query_type = req.query.type;

    // iterate through possible filters the user could have searched hike with
    // general area - the general are such as a county / district (e.g. Clackamas County)
    if (type == 'general_area') {
        dbms.query("SELECT * FROM GENERAL_AREA", function(err, result) {
            if (err) {
                console.log(err);
                return;
            }
            info = result;
            res.json(info);
        });
    }

    // local area - the city 
    if (type == 'local_area') {
        dbms.query("SELECT * FROM LOCAL_AREA", function(err, result) {
            if (err) {
                console.log(err);
                return;
            }
            info = result;
            res.json(info);
        });
    }
    // hike - name of the hike
    if (type == 'hike') {
        dbms.query("SELECT * FROM HIKE", function(err, result) {
            if (err) {
                console.log(err);
                return;
            }
            info = result;
            res.json(info);
        });
    }
    // difficulty - enum difficulty (easy, moderate, difficult)
    if (type == 'difficulty') {
        dbms.query("SELECT * FROM DIFFICULTY", function(err, result) {
            if (err) {
                console.log(err);
                return;
            }
            info = result;
            res.json(info);
        });
    }
    //// TODO - FIGURE OUT HOW TO DO THIS FOR A RANGE OF NUMBERS
    // distance - miles of hike
    // elevation change - feet of elevation change
    // TODO - figure out if want to search by keywords in notes
    //notes - any notes about the hike

}); //end post

module.exports = router;