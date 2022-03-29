var fs = require('fs');

test('test recommended hikes',()=>{
  //Read index file to string
    var html = fs.readFileSync('public/Index.html', 'utf8');
    expect(html).toEqual(expect.anything());

    document.body.innerHTML = html;
    const $ = require("jquery");
    // if(document.readyState === 'complete'){
      expect($("#Hike1Name").html()).toBe("Cool Hike");
      expect($("#Hike2Name").html()).toBe("Less Cool Hike");
      expect($("#Hike3Name").html()).toBe("The Hiker 3");
      expect($("#Hike4Name").html()).toBe("Lake Forest Hamburger");

      expect($("#Hike1Metrics").html()).toBe("Elevation Change: 200, Mileage: 7");
      expect($("#Hike2Metrics").html()).toBe("Elevation Change: 300, Mileage: 3");
      expect($("#Hike3Metrics").html()).toBe("Elevation Change: 100, Mileage: 7");
      expect($("#Hike4Metrics").html()).toBe("Elevation Change: 400, Mileage: 98");
    // }
});
