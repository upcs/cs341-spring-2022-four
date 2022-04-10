/* author: Francisco Nguyen */

var express = require('express');
var router = express.Router();

// var dbms = require('./user_info_dbms_promise');
var dbms = require('./dbms_promise');

/* POST user to remove hike from completed list. */
router.post('/', function(req, res, next) {
    console.log("entered removing post");

    var remove_query = `delete from USERS_HIKES_COMPLETED 
                        where USERNAME='${req.body.username} '
                        and HIKE_NAME='${req.body.hike_name}'`;
    
    console.log(remove_query);

    //adding the hike to completed list
    dbms.dbquery(remove_query).then(function() {
        var update_profile_query = `update USER_PROFILES set TRAILS_COMPLETED=TRAILS_COMPLETED - 1, 
                                    DISTANCE_WALKED=DISTANCE_WALKED - ${req.body.distance}, 
                                    ELEVATION_GAINED=ELEVATION_GAINED - ${req.body.elevation} 
                                    where USERNAME='${req.body.username}'`;
        dbms.dbquery(update_profile_query);
    });
    res.send();
});

module.exports = router;
