/* author: Francisco Nguyen */

var express = require('express');
var router = express.Router();

var dbms = require('./user_info_dbms_promise');

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log("entered adding post");
    //if the user hasn't added the hike, then they can add it
    var add_query = `insert into users_hikes_completed 
                 values ('${req.body.username}', '${req.body.hike_name}',
                 '${req.body.rating}', '${req.body.distance}', '${req.body.elevation}')`;
    console.log(add_query);

    dbms.dbquery(add_query).then(function() {
        var update_profile_query = `update user_profiles set trails_completed=trails_completed + 1, 
                                    distance_walked=distance_walked + ${req.body.distance}, 
                                    elevation_gained=elevation_gained + ${req.body.elevation} 
                                    where username='${req.body.username}'`;
        dbms.dbquery(update_profile_query);
    });
});

module.exports = router;
