$(document).ready(function(){
    $.post('/profilePost', {value: 1})
      .done(function(data) {
        results = data[0];
        $("#name").text(results["name"]);
        $("#trails_completed").text("" + results["trails_completed"]);
        $("#distance_walked").text(results["distance_walked"]);
        $("#elevation_gain").text(results["elevation_gain"]);
      });

    $("#mastHead").click(function(){
      window.location.href="Index.html";
    });

    $("#profile").click(function(){
      window.location.href="login_page.html";
    });

    // $("#profilepic").on("click", function() {
    //   $.post('/profilePost', {value: 1});
    // });
  });
