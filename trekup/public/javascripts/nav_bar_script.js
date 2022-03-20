/**
 * @nav_bar_script.js
 *
 * Implemented on all of the pages.
 * Adds click functionality to name to bring back to home page
 * When clicking on profile picture, it brings to a log in page, or
 * user homepage depending on if a user is logged in or not. 
*/

$(document).ready(function(){
  $("#mastHead").click(function(){
    window.location.href="Index.html";
  });
  $("#profPic").click(function(){
    let loggedIn = false;

    if(loggedIn){
      window.location.href="profile.html"
    }else{
      window.location.href="login_page.html";
    }
  });

});
