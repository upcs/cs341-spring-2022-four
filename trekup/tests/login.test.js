/* login.test
 * Brynn Harrington 
 * Date Modified: 22 Feb 2022
 *
 * This unit test verifies the correct 
 * functionality of the users route 
 * 
 * STATUS: ?
 * 
 * Used: https://dev.to/franciscomendes10866/testing-express-api-with-jest-and-supertest-3gf
 * Used: https://www.npmjs.com/package/supertest 
 * https://www.youtube.com/watch?v=FKnzS_icp20
 */

// use super test to bound the port without needing the exact port number
import supertest from 'supertest'
// imooprt the server object from the app
import app from './app.js'
// test if the post sends to users