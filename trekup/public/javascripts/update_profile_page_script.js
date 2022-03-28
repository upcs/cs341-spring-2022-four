/*
File to check who's logged in and update information if possible
*/


// Header Functionality
$(document).ready(function(){
  $("#mastHead").click(function(){
    window.location.href="Index.html";
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
    
    var currUser = sessionStorage.getItem('current_user');
    var currPass = $('#curpass');
    var newPass = $('#newpass');
    var confirmPass = $('#confirmpass');
    var newUser = $('#newuser');


    var data = {
      currUser: currUser,
      currPass: currPass.val(),
      newPass: newPass.val(),
      confirmPass: confirmPass.val(),
      newUser: newUser.val()
    }
    
    console.log(data)
    $.post('/user_update', data);

  });
});
