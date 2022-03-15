$(document).ready(function(){
    $("#mastHead").click(function(){
      window.location.href="Index.html";
    });

    $("#profile").click(function(){
      window.location.href="login_page.html";
    });

    $("#profilepic").on("click", function() {
      $.post('/profilePost', {value: 1});
    });
  });
