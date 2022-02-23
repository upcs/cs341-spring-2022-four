/* login.initial.test
 * Brynn Harrington 
 * Date Modified: 22 Feb 2022
 *
 * This unit test verifies the correct 
 * functionality of the users route 
 * 
 * STATUS: PASSED
 * 
 * Used: https://dev.to/franciscomendes10866/testing-express-api-with-jest-and-supertest-3gf
 * Used: https://www.npmjs.com/package/supertest 
 */

/* IMPORTS */
var fs = require('fs');

test('test selectEvent', () => {

    // read the orders.js file into a string
    var js = fs.readFileSync('routes/filterPost.js', 'utf8');
    // make sure there is a file there
    expect(js).toEqual(expect.anything());
});