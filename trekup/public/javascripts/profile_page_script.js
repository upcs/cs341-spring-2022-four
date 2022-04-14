/**
 * author: Logan Machida
 * updated by: Francisco Nguyen
 */

/**creating html for a hike box to append to completed hike list */
addHike = function (hike) {
    return `
    <div class="hikebox", onClick='mrClicky(this, "${hike.HIKE_NAME}")'>
      <div class="removehike" onClick='trashRemoveHike(this)'></div>
      <img id="hikepic" src="https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/New-Hiking.jpg?itok=p0tfoXXi">
      <h3 class="hikeprofile">${hike.HIKE_NAME}</h3>
      <h4>Di. <span class=hikedistance>${hike.DISTANCE}</span> mi. El. <span class=hikeelevation>${hike.ELEVATION_CHANGE}</span> ft.</h4>
    </div>
  `;
}

/**creaging html for a achievement box to append to achievements list */
makeTrophy = function (trophyName, desc) {
    return `
    <div id = trophybox>
        <h3 style="margin-left: 10px; margin-right:10px"><i>${trophyName}</i> </h3>
        <h5 style="margin-left: 10px; margin-right:10px">${desc}</h5>
        <img id="trophy" src="./images/trophy.png">
    </div>`;
}

addTrophies = function (achievements_bits) {
    if (achievements_bits.charAt(0) == '1') 
        $("#achievementsbox").append(makeTrophy("Pat on the Back Badge", "Congrats! You left your couch you potato."));

    if (achievements_bits.charAt(1) == '1') 
        $("#achievementsbox").append(makeTrophy("Lurker Badge", "Hand around at the end of 5 hikes."));

    if (achievements_bits.charAt(2) == '1') 
        $("#achievementsbox").append(makeTrophy("Impossible Badge", "It's literally impossible to get this. Why are you seeing this?."));
    
    if (achievements_bits.charAt(3) == '1') 
        $("#achievementsbox").append(makeTrophy("Hermit Badge", "Survive in the woods for 7 weeks."));

    if (achievements_bits.charAt(4) == '1') 
        $("#achievementsbox").append(makeTrophy("Sprinter Badge", "Complete 60 miles in 24 hours."));
}

$(document).ready(function() {
    $("#logoutbutton").click(function() {
        localStorage.clear();
        window.location.href="index.html";
   });
  
   $("#updatebutton").click(function(){
        window.location.href="update_profile.html";
    });
    
    var usrnm = localStorage.getItem('current_user');

    //making POST to get profile data
    $.post('/profile_load', {username: usrnm})
        .done(function(profile_data) {
            $("#username").text(`@${usrnm}`);
            $("#name").text(profile_data.NAME);
            $("#trails_completed").text(profile_data.TRAILS_COMPLETED);
            $("#distance_walked").text(profile_data.DISTANCE_WALKED);
            $("#elevation_gain").text(profile_data.ELEVATION_GAINED);

            addTrophies(profile_data.ACHIEVEMENTS);
        });

    //making POST to get profile's list of completed hikes
    $.post('/profile_hike_list', {username: usrnm})
        .done(function(data) {
            for (let hike of data) {
                $("#completedbox").append(addHike(hike));
            }
            $(".hikebox").hover(function() {
                $(this).find(".removehike").show();
            }, function() {
                $(this).find(".removehike").hide();
            });
        });
  });

/**called when user clicks trash can in hike box,
 * makes POST to remove the hike from completed list */
function trashRemoveHike(event) {
    $.post('user_remove_from_completed_hike', {
        username: localStorage.getItem('current_user'),
        hike_name: $(event).siblings(".hikeprofile").text(),
        distance: $(event).siblings("h4").find(".hikedistance").text(),
        elevation: $(event).siblings("h4").find(".hikeelevation").text() 
    }).done(function() {
        $(event).parent(".hikebox").hide();
    });
}

/*on clicking hike in completed list, go to that hike's page */
function mrClicky(event, hikeNameField) {
    //TODO: don't go to hike's page when clicking on trash can
    if (event.target !== event.currentTarget) {
        alert("clicked on trash can, not hike box");
        return;
    }

    localStorage.setItem('Name', hikeNameField);
    window.location.href="hike_page_template.html";
}