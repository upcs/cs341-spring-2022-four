/* login.expected.test
 * Brynn Harrington 
 * Date Modified: 22 Feb 2022
 *
 * This unit test verifies the post is sending
 * the correct information.
 * 
 * STATUS: FAILED
 * 
 * Used: https://jestjs.io/docs/mock-functions 
 * Used: https://sammeechward.com/testing-an-express-app-with-supertest-and-jest/ 
 */
// test whether the parameters are correct
const { response } = require('express');
var fs = require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const request = require("supertest"); // require the supertest for post requests
const app = require("../app");

// begin the test block for verifying the file is read
test('test filterPost exists', () => {
    // read the orders.js file into a string
    var filterPost = fs.readFileSync('routes/filterPost.js', 'utf8');
    // make sure there is a file there
    expect(filterPost).toEqual(expect.anything());
});


/***********
 * ERROR - cannot find the post function in the filter post file
 **************/
// begin the test block for verifying info was passed
test('POST ../routes/filterPost', async(done) => {
    // test the dummy data array passed in
    const dummyHikes = {
        "data": [
            { "hike1": { name: "hike 1", distance: "5 miles", elevation: 1000, difficulty: "easy" } },
            { "hike2": { name: "hike 2", distance: "20 miles", elevation: 3000, difficulty: "hard" } },
            { "hike3": { name: "hike 3", distance: "8 miles", elevation: 1200, difficulty: "moderate" } }
        ]
    };
    // // read the filterPost.js file into a string
    var filterPost = fs.readFileSync('routes/filterPost.js', 'utf8');
    // // make sure there is a file there
    expect(filterPost).toBe(dummyHikes);

    // test if sent
    let response = await request(app)
        // request the javascript
        .post('../routes/filterPost')
        // send the javascript the dummy hikes
        .send(dummyHikes);

    // verify the status
    expect(response["status"] == 200 || response["status"] == 409).toEqual(true);

    // exit async
    return done();
});