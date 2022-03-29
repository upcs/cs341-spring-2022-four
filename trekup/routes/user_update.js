/* author: Logan Machida */

var express = require('express');
var router = express.Router();

var dbms = require('./update_user_info_dbms');

/* Update the user information */
router.post('/', async function(req, res, next) {
    var currUser = req.body.currUser;
    var currPass = req.body.currPass;
    var newPass = req.body.newPass;
    var newUser = req.body.newUser;
    var newName = req.body.newName;


    dbms.dbquery(`SELECT * FROM USER_PROFILES WHERE USERNAME = '${currUser}'`, function(err, data) {
        if (!err) {
            console.log(data.length)
            if (data.length != 1) {
                return res.status(400).send("Bad username");
            } else {
                if (currPass == data[0]["PASSWORD_HASHED"]) {
                    console.log("password matches")
                        if (newPass) {
                            dbms.dbquery(`UPDATE USER_PROFILES SET PASSWORD_HASHED = '${newPass}' WHERE USERNAME = '${currUser}'`, function(err, data){
                                res.sendStatus(200);
                             })
                            }   
                        if(newName){
                            dbms.dbquery(`UPDATE USER_PROFILES SET NAME = '${newName}' WHERE USERNAME = '${currUser}'`, function(err, data){
                                res.sendStatus(200);
                             })
                        }     
                } else {
                    return res.status(403).send("Incorrect password entered.");
                }
            }
        } else {
            return res.status(500).send("Database error");
        }
        
    })

});

module.exports = router;
