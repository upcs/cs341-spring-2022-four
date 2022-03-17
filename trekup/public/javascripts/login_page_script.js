loginHandler = function(event) {
    window.location.href = "profile.html";
    event.preventDefault();
}

goToCreateAccountHandler = function(event) {
    window.location.href = "create_account_page.html"
}

$(document).ready(function(){
    //actions for when the submit button for the form is clicked
    $("#login_button").on("click", loginHandler);

    $("#create_account_link").on("click", goToCreateAccountHandler);

    $("#mastHead").click(function(){
        window.location.href="Index.html";
    });
});
