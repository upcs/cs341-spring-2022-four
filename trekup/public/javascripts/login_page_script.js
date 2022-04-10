/* login function
 * 
 * @author Francisco and Brynn 
 * attempts to login to an account  
 */
'use strict';
const $ = require('jquery');

/* getUsername
 * 
 * @author Francisco 
 * @modified by Brynn 
 * gets the username  
 */
function getUsername() {
    var username = document.getElementById('username').value;
    return username;
}

/* getPassword
 * 
 * @author Francisco 
 * @modified by Brynn 
 * gets the password  
 */
function getPassword() {
    var password = document.getElementById('password').value;
    return password;
}

/* login
 * 
 * @author Francisco  
 * @modified by Brynn Brynn 
 * attempts to login once click received
 */
// function login(event) {
//     $("#login_button").on("click", loginHandler); // handle click on login
//     $("#create_account_link").on("click", goToCreateAccountHandler); // handle click on create account
// }

/* loginHandler
 * 
 * @author Francisco and Brynn 
 * attempts to login once click received
 */
function loginHandler(event) {
    $.post('/user_login', {
        username: getUsername(),
        password: getPassword()
    }, function(data) {
        if (data.localeCompare("user exists") == 0) {
            sessionStorage.setItem('current_user', getUsername());
            window.location.href = "profile.html";
            event.preventDefault();
        } else {
            window.location.href = "login_page.html";
            event.preventDefault();
        }
    });
    event.preventDefault();
}

/* goToCreateAccountHandler
 * 
 * @author Francisco  
 * @modified by Brynn Brynn 
 * attempts to create account once click received
 */
function goToCreateAccountHandler(event) {
    window.location.href = "create_account_page.html";
}

/* ready 
 * 
 * @author Francisco 
 * processes click   
 */
$(document).ready(function() {
    //actions for when the submit button for the form is clicked
    $("#login_button").on("click", loginHandler);
    $("#create_account_link").on("click", goToCreateAccountHandler);
});
// $(document).ready(loginHandler);

// export the functions for testing 
module.exports = { getUsername, getPassword, loginHandler, goToCreateAccountHandler };