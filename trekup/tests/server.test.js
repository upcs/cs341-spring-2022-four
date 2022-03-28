/* To test the server, the
 * start-server-and-test npm script 
 * is used in the package.json file.

SOURCE: https://www.npmjs.com/package/start-server-and-test-with-options  
*/
const request = require('supertest');
const app = require('../app');

// jest.setTimeout(100000);

describe('Test the root path', () => {
    test('It should response the GET method', done => {
        return request(app).get('/').then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});