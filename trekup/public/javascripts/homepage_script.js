

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
  $.post("/popRecHikes",{name: "'Tim'", noFilter: 1},function(data, status){
    displayHikePostInfo(data, status, 4);
  });

  // $.post("/popSearchHikes",{name: "'Tim'", noFilter: 1},function(data, status){
  //   displayHikePostInfo(data, status, 8);
  // });

});

function initHikes(){
  $.post("/popSearchHikes",{name: "'Tim'", noFilter: 1},function(data, status){
    displayHikePostInfo(data, status, 8);
  });
}

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
      + ", Mileage: " + recHikes[hikeIdx].DISTANCE + ", Difficulty: " + recHikes[hikeIdx].DIFFICULTY);
}

function searchHikesFilter(){
  //get checked boxes for difficulty
  // var diffEasy = document.getElementById("easy").checked;
  // var diffMod = document.getElementById("moderate").checked;
  // var diffHard = document.getElementById("hard").checked;
  var diff = "Easy";
  var diffEasy = "0";
  var diffMod = "0";
  var diffHard = "0";
  if ($('#easy').is(":checked")){
    diffEasy = "1";
    diff = "Easy"
  }
  if ($('#moderate').is(":checked")){
    diffMod = "1";
    diff = "Moderate"
  }
  if ($('#hard').is(":checked")){
  // if(document.getElementById("hard").checked){
    diffHard = "1";
    diff = "Difficult"
  }
  //get mile range
  var miles = document.getElementById("mileRange").value;

  //get elevation range
  var elevation = document.getElementById("elevationRange").value;


  // localStorage.setItem('Diffic', diff);
  // localStorage.setItem('Milea', miles);
  // localStorage.setItem('Eleva', elevation);
  // localStorage.setItem('UseFilter', true);

  // $.post("/popSearchHikes",{ez: diffEasy, me: diffMod, ha: diffHard, mileR: miles, elev: elevation, noFilter: 0},function(data, status){
  $.post("/popSearchHikes", {dif:diff, mileR: miles, elev: elevation},function(data, status){
    displayHikePostInfo(data, status, 8);
  });

  localStorage.setItem('UseFilter', false);

}

function searchHikesName(){
  var name = document.getElementById("search").value;

  if(name == ""){
    alert("No text entered in searchbar. Please enter a hike name to search");
  }else{
    $.post("/popSearchHikes", {nam: name}, function(data, status){
      displayHikePostInfo(data, status, 8);
    });
  }
}

// export const toPass = passName
