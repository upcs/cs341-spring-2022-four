createAccountHandler = function(event) {
    window.location.href = "profile.html";
    event.preventDefault();
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
