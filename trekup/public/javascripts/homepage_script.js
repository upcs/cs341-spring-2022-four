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
  $(".flip-card").click(function(){
    window.location.href="hike_page_template.html";
  });

  //populate flip cards with database information

});
