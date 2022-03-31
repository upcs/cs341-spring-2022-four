/* author: Logan Machida */

var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

var dbms = require('./update_user_info_dbms');

/* Update the user information */
router.post('/', async function(req, res, next) {
    var currUser = req.body.currUser;
    var currPass = req.body.currPass;
    var newPass = req.body.newPass;
    var newUser = req.body.newUser;
    var newName = req.body.newName;


    var get_salt_query = `select SALT from USER_PROFILES where USERNAME='${currUser}'`;
    var salt_result = dbms.dbquery(get_salt_query);

    salt_result.then(function(results) {
        if (results.length < 1) 
            return -1;

        console.log("salt: " + results[0].SALT);
        const password_hashed = bcrypt.hashSync(currPass, results[0].SALT);
        console.log("password: " + password_hashed);

        var login_query = `select * from USER_PROFILES 
                where USERNAME='${currUser}'
                and PASSWORD_HASHED='${password_hashed}'`;
        
        return dbms.dbquery(login_query);
    }).then(function(results) {
        if (results.length > 0) {

            dbms.dbquery(`SELECT * FROM USER_PROFILES WHERE USERNAME = '${currUser}'`, function(err, data) {
                if (!err) {
                    console.log(data.length)
                    if (data.length != 1) {
                        return res.status(400).send("Bad username");
                    } else {
                        if(currPass == data[0]["PASSWORD_HASHED"]){
                        console.log("password matches")
                                if (newPass) {
                                    var new_password_hashed = bcrypt.hashSync(newPass, results[0].SALT);
        
                                    dbms.dbquery(`UPDATE USER_PROFILES SET PASSWORD_HASHED = '${new_password_hashed}' WHERE USERNAME = '${currUser}'`, function(err, data){
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


        } else {
            res.send("user does not exist");
        }
    });
})

module.exports = router;
