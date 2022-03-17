//@author: Jennifer Brana


var express = require('express');
var router = express.Router();

//var dbq = require('../../routes/dbms_promise');
// require the database management system
var dbms = require('../../routes/dbms_trail_info.js');

//var dbms = require('./dbms_trail_info.js');

const dummyHikes =
    {"data": [
      {"hike1" : {name: "hike1", distance: "5 miles", elevation: 1000, difficulty: "easy"}},
      {"hike2" : {name: "hike2", distance: "20 miles", elevation: 3000, difficulty: "hard"}},
      {"hike3" : {name: "hike3", distance: "8 miles", elevation: 1200, difficulty: "moderate"}}
    ]};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(dummyHikes);
});


// store the information
var trail_info = [];

router.post('/', function(req, res){

    var name = req.body.name.toUpperCase();

    var query = "select hike_name, rating,  distance, elevation " +
                "WHERE NAME='" + name;


    dbms.dbquery(query, function(error, results) {
          console.log(JSON.stringify(results));
          res.json(results);
    });
    // var data = dbms.dbquery(quereeey);
    // data.then(function(results){
    //     console.log("results:" + JSON.stringify(results));
    //     var nameData = (results[0]["NAME(MILES, ELEVATION, DIFFICULTY)"] == null) ? 0 : results[0]["NAME(MILES, ELEVATION, DIFFICULTY)"];
    //     res.json({"data": [
    //         {"hike" : {name: name, quantity: nameData}}
    //     ]});
    // });


    console.log(name);
    //res.json(dummyHikes);
});


module.exports = router;
