$(document).ready(function(){
    $("#mastHead").click(function(){
      window.location.href="Index.html";
    });

    $("#profile").click(function(){
      window.location.href="login_page.html";
    });

    $("#profilepic").click(function() {
      $.post('/profile', {value: 1});
    });
  });
