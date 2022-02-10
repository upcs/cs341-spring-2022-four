loginHandler = function(event) {
    location.href = "profile.html";
}

$(document).ready(function(){
    //actions for when the submit button for the form is clicked
    $("#login_button").on("click", loginHandler);

});
