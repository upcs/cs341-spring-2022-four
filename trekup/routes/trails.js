/* trails.js
 * @author Brynn Harrington
 * Date Modified: 20 Feb 2022
 * 
 * Create a new route to access the trail data for the 
 * requested attribute from the database and return that 
 * data to the client.
 * 
 */
// require the express and get the router
var express = require('express');
var router = express.Router();

// require the database management system
var dbms = require('./trail_info_dbms.js');