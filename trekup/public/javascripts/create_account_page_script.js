createAccountHandler = function(event) {
    if ($("#password").text() != $("confirm_password").text()) {
        alert("different passwords");
    } else {
        var exists = $.post('/user_add', {
            email: $("#email").val(),
            name: $("#name").val(),
            username: $("#username").val(),
            password: $("#password").val()
        }).done(function(data) {
            return data == "user exists";
        });
        
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
