//@author: Jennifer Brana


var express = require('express');
var router = express.Router();

// const dummyHikes =
//     {"data": [
//       {"hike1" : {name: "hike1", distance: "5 miles", elevation: 1000, difficulty: "easy"}},
//       {"hike2" : {name: "hike2", distance: "20 miles", elevation: 3000, difficulty: "hard"}},
//       {"hike3" : {name: "hike3", distance: "8 miles", elevation: 1200, difficulty: "moderate"}}
//     ]};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(dummyHikes);
});


router.post('/', function(req, res){
  var name = req.body.name.toUpperCase();

  var quereeey = "SELECT NAME(MILES) FROM HIKES " +
              "WHERE NAME='" + name;


  var data = dbms.dbquery(quereeey);
  data.then(function(results){
      console.log("results:" + JSON.stringify(results));
      var nameData = (results[0]["NAME(MILES)"] == null) ? 0 : results[0]["NAME(MILES)"];
      res.json({"data": [
          {"hike" : {name: name, quantity: nameData}}
      ]});
  });



  console.log(name);

    //res.json(dummyHikes);
});


module.exports = router;
