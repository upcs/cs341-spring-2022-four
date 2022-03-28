/* author: Logan Machida */

var express = require('express');
var router = express.Router();

var dbms = require('./update_user_info_dbms');

/* Update the user information */
router.post('/', async function(req, res, next) {
    var currUser = req.body.currUser;
    var currPass = req.body.currPass;
    var newPass = req.body.newPass;
    var confirmPass = req.body.confirmPass;
    var newUser = req.body.newUser;


    dbms.dbquery(`SELECT * FROM USER_PROFILES WHERE USERNAME = '${currUser}'`, function(err, data) {
        if (!err) {
            console.log(data.length)
            if (data.length != 1) {
                return res.status(400).send("Bad username");
            } else {
                if (currPass == data[0]["PASSWORD_HASHED"]) {
                    console.log("password martches")

                    if(newPass == confirmPass){
                        dbms.dbquery(`UPDATE USER_PROFILES SET PASSWORD_HASHED = '${newPass}' WHERE USERNAME = '${currUser}'`, function(err, data){
                           
                        })
                    }

                } else {
                    console.log("password doesnt martches")
                }
            }
        } else {
            return res.sendStatus(500);
        }
        
    })
});

module.exports = router;
