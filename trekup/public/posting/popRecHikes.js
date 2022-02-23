var express = require('express');
var router = express.Router();

var dbq = require('../../routes/dbms_promise');

router.post('/', async(req, res, next)=>{
  const hi1 = {HIKE:"Cool Hike",DISTANCE:7,ELEVATION_CHANGE:200};
  const hi2 = {HIKE:"Less Cool Hike",DISTANCE:3,ELEVATION_CHANGE:300};
  const hi3 = {HIKE:"The Hiker 3",DISTANCE:7,ELEVATION_CHANGE:100};
  const hi4 = {HIKE:"Lake Forest Hamburger",DISTANCE:98,ELEVATION_CHANGE:400};

  const theHikes = [hi1, hi2, hi3, hi4];

  var hikesJSON = JSON.stringify(theHikes);

  res.send(hikesJSON);
});

module.exports = router;
