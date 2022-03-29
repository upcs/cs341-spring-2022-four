loginHandler = function(event) {
    $.post('/user_login', {
        username: getUsername(),
        password: getPassword()
    }, function(data) {
        if (data.localeCompare("user exists") == 0) {
            sessionStorage.setItem('current_user', getUsername());
            window.location.href = "profile.html";
            event.preventDefault();
        } 
        else {
            window.location.href = "login_page.html";
            event.preventDefault();
        }
    });
    event.preventDefault();
}

goToCreateAccountHandler = function(event) {
    window.location.href = "create_account_page.html";
}

$(document).ready(function() {
    //actions for when the submit button for the form is clicked
    $("#login_button").on("click", loginHandler);

    $("#create_account_link").on("click", goToCreateAccountHandler);
});

function getUsername() {
    return $("#username").val();
}

function getPassword() {
    return $("#password").val();
}