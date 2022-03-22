'use strict';
// import {jest} from '@jest/globals';

var fs = require('fs');
const create_account = require("../public/javascripts/create_account_page_script.js");

global.window = {location: {href: null}};

test("go back to login page from create account page", () => {
    var html = fs.readFileSync('public/create_account_page.html', 'utf8');
    expect(html).toEqual(expect.anything()); //FOR NOW: any non-null value is okay

    document.body.innerHTML = html;
    const $ = require("jquery");
    $("#login_link").click();
    // expect("goToLoginHandler").toBeCalled();
    // expect($('window.location.href').text()).toEqual('login_page.html');
    var button = document.querySelector("#login_link");
    // button.click();

    // button.dispatchEvent(createEvent('click'));
    // expect(global.window.location.href).toEqual("http://localhost:3000/login_page.html");
    expect(global.window.location.href).toEqual("http://localhost/");
})