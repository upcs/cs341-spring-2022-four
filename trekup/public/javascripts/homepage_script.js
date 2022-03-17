

$(document).ready(function(){
  // $("#mastHead").click(function(){
  //   window.location.href="Index.html";
  // });
  // $("#profPic").click(function(){
  //   let loggedIn = true;
  //
  //   if(loggedIn){
  //     window.location.href="profile.html"
  //   }else{
  //     window.location.href="login_page.html";
  //   }
  // });

  // $(".flip-card").click(function(){
  //   window.location.href="hike_page_template.html";
  // });

  //populate flip cards with database information
  $.post("/popRecHikes",{name: "'Tim'"},function(data, status){
    displayHikePostInfo(data, status, 4);
  });

  $.post("/popSearchHikes",{name: "'Tim'"},function(data, status){
    displayHikePostInfo(data, status, 8);
  });

});

let passName = "";

function mrClicky(hikeNameField){
  passName = $(hikeNameField).text();
  localStorage.setItem('Name', passName);
  window.location.href="hike_page_template.html";
}

function displayHikePostInfo(data, status, numPop){
  const recHikes = JSON.parse(data);
  // alert(recHikes);
  for(let i = 0; i < numPop; i++){
    let helperStr = "";
    if(numPop == 4){
      helperStr = "Hike";
    }else{
      helperStr = "SearchHike";
    }
    populateRecHikes(recHikes, i, helperStr);
  }
  // populateRecHikes(recHikes, 0, "Hike");
  // populateRecHikes(recHikes, 1, "Hike");
  // populateRecHikes(recHikes, 2, "Hike");
  // populateRecHikes(recHikes, 3, "Hike");
}

function populateRecHikes(recHikes, hikeIdx, helperStr){
  //insert name
  var component = "#" + helperStr + (hikeIdx + 1) + "Name";
  $(component).text(recHikes[hikeIdx].HIKE);

  //insert elevation change and mileage
  component = "#" + helperStr + (hikeIdx + 1) + "Metrics";
  $(component).text("Elevation Change: " + recHikes[hikeIdx].ELEVATION_CHANGE
      + ", Mileage: " + recHikes[hikeIdx].DISTANCE);
}

// export const toPass = passName
