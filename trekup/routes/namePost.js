//@author: Jennifer Brana


var express = require('express');
var router = express.Router();

const dummyHikes =
    {"data": [
        {"hike1" : {distance: "5 miles", elevation: 1000, difficulty: "easy"}},
        {"hike2" : {distance: "20 miles", elevation: 3000, difficulty: "hard"}},
        {"hike3" : {distance: "8 miles", elevation: 1200, difficulty: "moderate"}}
    ]};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(dummyHikes);
});


router.post('/', function(req, res){
    res.json(dummyHikes);
});


module.exports = router;
