$(document).ready(function(){
  $("#mastHead").click(function(){
    window.location.href="Homepage.html";
  });
  $("#profile").click(function(){
    let loggedIn = false;

    if(loggedIn){
      window.location.href="profile.html"
    }else{
      window.location.href="login_page.html";
    }
  });

});
