/* account.test
 * Brynn Harrington 
 * Date Modified: 23 Mar 2022
 *
 * Tests the operations associated with
 * user functionality 
 * 
 * STATUS: PASSED (yay)
 * 
 * SOURCE: https: //www.npmjs.com/package/start-server-and-test-with-options  
 */
const supertest = require('supertest');
var request = require('supertest'); // use the super test for server testing
var app = require('../app'); // get the app
var server = supertest.agent("http://localhost:3000"); // server running

// timeout to prevent too long for a test running
jest.setTimeout(5000);

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