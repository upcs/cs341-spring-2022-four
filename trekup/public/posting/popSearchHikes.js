/**
 * @popSearchHikes.js
 *
 * send the actual post request for searching
*/

var express = require('express');
var router = express.Router();

var dbq = require('../../routes/dbms_promise');

router.post('/', async(req, res, next)=>{

  if(req.body.dif){
    //if the body has a difficulty, get the first 8 hikes with that difficulty
    var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO WHERE DIFFICULTY = " + "'" + req.body.dif + "'" + " LIMIT 8"));
  }else if(req.body.nam){
    //if there is a nam (name) field, it means a user searched for a specific hike
    //so we search for that hike.
    //Should make this also return hikes that start with the first letter
    //of whatever the user searched for and eventually implement autocomplete
    var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO WHERE HIKE = " + "'" + req.body.nam + "'"));
  }else{
    //otherwise, we have a normal request and should return the first 8 hikes.
    var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO LIMIT 8"));
  }

  res.send(hi1);
});

module.exports = router;
