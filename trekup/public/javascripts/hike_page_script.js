
$(document).ready(function(){
  let hikeToPost = localStorage.getItem('Name');
  // alert(localStorage.getItem('Name'));
  // $.post("/popHikePage",{hName: hikeToPost}, function(data, status){
  //   displayHikePageInfo(data, status);
  // });
  if (sessionStorage.getItem("current_user") == null) {
    $("#user_add_link").hide();
  }

  $("#user_add_link").on("click", addHikeHandler);
});

addHikeHandler = function() {
  $.post('/user_add_completed_hike', {
      username: sessionStorage.getItem("current_user"),
      hike_name: $("#hike_name").val()
    });
}

function displayHikePageInfo(data, status){
  const theHike = JSON.parse(data);
  // alert(theHike);
  $("#hike_name").text(theHike[0].HIKE);
  $("#notes").text(theHike[0].NOTES);
  $("#difficulty").text(theHike[0].DIFFICULTY);
  $("#distance").text(theHike[0].DISTANCE);
  $("#elevation_change").text(theHike[0].ELEVATION_CHANGE);
}
