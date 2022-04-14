createAccountHandler = function(event) {
    //check if input is empty and if passwords match
    if ($("#email").val().localeCompare("") == 0 || 
        $("#name").val().localeCompare("") == 0 || 
        $("#username").val().localeCompare("") == 0 ||
        $("#password").val().localeCompare("") == 0 ||
        $("#password").val().localeCompare($("#confirm_password").val()) != 0) {
        alert("invalid new account info");
    } else {
        //check if username is already taken
        $.post('/user_add', {
            email: $("#email").val(),
            name: $("#name").val(),
            username: $("#username").val(),
            password: $("#password").val()
        }, function(data) {
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

goToLoginHandler = function(event) {
    window.location.href = "login_page.html"
}

$(document).ready(function(){
    //actions for when the submit button for the form is clicked
    $("#create_account_button").on("click", createAccountHandler);

    $("#login_link").on("click", goToLoginHandler);

    $("#mast-head").click(function(){
        window.location.href="Index.html";
    });
});
