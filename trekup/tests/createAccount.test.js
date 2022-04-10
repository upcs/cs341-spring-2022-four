/* createAccount.test
 * Brynn Harrington 
 * Date Modified: 30 Mar 2022
 *
 * Tests the operations associated with
 * creating an account functionality 
 * 
 * STATUS: PASSED
 * 
 */
var $ = require('jquery'); // import jquery 
var f = require('../public/javascripts/create_account_page_script'); // import create account js

// test getting email
it('test email', () => {
    document.body.innerHTML = '<div> \
    <input type="text" id="email"> </div>';
    document.getElementById('email').value = 'f.nguyen123@gmail.com';
    expect(f.getEmail()).toBe('f.nguyen123@gmail.com');
});
// test getting name
it('test name', () => {
    document.body.innerHTML = '<div> \
    <input type="text" id="name"> </div>';
    document.getElementById('name').value = 'Francisco Nguyen';
    expect(f.getName()).toBe('Francisco Nguyen');
});

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

// test getting confirm password
it('test confirm password', () => {
    document.body.innerHTML = '<div> \
    <input type="text" id="confirm_password"> </div>';
    document.getElementById('confirm_password').value = 'b';
    expect(f.getConfirmPassword()).toBe('b');
});