/**
 * user_info_dbms.js
 *
 * Modified by Brynn Harrington on 20 Feb 2022
 * Modified by Francisco Nguyen - 3 Mar 2022
 * 
 * This file contains functions for accessing the local user MySQL database
 * which contains the user profiles
 */

exports.version = '0.0.1';


var mysql = require('mysql2'),
    async = require('async');

// var host = "34.127.115.166"; //from GCloud instance (change to match your db)
// var database = "USERS"; //database name
// var user = "root"; //username (change to match your db)
// var password = "teamFour!SQL"; //password (change to match your db, yes this is very poor practice)

var host = "127.0.0.1"; //from GCloud instance (change to match your db)
var database = "USERPROFILES"; //database name
var user = "root"; //username (change to match your db)
var password = ""; //password (change to match your db, yes this is very poor practice)

/**
 * dbquery
 *
 * performs a given SQL query on the database and returns the results
 * to the caller
 *
 * @param query     the SQL query to perform (e.g., "SELECT * FROM ...")
 * @param callback  the callback function to call with two values
 *                   error - (or 'false' if none)
 *                   results - as given by the mysql client
 */
exports.dbquery = function(query_str, callback) {

        var dbclient;
        var results = null;

        async.waterfall([

                //Step 1: Connect to the database
                function(callback) {
                    console.log("\n** creating connection.");
                    dbclient = mysql.createConnection({
                        host: host,
                        user: user,
                        password: password,
                        database: database,
                    });

                    dbclient.connect(callback);
                },

                //Step 2: Issue query
                function(results, callback) {
                    console.log("\n** retrieving data");
                    dbclient.query(query_str, callback);
                },

                //Step 3: Collect results
                function(rows, fields, callback) {
                    console.log("\n** dumping data:");
                    results = rows;
                    console.log("" + rows);
                    callback(null);
                }

            ],
            // waterfall cleanup function
            function(err, res) {
                if (err) {
                    console.log("Database query failed.  sad");
                    console.log(err);
                    callback(err, null);
                } else {
                    console.log("Database query completed.");
                    callback(false, results);
                }

                //close connection to database
                dbclient.end();

            });

    } //function dbquery