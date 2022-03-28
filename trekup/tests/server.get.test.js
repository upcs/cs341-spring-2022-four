/* server.get.test
 * Brynn Harrington 
 * Date Modified: 23 Mar 2022
 *
 * Tests the operations associated with
 * GET functionality 
 * 
 * STATUS: PASSED (yay)
 * 
 * SOURCE: https: //www.npmjs.com/package/start-server-and-test-with-options  
 */
var request = require('supertest'); // use the super test for server testing
var app = require('../app'); // get the app

// timeout to prevent too long for a test running
// jest.setTimeout(5000);

// testing whether the response of getting valid 
describe('Test the root path', () => {
    // note: "it" just fancy for "test"
    it('GET method response - 200 expected for success', done => {
        // test the get method responds with success response 
        request(app).get('/').then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

// testing whether the response of getting valid 
describe('Test the profile posting path', () => {
    // note: "it" just fancy for "test"
    it('POST method response - 200 expected for success', done => {
        // test the get method responds with success response 
        request(app).post('/user_add').then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});