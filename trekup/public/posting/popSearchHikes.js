var express = require('express');
var router = express.Router();

var dbq = require('../../routes/dbms_promise');

router.post('/', async(req, res, next)=>{

  if(req.body.dif){
    console.log(req.body.dif);
      var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO WHERE DIFFICULTY = " + "'" + req.body.dif + "'" + " LIMIT 8"));
  }else if(req.body.nam){
    var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO WHERE HIKE = " + "'" + req.body.nam + "'"));
  }
  // else if(req.body.mileR){
  //   console.log(req.body.mileR + " miles");
  //   var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO WHERE DISTANCE = " + "'" + req.body.mileR + "'" + " LIMIT 8"));
  // }
  else if(req.body.elev){
    console.log(req.body.elev + " ft");
    var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO WHERE ELEVATION_CHANGE <= " + "'" + req.body.elev + "'" + " LIMIT 8"));
  }
  else{
    console.log("default");
      var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO LIMIT 8"));
  }



  res.send(hi1);
});

module.exports = router;
