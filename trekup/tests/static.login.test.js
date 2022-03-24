/* static.login.test
 * Brynn Harrington 
 * Date Modified: 23 Mar 2022
 *
 * Tests the operations associated with
 * user functionality 
 * STATUS: ?
 * 
 */

/* GLOBAL VARIABLES */
// require file system, query, and javascript
var $ = require('jquery');
// var $ = require('jquery');
var js = require('../public/javascripts/profile_page_script');
/* BUTTON FUNCTIONALITY TESTS */
test('login button test', () => {
    // find the username in the HTML document
    document.body.innerHTML = '<div> \
    <input type="text" id="email"> </div>';

    // get the value of the username
    document.getElementById('email').value = 'f.nguyen123'

    // verify correct username
    // expect(js.)
    // wait until the function is fully set up
});


/* USERNAME TEST */
test('get user', () => {
    // find the username in the HTML document
    document.body.innerHTML = '<div> \
    <input type="text" id="email"> </div>';

    // get the value of the username
    document.getElementById('email').value = 'f.nguyen123'

    // verify correct username
    // expect(js.)
    // wait until the function is fully set up
});

/* PASSWORD TEST */

// var $ = require('jquery');
// var f = require('../public/javascripts/login');
// test('getting username input', () => {
// document.body.innerHTML = '<div> \
//     <input type="text" id="loginUsername"> </div>';
//     document.getElementById('loginUsername').value = 'doej21';
//     expect(f.getUsername()).toBe('doej21');
// });

// test('getting username input', () => {
//     document.body.innerHTML = '<div> \
//     <input type="text" id="loginPassword"> </div>';
//     document.getElementById('loginPassword').value = 'password';
//     expect(f.getPassword()).toBe('password');
// });