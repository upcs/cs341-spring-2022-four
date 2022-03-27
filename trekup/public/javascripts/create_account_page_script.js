createAccountHandler = function(event) {
    //check if input is empty and if passwords match
    if ($("#email").text() == "" || 
        $("#name").text() == "" || 
        $("#username").text() == "" ||
        $("#password").text() == "" ||
        $("#password").text() != $("confirm_password").text()) {
        alert("invalid new account info");
    } else {
        //check if username is already taken
        var exists = $.post('/user_add', {
            email: $("#email").val(),
            name: $("#name").val(),
            username: $("#username").val(),
            password: $("#password").val()
        }).done(function(data) {
            return data == "user exists";
        });
        
        //if the username wasn't taken, the account was created so they're logged in
        if (exists == true) {
            alert("username already taken");
        } else {
            sessionStorage.setItem('current_user', $("#username").val())
            window.location.href = "profile.html";
            event.preventDefault();
        }
    }
}

goToLoginHandler = function(event) {
    window.location.href = "login_page.html"
}

$(document).ready(function(){
    //actions for when the submit button for the form is clicked
    $("#create_account_button").on("click", createAccountHandler);

    $("#login_link").on("click", goToLoginHandler);

    $("#mastHead").click(function(){
        window.location.href="Index.html";
    });
});
