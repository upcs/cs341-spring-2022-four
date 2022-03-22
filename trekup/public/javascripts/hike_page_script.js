
$(document).ready(function(){
  let hikeToPost = localStorage.getItem('Name');
  // alert(localStorage.getItem('Name'));
  $.post("/popHikePage",{hName: hikeToPost}, function(data, status){
    displayHikePageInfo(data, status);
  });
});

function displayHikePageInfo(data, status){
  const theHike = JSON.parse(data);
  // alert(theHike);
  $("#hike_name").text(theHike[0].HIKE);
  $("#notes").text(theHike[0].NOTES);
  $("#difficulty").text(theHike[0].DIFFICULTY);
  $("#distance").text(theHike[0].DISTANCE);
  $("#elevation_change").text(theHike[0].ELEVATION_CHANGE);
}
