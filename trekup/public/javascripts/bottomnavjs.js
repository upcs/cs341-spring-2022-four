
/* script for navbar */

  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }


//function for when the user clicks "search" button to search for hikes by name
function searchHikesName(){
  var name = document.getElementById("search").value;

  // document.getElementById("hike1").innerHTML = "displayed hike";
  // document.getElementById("hike2").innerHTML = "displayed hike";
  // document.getElementById("hike3").innerHTML = "displayed hike";

  sendPostName(name);
}

//function to send a post to the database
//  ***currently gets dummy data
function sendPostName(name){
  $.post('/namePost', //url
    function(dummyHikes, status, json){ //callback function

      document.getElementById("selection").innerHTML = "Hike name searched: " + name;


        $("#hike1").text(dummyHikes.data[0].hike1.distance + " miles, " + dummyHikes.data[0].hike1.elevation + " ft, " + dummyHikes.data[0].hike1.difficulty + ".");
        $("#hike2").text(dummyHikes.data[1].hike2.distance + " miles, " + dummyHikes.data[1].hike2.elevation + " ft, " + dummyHikes.data[1].hike2.difficulty + ".");
        $("#hike3").text(dummyHikes.data[2].hike3.distance + " miles, " + dummyHikes.data[2].hike3.elevation + " ft, " + dummyHikes.data[2].hike3.difficulty + ".");

    });
}


/* script for displaying dropdowns */
/* source: https://www.w3schools.com/howto/howto_js_filter_dropdown.asp */
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function filterDifficulty() {
  document.getElementById("difficultyDrop").classList.toggle("show");
}
function filterMiles() {
  document.getElementById("milesdropdown").classList.toggle("show");
}
function filterElevation() {
  document.getElementById("elevationGain").classList.toggle("show");
}



/* function to display hikes when user hits submit */
function searchHikesFilter(){
  //get checked boxes for difficulty
  var diffEasy = document.getElementById("easy").checked;
  var diffMod = document.getElementById("moderate").checked;
  var diffHard = document.getElementById("hard").checked;

  //get mile range
  var miles = document.getElementById("mileRange").value;

  //get elevation range
  var elevation = document.getElementById("elevationRange").value;

  var difficultyS = "null";


  if(diffEasy && diffMod && diffHard){
    difficultyS = "easy-hard";
  }
  else if (diffEasy && diffMod) {
    difficultyS = "easy-moderate";
  }
  else if (diffEasy && diffHard) {
    difficultyS = "easy&hard";
  }
  else if (diffHard && diffMod) {
    difficultyS = "moderate-hard";
  }
  else if (diffEasy) {
    difficultyS = "easy";
  }
  else if (diffMod) {
    difficultyS = "moderate";
  }
  else if (diffHard) {
    difficultyS = "hard";
  }



  //display hikes
  //document.getElementById("selection").innerHTML = "Filters selected: Miles = " + miles + " miles, " + "Elevation = " + elevation + " ft, " + "Difficulty = " + difficultyS;
  // document.getElementById("milesSelected").innerHTML = "Miles: " + miles + " miles";
  // document.getElementById("elevationSelected").innerHTML = "Elevation: " + elevation + " ft";
  // document.getElementById("difficultySelected").innerHTML = "Difficulty: ";
  // document.getElementById("hike4").innerHTML = "displayed hike";
  // document.getElementById("hike5").innerHTML = "displayed hike";

  //call function to send post
  sendPostFilters(miles, elevation, difficultyS);


}


//function to send a post to the database
//  ***currently gets dummy data
function sendPostFilters(miles, elevation, difficultyS){
  $.post('/filterPost', //url
    function(dummyHikes, status, json){ //callback function

      document.getElementById("selection").innerHTML = "Filters selected: Miles = " + miles + " miles, " + "Elevation = " + elevation + " ft, " + "Difficulty = " + difficultyS;

        $("#hike1").text(dummyHikes.data[0].hike1.distance + " miles, " + dummyHikes.data[0].hike1.elevation + " ft, " + dummyHikes.data[0].hike1.difficulty + ".");
        $("#hike2").text(dummyHikes.data[1].hike2.distance + " miles, " + dummyHikes.data[1].hike2.elevation + " ft, " + dummyHikes.data[1].hike2.difficulty + ".");
        $("#hike3").text(dummyHikes.data[2].hike3.distance + " miles, " + dummyHikes.data[2].hike3.elevation + " ft, " + dummyHikes.data[2].hike3.difficulty + ".");

    });
}










///
