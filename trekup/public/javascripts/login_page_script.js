loginHandler = function(event) {
    var exists = $.post('/user_login', {
        username: $("#username").val(),
        password: $("#password").val()
    }).done(function(data) {
        return data == "user exists";
    });

    if (exists) {
        sessionStorage.setItem('current_user', $("#username").val())
        window.location.href = "profile.html";
        event.preventDefault();
    }
}

goToCreateAccountHandler = function(event) {
    window.location.href = "create_account_page.html"
}

$(document).ready(function() {
    //actions for when the submit button for the form is clicked
    $("#login_button").on("click", loginHandler);

    $("#create_account_link").on("click", goToCreateAccountHandler);

    $("#mastHead").click(function() {
        window.location.href = "Index.html";
    });
});