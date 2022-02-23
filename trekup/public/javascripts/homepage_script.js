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
  $("#Hike4Name").text("Hello");
  $.post("/popRecHikes","Tim",function(data, status){
    displayHikePostInfo(data, status);
  });

});

function displayHikePostInfo(data, status){
  const recHikes = JSON.parse(data);

  populateRecHikes("#Hike1Name", recHikes, 0);
  populateRecHikes("#Hike2Name", recHikes, 1);
  populateRecHikes("#Hike3Name", recHikes, 2);
  populateRecHikes("#Hike4Name", recHikes, 3);
}

function populateRecHikes(hike, recHikes, hikeIdx){
  $(hike).text(recHikes[hikeIdx].HIKE);
}
