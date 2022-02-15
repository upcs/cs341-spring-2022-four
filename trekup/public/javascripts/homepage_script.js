$(document).ready(function() {
    $("#mastHead").click(function() {
        window.location.href = "Index.html";
    });
    $("#profile").click(function() {
        let loggedIn = true;

        if (loggedIn) {
            window.location.href = "profile.html"
        } else {
            window.location.href = "login_page.html";
        }
    });

});