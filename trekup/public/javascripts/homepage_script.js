

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
  $.post("/popRecHikes","Tim",function(data, status){
    displayHikePostInfo(data, status);
  });

});

function displayHikePostInfo(data, status){
  const recHikes = JSON.parse(data);

  populateRecHikes(recHikes, 0);
  populateRecHikes(recHikes, 1);
  populateRecHikes(recHikes, 2);
  populateRecHikes(recHikes, 3);
}

function populateRecHikes(recHikes, hikeIdx){
  //insert name
  var component = "#Hike" + (hikeIdx + 1) + "Name";
  $(component).text(recHikes[hikeIdx].HIKE);

  //insert elevation change and mileage
  component = "#Hike" + (hikeIdx + 1) + "Metrics";
  $(component).text("Elevation Change: " + recHikes[hikeIdx].ELEVATION_CHANGE
      + ", Mileage: " + recHikes[hikeIdx].DISTANCE);
}
