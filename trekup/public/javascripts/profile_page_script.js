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

$(document).ready(function(){
    var usrnm = 'frann';
    $.post('/profilePost', {username: usrnm})
        .done(function(data) {
            $("#name").text(data["name"]);
            $("#trails_completed").text("" + data["trails_completed"]);
            $("#distance_walked").text(data["distance_walked"]);
            $("#elevation_gain").text(data["elevation_gain"]);
        });

      $.post('/profile_hike_list', {username: usrnm})
        .done(function(data) {
            for (let hike of data) {
                $("#hikes_completed_title").append(addHike(hike));
            }
        });

    $("#mastHead").click(function(){
      window.location.href="Index.html";
    });

    $("#profile").click(function(){
      window.location.href="login_page.html";
    });
  });
