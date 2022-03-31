// create an account if possible with given information
createAccountHandler = function(event) {
    // get the values 
    var email = getEmail();
    var name = getName();
    var username = getUsername();
    var password = getPassword();
    var confirm_pass = getConfirmPassword();

    //check if input is empty and if passwords match
    if (email.localeCompare("") == 0 ||
        name.localeCompare("") == 0 ||
        username.val().localeCompare("") == 0 ||
        password.val().localeCompare("") == 0 ||
        password.val().localeCompare(confirm_pass) != 0) {
        alert("invalid new account info");
    } else {
        // add the new user to the system 
        $.post('/user_add?email=${getEmail()}&name=${getName()}&username=${getUsername()}&password=${getPassword()}', function(data) {
            //check if username is already taken
            if (data.localeCompare("added") == 0) {
                sessionStorage.setItem('current_user', $("#username").val())
                window.location.href = "profile.html";
                event.preventDefault();
            } else {
                window.location.href = "create_account_page.html";
                event.preventDefault();
            }
        });
        event.preventDefault();
    }
}

// go to the login handler
goToLoginHandler = function(event) {
    window.location.href = "login_page.html"
}

// $(document).ready(function() {
function createAccount() {
    // actions for when the submit button for the form is clicked
    $("#create_account_button").on("click", createAccountHandler);
    $("#login_link").on("click", goToLoginHandler);
    $("#mastHead").click(function() {
        window.location.href = "Index.html";
    });
}
// );

/* getUsername
 * 
 * @author Francisco, Logan, and Brynn 
 * gets the username  
 */
function getUsername() {
    var username = document.getElementById('username').value;
    return username;
}

/* getName
 * 
 * @author Francisco, Logan, and Brynn 
 * gets the name  
 */
function getName() {
    var name = document.getElementById('name').value;
    return name;
}

/* getEmail
 * 
 * @author Francisco, Logan, and Brynn 
 * gets the email  
 */
function getEmail() {
    var email = document.getElementById('email').value;
    return email;
}
/* getPassword
 * 
 * @author Francisco, Logan, and Brynn 
 * gets the password  
 */
function getPassword() {
    var password = document.getElementById('password').value;
    return password;
}
/* getConfirmPassword
 * 
 * @author Francisco, Logan, and Brynn 
 * gets the confirm password  
 */
function getConfirmPassword() {
    var password = document.getElementById('confirm_password').value;
    return password;
}
module.exports = { createAccountHandler, getEmail, getName, getUsername, getPassword, getConfirmPassword, goToLoginHandler, createAccount }; // export functions




/// original post
/*             // email: ,
            // name: $("#name").val(),
            // username: $("#username").val(),
            // password: $("#password").val() */