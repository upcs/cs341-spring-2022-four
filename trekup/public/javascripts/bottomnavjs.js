
/* script for navbar */

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
// function searchHikesName(){
//   var name = document.getElementById("search").value;
//
//   if(name == "")
//   {
//     alert("No text entered in searchbar. Please enter a hike name to search");
//   }
//   else{
//     sendPostName(name);
//   }
//
//   // document.getElementById("hike1").innerHTML = "displayed hike";
//   // document.getElementById("hike2").innerHTML = "displayed hike";
//   // document.getElementById("hike3").innerHTML = "displayed hike";
//
//
// }

//function to send a post to the database
//  ***currently gets dummy data
function sendPostName(name){
  $.post('/namePost', //url
    function(dummyHikes, status, json){ //callback function

      document.getElementById("selection").innerHTML = "Hike name searched: " + name;


        $("#hike1").text(dummyHikes.data[0].hike1.name + ": " + dummyHikes.data[0].hike1.distance + " miles, " + dummyHikes.data[0].hike1.elevation + " ft, " + dummyHikes.data[0].hike1.difficulty + ".");
        $("#hike2").text(dummyHikes.data[1].hike2.name + ": " + dummyHikes.data[1].hike2.distance + " miles, " + dummyHikes.data[1].hike2.elevation + " ft, " + dummyHikes.data[1].hike2.difficulty + ".");
        $("#hike3").text(dummyHikes.data[2].hike3.name + ": " + dummyHikes.data[2].hike3.distance + " miles, " + dummyHikes.data[2].hike3.elevation + " ft, " + dummyHikes.data[2].hike3.difficulty + ".");

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
// function searchHikesFilter(){
//   //get checked boxes for difficulty
//   var diffEasy = document.getElementById("easy").checked;
//   var diffMod = document.getElementById("moderate").checked;
//   var diffHard = document.getElementById("hard").checked;
//
//   //get mile range
//   var miles = document.getElementById("mileRange").value;
//
//   //get elevation range
//   var elevation = document.getElementById("elevationRange").value;
//
//   var difficultyS = "null";
//
//   $.post("/popRecHikes",{ez: diffEasy, me: diffMod, ha: diffHard, mileR: miles, elev: elevation},function(data, status)){
//     displayHikePostInfo(data, status, 8);
//   }
//
//   if(diffEasy && diffMod && diffHard){
//     difficultyS = "easy-hard";
//   }
//   else if (diffEasy && diffMod) {
//     difficultyS = "easy-moderate";
//   }
//   else if (diffEasy && diffHard) {
//     difficultyS = "easy&hard";
//   }
//   else if (diffHard && diffMod) {
//     difficultyS = "moderate-hard";
//   }
//   else if (diffEasy) {
//     difficultyS = "easy";
//   }
//   else if (diffMod) {
//     difficultyS = "moderate";
//   }
//   else if (diffHard) {
//     difficultyS = "hard";
//   }
//
//
//
//   //display hikes
//   //document.getElementById("selection").innerHTML = "Filters selected: Miles = " + miles + " miles, " + "Elevation = " + elevation + " ft, " + "Difficulty = " + difficultyS;
//   // document.getElementById("milesSelected").innerHTML = "Miles: " + miles + " miles";
//   // document.getElementById("elevationSelected").innerHTML = "Elevation: " + elevation + " ft";
//   // document.getElementById("difficultySelected").innerHTML = "Difficulty: ";
//   // document.getElementById("hike4").innerHTML = "displayed hike";
//   // document.getElementById("hike5").innerHTML = "displayed hike";
//
//   //call function to send post
//
//   //I DID AN EDIT RIGHT HERE AND WANT IT TO BE EASY TO FIND!!!
//   // sendPostFilters(miles, elevation, difficultyS);
//
//
// }


//function to send a post to the database
//  ***currently gets dummy data
// function sendPostFilters(miles, elevation, difficultyS){
//   $.post('/filterPost', //url
//     function(dummyHikes, status, json){ //callback function
//
//       document.getElementById("selection").innerHTML = "Filters selected: Miles = " + miles + " miles, " + "Elevation = " + elevation + " ft, " + "Difficulty = " + difficultyS;
//
//       $("#hike1").text(dummyHikes.data[0].hike1.name + ": " + dummyHikes.data[0].hike1.distance + " miles, " + dummyHikes.data[0].hike1.elevation + " ft, " + dummyHikes.data[0].hike1.difficulty + ".");
//       $("#hike2").text(dummyHikes.data[1].hike2.name + ": " + dummyHikes.data[1].hike2.distance + " miles, " + dummyHikes.data[1].hike2.elevation + " ft, " + dummyHikes.data[1].hike2.difficulty + ".");
//       $("#hike3").text(dummyHikes.data[2].hike3.name + ": " + dummyHikes.data[2].hike3.distance + " miles, " + dummyHikes.data[2].hike3.elevation + " ft, " + dummyHikes.data[2].hike3.difficulty + ".");
//
//     });
// }

// For ranges
var mileRange = document.querySelector('input[name="mileRange"]'),
    mileRangeLower = document.querySelector('input[name="mileRangeLower"]'),
    outRangeUpper = document.querySelector('.outRangeUpper'),
    outRangeLower = document.querySelector('.outRangeLower'),
    inclRange = document.querySelector('.incl-range'),
    updateView = function () {
      if (this.getAttribute('name') === 'mileRange') {
        outRangeUpper.innerHTML = this.value;
        outRangeUpper.style.left = this.value / this.getAttribute('max') * 100 + '%';
      } else {
        outRangeLower.style.left = this.value / this.getAttribute('max') * 100 + '%';
        outRangeLower.innerHTML = this.value
      }
      if (parseInt(mileRange.value) > parseInt(mileRangeLower.value)) {
        inclRange.style.width = (mileRange.value - mileRangeLower.value) / this.getAttribute('max') * 100 + '%';
        inclRange.style.left = mileRangeLower.value / this.getAttribute('max') * 100 + '%';
      } else {
        inclRange.style.width = (mileRangeLower.value - mileRange.value) / this.getAttribute('max') * 100 + '%';
        inclRange.style.left = mileRange.value / this.getAttribute('max') * 100 + '%';
      }
    };

  document.addEventListener('DOMContentLoaded', function () {
    updateView.call(mileRange);
    updateView.call(mileRangeLower);
    $('input[type="range"]').on('mouseup', function() {
      this.blur();
    }).on('mousedown input', function () {
      updateView.call(this);
    });
  });







///
