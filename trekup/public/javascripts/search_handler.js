/* search_handler.js
 * Brynn Harrington 
 * Date Modified: 23 Feb 2022
 *
 * Handles when the search button and
 * its respective filters when it is pressed
 * 
 */

/* validate_trail_name
 * checks if the search name was empty 
 */
validate_trail_name = function() {
    // get the name of the hike being searched for
    var trail_name = document.getElementById("trail_name").ariaValueMax;

    // verify they searched something 
    if (trail_name == "") {
        alert("Please enter a trail name or select a filter.")
    }
}

search_filter_handler = function(e) {
    // prevent default behavior of refreshing website
    e.preventDefault();

    /* get the attributes of the hike being searched for */
    // trail name
    var trail_name = $("trail_name").val();
    // difficulty 
    // var diff = $("#difficultyDrop").children(".current")[0];
    var diff = $("input[name='");

    // verify they searched something 
    if (trail_name == "diff") {
        alert("Please enter a trail name or select a filter.")
    }

    // extract each value of the filter if any

}