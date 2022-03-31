/**
 * @popSearchHikes.js
 *
 * send the actual post request for searching
*/

var express = require('express');
var router = express.Router();

var dbq = require('../../routes/dbms_promise');

router.post('/', async(req, res, next)=>{



  if(req.body.nam){
    var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO WHERE HIKE = " + "'" + req.body.nam + "'"));
  }
  // else if(req.body.dif){
  //   console.log(req.body.dif);
  //     var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO WHERE DIFFICULTY = " + "'" + req.body.dif + "'" + " LIMIT 30"));
  // }
  // else if(req.body.nam){
  //   var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO WHERE HIKE = " + "'" + req.body.nam + "'"));
  // }
  // else if(req.body.mileR, req.body.mileL){
  //   console.log(req.body.mileR + " miles");
  //   console.log(req.body.mileL + " miles lower");
  //   var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO WHERE DISTANCE BETWEEN " + "'"  + req.body.mileL + "'" + " AND "+ "'" + req.body.mileR + "'" + " LIMIT 8"));
  // }
  else if(req.body.mileR, req.body.mileL, req.body.elevU, req.body.elevL, req.body.dif){
    console.log(req.body.mileR + " miles");
    console.log(req.body.mileL + " miles lower");
    console.log("upper: " + req.body.elevU + " ft");
    console.log("lower: " + req.body.elevL + " ft");
    var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO WHERE DISTANCE BETWEEN " + "'"  + req.body.mileL + "'" + " AND "+ "'" + req.body.mileR + "'" + " AND ELEVATION_CHANGE BETWEEN " + "'" + req.body.elevL + "'" + " AND " + "'" + req.body.elevU + "'" + " AND DIFFICULTY = " + "'" + req.body.dif + "'" + " LIMIT 8"));
  }
  // else if(req.body.mileR, req.body.mileL, req.body.elevU, req.body.elevL){
  //   console.log(req.body.mileR + " miles");
  //   console.log(req.body.mileL + " miles lower");
  //   console.log("upper: " + req.body.elevU + " ft");
  //   console.log("lower: " + req.body.elevL + " ft");
  //   var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO WHERE DISTANCE BETWEEN " + "'"  + req.body.mileL + "'" + " AND "+ "'" + req.body.mileR + "'" + " AND ELEVATION_CHANGE BETWEEN " + "'" + req.body.elevL + "'" + " AND " + "'" + req.body.elevU + "'" + " LIMIT 8"));
  // }
  // else if(req.body.mileR, req.body.elevU){
  //   console.log(req.body.mileR + " miles");
  //   console.log(req.body.mileL + " miles lower");
  //   var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO WHERE DISTANCE <= " + "'" + req.body.mileR + "'" +
  //    " AND WHERE ELEVATION_CHANGE <= " + "'" + req.body.elevU + "'" + " LIMIT 8"));
  // }
  // else if(req.body.mileR){
  //   console.log(req.body.mileR + " miles");
  //   //console.log(req.body.mileL + " miles");
  //   var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO WHERE DISTANCE <= " + "'" + req.body.mileR + "'" + " LIMIT 8"));
  // }
  else if(req.body.elevU, req.body.elevL){
    console.log("upper: " + req.body.elevU + " ft");
    console.log("lower: " + req.body.elevL + " ft");
    var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO WHERE ELEVATION_CHANGE <= " + "'" + req.body.elevU + "'" + " LIMIT 30"));
  }
  else{
    console.log("default");
      var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO LIMIT 30"));

  }

  res.send(hi1);
});

module.exports = router;
