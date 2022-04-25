/* author: Francisco Nguyen */

var express = require('express');
var router = express.Router();
var user_trophies = require("./user_trophies");

var dbms = require('./dbms_promise');

/* POST user to add or remove hike to or from completed list. */
router.post('/', function(req, res, next) {
    console.log("entered hike list updating post");
    var query;
    var operand;
    console.log(typeof req.body.adding);
    //if the user hasn't added the hike, then make insertion query, else deletion query
    if (parseInt(req.body.adding, 2) == 1) {
        query = `insert into USERS_HIKES_COMPLETED 
                values ('${req.body.username}', '${req.body.hike_name}',
                '${req.body.distance}', '${req.body.elevation}')`;
        operand = "+";
    } else {
        query = `delete from USERS_HIKES_COMPLETED 
                where USERNAME='${req.body.username} '
                and HIKE_NAME='${req.body.hike_name}'`;
                operand = "-";
    }
    console.log(query);

    //adding/removing the hike to/from completed list
    dbms.dbquery(query).then(function() {
        var update_profile_query = `update USER_PROFILES set TRAILS_COMPLETED=TRAILS_COMPLETED ${operand} 1, 
                                    DISTANCE_WALKED=DISTANCE_WALKED ${operand} ${req.body.distance}, 
                                    ELEVATION_GAINED=ELEVATION_GAINED ${operand} ${req.body.elevation} 
                                    where USERNAME='${req.body.username}'`;
        dbms.dbquery(update_profile_query);
        user_trophies.updateTrophies(req.body.username);
        res.send("yay");
    });
});

module.exports = router;
