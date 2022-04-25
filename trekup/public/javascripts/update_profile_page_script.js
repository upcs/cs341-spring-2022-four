/*
File to check who's logged in and update information if possible
*/


// Header Functionality
$(document).ready(function(){
  $("#mast-head").click(function(){
    window.location.href="index.html";
  });
  $("#profPic").click(function(){
    let loggedIn = true;

    if(loggedIn){
      window.location.href="profile.html"
    }else{
      window.location.href="login_page.html";
    }
  });

  // Submit button to modify the user's information
  $("#submit").click(function(){
    // variables inputed by the user

    var currUser = localStorage.getItem('current_user');
    var currPass = $('#curpass').val();
    var newPass = $('#newpass').val();
    var confirmPass = $('#confirmpass').val();
    var newUser = $('#newuser').val();
    var newName =$('#newname').val();



    var data = {
      currUser: currUser,
      currPass: currPass,
      newUser: newUser,
      newName: newName
      }

      if (newPass == confirmPass) {
        data["newPass"] = newPass;

      } else {
        data["newPass"] = currPass;
        alert("Confirm password does not match, no password change")
      }

    console.log(data)



    $.post('/user_update', data, function(response) {

      alert("Changed")
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      alert(jqXHR.responseText);
    });

  });
});
