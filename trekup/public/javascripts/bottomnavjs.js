
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



/* script for dropdown */
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
function searchHikes(){
  document.getElementById("hike1").innerHTML = "displayed hike";
  document.getElementById("hike2").innerHTML = "displayed hike";
  document.getElementById("hike3").innerHTML = "displayed hike";
  document.getElementById("hike4").innerHTML = "displayed hike";
  document.getElementById("hike5").innerHTML = "displayed hike";
}




///
