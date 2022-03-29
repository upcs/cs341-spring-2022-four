/**
 * @hike_page_script.js
 *
 * sets all of the components for the specific hike page after the post
 *
 * Posts with file: popHikePage.js
 */

$(document).ready(function(){
    let hikeToPost = localStorage.getItem('Name');
    // alert(localStorage.getItem('Name'));
    $.post("/popHikePage",{hName: hikeToPost}, function(data, status){
      displayHikePageInfo(data, status);
    });

    //hide the link to add a hike to a users completed list if:
    //no user is logged in OR the user has already added it
    if (sessionStorage.getItem("current_user") == null) {
        $("#user_add_link").hide();
    } else {
        $.post('/if_user_added_hike', {
            username: sessionStorage.getItem("current_user"),
            hike_name: hikeToPost
        }).done(function (data) {
            if (data.localeCompare("user already added hike") == 0) {
                $("#user_add_link").hide();
            }
        });
    }

    $("#user_add_link").on("click", addHikeHandler);
});

addHikeHandler = function() {
    let num_stars = 5;
    $(".rating.hike.star").each(function(ind) {
        if (this.classList.contains("blank")) num_stars--;
    });
    
    $.post('/user_add_completed_hike', {
        username: sessionStorage.getItem("current_user"),
        hike_name: $("#hike_name").text(),
        rating: num_stars,
        distance: $("#distance").text(),
        elevation: $("#elevation_change").text() 
        });
    $("#user_add_link").hide();
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
