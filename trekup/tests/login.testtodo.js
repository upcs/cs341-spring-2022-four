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