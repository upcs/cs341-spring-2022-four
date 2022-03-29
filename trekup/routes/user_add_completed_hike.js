/* author: Francisco Nguyen */

var express = require('express');
var router = express.Router();

// var dbms = require('./user_info_dbms_promise');
var dbms = require('./dbms_promise');

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log("entered adding post");
    //if the user hasn't added the hike, then they can add it
    var add_query = `insert into USERS_HIKES_COMPLETED 
                 values ('${req.body.username}', '${req.body.hike_name}',
                 '${req.body.rating}', '${req.body.distance}', '${req.body.elevation}')`;
    console.log(add_query);

    dbms.dbquery(add_query).then(function() {
        var update_profile_query = `update USER_PROFILES set TRAILS_COMPLETED=TRAILS_COMPLETED + 1, 
                                    DISTANCE_WALKED=DISTANCE_WALKED + ${req.body.distance}, 
                                    ELEVATION_GAINED=ELEVATION_GAINED + ${req.body.elevation} 
                                    where USERNAME='${req.body.username}'`;
        dbms.dbquery(update_profile_query);
    });
});

module.exports = router;
