var express = require('express');
var router = express.Router();

var dbq = require('../../routes/dbms_promise');

router.post('/', async(req, res, next)=>{
  // const hi1 = {HIKE:"Cool Hike",DISTANCE:7,ELEVATION_CHANGE:200};
  // const hi2 = {HIKE:"Less Cool Hike",DISTANCE:3,ELEVATION_CHANGE:300};
  // const hi3 = {HIKE:"The Hiker 3",DISTANCE:7,ELEVATION_CHANGE:100};
  // const hi4 = {HIKE:"Lake Forest Hamburger",DISTANCE:98,ELEVATION_CHANGE:400};

  var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO LIMIT 4"));
  // var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM ORDERS"))

  // var hi1 = JSON.stringify(await dbq.dbquery("SELECT HIKE DISTANCE ELEVATION_CHANGE FROM TREKUP LIMIT 1 OFFSET 2"));
  // var hi3 = JSON.stringify(await dbq.dbquery("SELECT HIKE DISTANCE ELEVATION_CHANGE FROM TREKUP LIMIT 1 OFFSET 3"));
  // var hi4 = JSON.stringify(await dbq.dbquery("SELECT HIKE DISTANCE ELEVATION_CHANGE FROM TREKUP LIMIT 1 OFFSET 4"));

  // const theHikes = [hi1, hi2, hi3, hi4];



  // var hikesJSON = JSON.stringify(theHikes);
  // var hikesJSON = JSON.stringify(hi1);

  // var hikesJSON = JSON.stringify(await dbq.dbquery("SELECT * FROM TREKUP WHERE"))

  res.send(hi1);
  // res.send(hikesJSON);
});

module.exports = router;
