/* account.test
 * Brynn Harrington 
 * Date Modified: 23 Mar 2022
 *
 * Tests the operations associated with
 * user functionality 
 * STATUS: ?
 * 
 */

/* GLOBAL VARIABLES */
// import the local storage
// import { LocalStorage } from '../src/localstorage';

// require file system, query, and javascript
var $ = require('jquery');
var js = require('../public/javascripts/profile_page_script');

test('account information: username', () => {
    document.body.innerHTML = '<div> \
    <input type="text" id="email"> </div>';
    document.getElementById('email').value = 'bob';
    expect(f.getUsername()).toBe('bob');
});



// // /* BUTTON FUNCTIONALITY TESTS */
// // test('login button test', () => {
// //     // find the username in the HTML document
// //     document.body.innerHTML = '<div> \
// //     <input type="text" id="email"> </div>';

// //     // get the value of the username
// //     document.getElementById('email').value = 'f.nguyen123'

// //     // verify correct username
// //     // expect(js.)
// //     // wait until the function is fully set up
// // });


// /* USERNAME TEST */
// //https://bholmes.dev/blog/mocking-browser-apis-fetch-localstorage-dates-the-easy-way-with-jest/
// // create a mock login for tests to use
// let mockLogin = {}

// // get the values from the global storage object
// beforeAll(() => {
//     global.Storage.prototype.setItem = jest.fn((key, value) => {
//         mockLogin[key] = value
//     })
//     global.Storage.prototype.getItem = jest.fn((key) => mockLogin[key])
// });

// // reset the login values before each test
// beforeEach(() => {
//     mockLogin = {}
// });

// // return our mocks to their original values
// // THIS IS VERY IMPORTANT to avoid polluting future tests!
// afterAll(() => {
//     global.Storage.prototype.setItem.mockReset()
//     global.Storage.prototype.getItem.mockReset()
// });

// // 
// test('puts the username into storage', () => {
//     loginHandler('username')
//     expect(global.Storage.prototype.setItem).toHaveBeenCalledOnce()
//     expect(mockStorage['bob']).toEqual('username')
// });


// test('a', () => {
//     // make a mock storage object to check if username stored
//     let mockStorage
//     const setInStorage = jest.fn((value) => { mockStorage = value })

//     saveForLater('chili', { getFromStorage, setInStorage })
//     expect(setInStorage).toHaveBeenCalledOnce()
//     expect(mockLogin).toEqual('chili')
// })


// test('get user', () => {
//     // find the username in the HTML document
//     document.body.innerHTML = '<div> \
//     <input type="text" id="email"> </div>';
//     // get the value of the username
//     document.getElementById('email').value = 'f.nguyen123'
// verify correct username
// expect(js.get)
// wait until the function is fully set up
// });

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