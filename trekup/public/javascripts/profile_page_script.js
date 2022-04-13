/**
 * author: Logan Machida
 * updated by: Francisco Nguyen
 */

 addHike = function (hike) {
    return `
    <div id="hikebox", onClick='mrClicky("${hike.HIKE_NAME}")'>
      <img id="hikepic" src="https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/New-Hiking.jpg?itok=p0tfoXXi">
      <h3 class="hikeprofile">${hike.HIKE_NAME}</h3>
      <h4>Di. ${hike.DISTANCE} mi. El. ${hike.ELEVATION_CHANGE} ft.</h4>
    </div>
  `;
}

makeTrophy = function (trophyName, desc) {
    return `
    <div id = trophybox>
        <h3 style="margin-left: 10px; margin-right:10px"><i>${trophyName}</i> </h3>
        <h5 style="margin-left: 10px; margin-right:10px">${desc}</h5>
        <img id="trophy" src="./images/trophy.png">
    </div>`;
}


$(document).ready(function() { 
    $("#logoutbutton").click(function() {
        sessionStorage.clear();
        window.location.href="index.html";
   });
  
   $("#updatebutton").click(function(){
        window.location.href="update_profile.html";
    });
    
    var usrnm = sessionStorage.getItem('current_user');

    //making POST to get profile data
    $.post('/profile_load', {username: usrnm})
        .done(function(profile_data) {
            $("#username").text(`@${usrnm}`);
            $("#name").text(profile_data.NAME);
            $("#trails_completed").text(profile_data.TRAILS_COMPLETED);
            $("#distance_walked").text(profile_data.DISTANCE_WALKED);
            $("#elevation_gain").text(profile_data.ELEVATION_GAINED);
            
            //$("#achievements").text(profile_data.ACHIEVEMENTS); // may not work

            addTrophies(profile_data.ACHIEVEMENTS);


        });

    //making POST to get profile's list of completed hikes
    $.post('/profile_hike_list', {username: usrnm})
        .done(function(data) {
            for (let hike of data) {
                $("#completedbox").append(addHike(hike));
            }
        });
    
    $("#hikebox").hover(function() {
        $(this).prepend('<div class="removehike"></div>');
    }, function() {
        $(this).find("div").first().remove();
    });



    

  });

  /*on clicking hike in completed list, go to that hike's page */
function mrClicky(hikeNameField) {
    localStorage.setItem('Name', hikeNameField);
    window.location.href="hike_page_template.html";
}



  

function addTrophies(achievements_bits) {
    console.log(achievements_bits.charAt(0));
   // trails completed badges
    if (achievements_bits.charAt(0) == '1')
        $("#achievementsbox").append(makeTrophy("Discoverer Badge", "You completed 1 hike."));

    if (achievements_bits.charAt(1) == '1') 
        $("#achievementsbox").append(makeTrophy("Explorer Badge", "You completed 5 hikes."));

    if (achievements_bits.charAt(2) == '1') 
        $("#achievementsbox").append(makeTrophy("Adventurer Badge", "You completed 10 hikes."));

    // distance walked badges
    if (achievements_bits.charAt(3) == '1') 
        $("#achievementsbox").append(makeTrophy("Pioneer Badge", "You walked 1000 miles."));

    if (achievements_bits.charAt(4) == '1') 
        $("#achievementsbox").append(makeTrophy("Cross Country Badge", "You walked 2000 miles."));

    if (achievements_bits.charAt(5) == '1') 
        $("#achievementsbox").append(makeTrophy("Tourer Badge", "You walked 2000 miles."));

    // elevation gained badges
    if (achievements_bits.charAt(6) == '1') 
        $("#achievementsbox").append(makeTrophy("Ascending Badge", "You climbed 1000 ft."));

    if (achievements_bits.charAt(7) == '1') 
        $("#achievementsbox").append(makeTrophy("Scaling Badge", "You climbed 2000 ft."));
        
    if (achievements_bits.charAt(8) == '1') 
        $("#achievementsbox").append(makeTrophy("Heaven Badge", "You climbed 3000 ft."));
}
