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

'use strict';
// var $ = require('jquery');
var fs = require('fs');
var f = require('../public/javascripts/login_page_script');
// read index file to string
var html = fs.readFileSync('public/Index.html', 'utf8');

// test getting username
it('test username', () => {
    document.body.innerHTML = '<div> \
    <input type="text" id="username"> </div>';
    document.getElementById('username').value = 'f.nguyen123';
    expect(f.getUsername()).toBe('f.nguyen123');
});

// test getting password
it('test password', () => {
    document.body.innerHTML = '<div> \
    <input type="text" id="password"> </div>';
    document.getElementById('password').value = 'b';
    expect(f.getPassword()).toBe('b');
});