
var fs = require('fs');
//Test button clicks on each page. Make sure they
//take you to proper page.

var html = fs.readFileSync('public/Index.html', 'utf8');
// jest.mock('../javascripts/mrClicky');

test('remain on homepage after trekup click', () =>{
  global.window = { location: { pathname: null }};
  document.body.innerHTML = html;

  const $ = require('jquery');

  $('#mastHead').click();
  // expect(global.window.location.pathname).toEqual('/Index.html');
  // expect(window.location.href).toEqual('Index.html');
  // expect(window.location.href).toContain('Index.html');

  $('#profPic').click();
  expect(window.location.href).toContain('login_page.html'); 


  //BELOW: Should be in separate file.

  // const mrClicky = require('../javascripts/mrClicky');
  // $('#flip-card').click();
  // expect(global.window.location.href).toContain('/login_page.html');
  // expect(mrClicky).toBeCalled();
  // expect(global.window.location.pathname).toEqual('/hike_page_template.html');
});
