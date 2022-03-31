/* login function
 * 
 * @author Francisco and Brynn 
 * attempts to login to an account  
 */
function login(event) {
    $("#login_button").on("click", loginHandler); // handle click on login
    $("#create_account_link").on("click", goToCreateAccountHandler); // handle click on create account
}

/* loginHandler
 * 
 * @author Francisco and Brynn 
 * attempts to login once click received
 */
loginHandler = function(event) {
    $.post(`/login?username=${getUsername()}&password=${getPassword()}`, function(data) {
        // verify the user exists
        if (data != null && data.localeCompare("user exists") == 0) {
            sessionStorage.setItem('current_user', getUsername()); // store current user
            window.location.href = "profile.html"; // open profile page
            event.preventDefault(); // prevent default 
        } else {
            window.location.href = "login_page.html"; // go to login page
            document.getElementById('password').value = ''; // set password to empty 
            event.preventDefault(); // prevent default 
        }
    });
    event.preventDefault();
}

/* goToCreateAccountHandler
 * 
 * @author Francisco and Brynn 
 * attempts to login once click received
 */
goToCreateAccountHandler = function(event) {
    window.location.href = "create_account_page.html";
}

/* getUsername
 * 
 * @author Francisco and Brynn 
 * gets the username  
 */
function getUsername() {
    var username = document.getElementById('username').value;
    // username =
    return username;
}

/* getPassword
 * 
 * @author Francisco and Brynn 
 * gets the password  
 */
function getPassword() {
    var password = document.getElementById('password').value;
    return password;
}

// export the functions for testing 
module.exports = { login, getUsername, getPassword };
// PAST CODE FOR REFERENCE
///////////////////////////////////////////////////////////////////////////////////////////////////////
// $.post('/user_login', {
//     username: $("#username").val(),
//     password: $("#password").val()
// }, function(data) {
//     if (data.localeCompare("user exists") == 0) {
//         sessionStorage.setItem('current_user', $("#username").val());
//         window.location.href = "profile.html";
//         event.preventDefault();
//     } else {
//         window.location.href = "login_page.html";
//         event.preventDefault();
//     }
// });
// $(document).ready(function() {
//     //actions for when the submit button for the form is clicked
//     $("#login_button").on("click", loginHandler);

//     $("#create_account_link").on("click", goToCreateAccountHandler);
// });
// loginHandler = function(event) {
//     $.post('/user_login', {
//         username: getUsername(),
//         password: getPassword()
//     }, function(data) {
//         if (data.localeCompare("user exists") == 0) {
//             sessionStorage.setItem('current_user', getUsername());
//             window.location.href = "profile.html";
//             event.preventDefault();
//         } else {
//             window.location.href = "login_page.html";
//             event.preventDefault();
//         }
//     });
//     event.preventDefault();
// }
// goToCreateAccountHandler = function(event) {
//     window.location.href = "create_account_page.html";
// }
// $(document).ready(function() {
//     // function login() {
//     //actions for when the submit button for the form is clicked
//     $("#login_button").on("click", loginHandler);
//     $("#create_account_link").on("click", goToCreateAccountHandler);
// });
// login function
// function login() {
//     var username = getUsername();
//     var password = getPassword();
//     $("#login_button").on("click", loginHandler);
// }
