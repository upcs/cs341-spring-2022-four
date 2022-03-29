$(document).ready(function(){
  $("#mastHead").click(function(){
    window.location.href="Index.html";
  });
  $("#profPic").click(function(){
    let loggedIn = sessionStorage.getItem('current_user');

    // window.location.href = 'profile.html';
    if(loggedIn){
      window.location.href="profile.html"
    }else{
      window.location.href="login_page.html";
    }
  });

});
