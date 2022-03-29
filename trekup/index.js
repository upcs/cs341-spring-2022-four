/* index.js
 * Brynn Harrington 
 * Date Modified: 28 Mar 2022
 *
 * Deployment package onto npm and API from clist API 
 * SOURCE: https://www.section.io/engineering-education/npm-packages/#deployment 
 * 
 */

// module.exports exports the function getContests as a promise and exposes it as a module.
// we can import an exported module by using require().
module.exports = async function getContests() {
    const axios = require("axios"); // Importing the Axios module to make API requests
    var result;

    const username = "harringt23"; // Insert Your Username here
    const api_key = "b9c9e3e0f9ba4a4914f15ea7482b0b2ad56f70cb"; //Insert API key here

    await axios // Making a GET request using axios and requesting information from the API
        .get(
            "https://clist.by/api/v1/json/contest/?username=" + username + "&api_key=" + api_key + "&limit=20&end__gt=2020-09-19T00%3A00%3A00"
        )
        .then((response) => { // If the GET request is successful, this block is executed
            return response; // The response of the API call is passed on to the next block
        })
        .then((contests) => { // In this block, we store the response data into a variable 'result'
            result = contests.data.objects;
        })
        .catch((err) => {
            console.log(err); // Error handler
        });
    return result; // The contest data is returned
}