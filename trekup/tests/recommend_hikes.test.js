var fs = require('fs');

// jest.setTimeout(80000);

const $ = require("jquery");

// beforeEach(() => {
//     $.post("/popRecHikes",{name: "'Tim'", noFilter: 1},function(data, status){
//       displayHikePostInfo(data, status, 4);
//     });
// });

// test('test recommended hikes', async () =>{
test('test recommended hikes', done =>{
  //Read index file to string
  var html = fs.readFileSync('public/Index.html', 'utf8');
  expect(html).toEqual(expect.anything());

  document.body.innerHTML = html;
  // function callback(data){

    // await $.post("/popRecHikes",{name: "'Tim'", noFilter: 1},function(data, status){
      // displayHikePostInfo(data, status, 4);
    // });

    try{
      // const toTestName = await $("#Hike1Name").text();
      // expect(toTestName).toBe("4T Loop Hike");
      expect($("#Hike1Name").html()).toBe("4T Loop Hike");

      expect($("#Hike1Metrics").html()).toBe("Elevation Change: 775, Mileage: 4.4, Difficulty: Easy");

      done();
    }catch (error){
      done(error);
    }

  // }

});
