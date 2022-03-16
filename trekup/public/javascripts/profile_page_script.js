/**
 * author: Logan Machida
 * updated by: Francisco Nguyen
 * 
 */

addStars = function (stars_num) {
    var star_elements = "";
    for (let filled = 0; filled < stars_num; filled++) {
        star_elements += "<td><div class=\"rating user star\"></div></td>";
    }
    for (let empty = 0; empty < 5 - stars_num; empty++) {
        star_elements += "<td><div class=\"rating user star blank\"></div></td>";
    }
    return star_elements;
}

addHike = function (hike) {
    return `
    <div id="hikebox">
      <img id="hikepic" src="https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/New-Hiking.jpg?itok=p0tfoXXi">
      <h3>` + hike["hike_name"] + `</h3>
      <table>
          <tr>` + addStars(hike["rating"]) +
          `</tr>
      </table>
      <h4>Di. ` + hike["distance"] + ` mi. El. ` + hike["elevation"] + ` ft.</h4>
    </div>
  `;
}

addTrophies = function (achievements_bits) {
    var image = "http://clipart-library.com/image_gallery/206586.png";
    if (achievements_bits.charAt(0) == '1') {
        $("#achievements").append("<img id=\"trophy\" src=" + image + ">",
        "<h3 style=\"margin-left: 20px;\"> <i>Pat on the Back Badge</i> </h3>",
        "<h5 style=\"margin-left: 20px;\">Congrats! You left your couch you potatoe.</h5>");
    }

    if (achievements_bits.charAt(1) == '1') {
        $("#achievements").append("<img id=\"trophy\" src=" + image + ">",
        "<h3 style=\"margin-left: 20px;\"> <i>Lurker Badge</i> </h3>",
        "<h5 style=\"margin-left: 20px;\">Spot 25 people from at least 500m away.</h5>");
    }

    if (achievements_bits.charAt(2) == '1') {
        $("#achievements").append("<img id=\"trophy\" src=" + image + ">",
        "<h3 style=\"margin-left: 20px;\"> <i>Impossible Badge</i> </h3>",
        "<h5 style=\"margin-left: 20px;\">It's literally impossible to get this. Why are you seeing this?</h5>");
    }

    if (achievements_bits.charAt(3) == '1') {
        $("#achievements").append("<img id=\"trophy\" src=" + image + ">",
        "<h3 style=\"margin-left: 20px;\"> <i>Hermit Badge</i> </h3>",
        "<h5 style=\"margin-left: 20px;\">Live in the woods for 7 weeks.</h5>");
    }

    if (achievements_bits.charAt(4) == '1') {
        $("#achievements").append("<img id=\"trophy\" src=" + image + ">",
        "<h3 style=\"margin-left: 20px;\"> <i>Sprinter Badge</i> </h3>",
        "<h5 style=\"margin-left: 20px;\">Complete 60 miles in 24 hours.</h5>");
    }
}

$(document).ready(function(){
    var usrnm = 'frann';
    $.post('/profilePost', {username: usrnm})
        .done(function(data) {
            $("#username").text("@" + usrnm);
            $("#name").text(data["name"]);
            $("#trails_completed").text("" + data["trails_completed"]);
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
