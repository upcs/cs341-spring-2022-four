/**
 * @popHikePage.js
 *
 * Called by the actual post request. Sends for the individual, more
 * specific hike page.
*/

var express = require('express');
var router = express.Router();

var dbq = require('../../routes/dbms_promise');

router.post('/', async(req, res, next)=>{
  var hi1 = JSON.stringify(await dbq.dbquery("SELECT * FROM TRAIL_INFO WHERE HIKE = '" + req.body.hName + "'"));
  res.send(hi1);
});

module.exports = router;
