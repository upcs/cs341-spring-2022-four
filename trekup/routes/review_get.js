// require the express and get the router
var express = require('express');
var router = express.Router();

// require the database management system
var dbms = require('./dbms_trail_info.js');

// store the information
var trail_info = [];

// POST for retrieving hikes
router.post('/', function(req, res, next) {});
module.exports = router;