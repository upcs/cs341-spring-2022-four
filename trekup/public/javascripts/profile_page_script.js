/**
 * author: Logan Machida
 * updated by: Francisco Nguyen
 */

addStars = function (stars_num) {
    var star_elements = "";
    for (let i = 0; i < 5; i++) {
        star_elements += (i < stars_num) ? "<td><div class=\"rating user star\"></div></td>" : "<td><div class=\"rating user star blank\"></div></td>";
    }
    return star_elements;
}

addHike = function (hike) {
    return `
    <div id="hikebox">
      <img id="hikepic" src="https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/New-Hiking.jpg?itok=p0tfoXXi">
      <h3>${hike["hike_name"]}</h3>
      <table>
          <tr>
            ${addStars(hike["rating"])}
          </tr>
      </table>
      <h4>Di. ${hike["distance"]} mi. El. ${hike["elevation"]} ft.</h4>
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

$(document).ready(function(){
    // var usrnm = 'f.nguyen123';
    var usrnm = 'notjohnwalker';
    $.post('/profile_load', {username: usrnm})
        .done(function(data) {
            $("#username").text(`@${usrnm}`);
            $("#name").text(data["name"]);
            $("#trails_completed").text(data["trails_completed"]);
            $("#distance_walked").text(data["distance_walked"]);
            $("#elevation_gain").text(data["elevation_gain"]);

            addTrophies(data["achievements"]);
        });

    $.post('/profile_hike_list', {username: usrnm})
        .done(function(data) {
            for (let hike of data) {
                $("#completedbox").append(addHike(hike));
            }
        });

    $("#mastHead").click(function(){
      window.location.href="Index.html";
    });

    $("#profile").click(function(){
      window.location.href="login_page.html";
    });
  });
