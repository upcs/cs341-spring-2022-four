var express = require('express');
var router = express.Router();

var dbq = require('../../routes/dbms_promise');

router.post('/', async(req, res, next)=>{

  if(req.body.dif){
      var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO WHERE DIFFICULTY = " + "'" + req.body.dif + "'" + " LIMIT 8"));
  }else if(req.body.nam){
    var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO WHERE HIKE = " + "'" + req.body.nam + "'"));
  }else{
      var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO LIMIT 8"));
  }



  res.send(hi1);
});

module.exports = router;
