var fs = require('fs');

test('test recommended hikes',()=>{
  //Read index file to string
    var html = fs.readFileSync('public/Index.html', 'utf8');
    expect(html).toEqual(expect.anything());

    document.body.innerHTML = html;
    const $ = require("jquery");
    $(document).ready(function(){

      expect($("#Hike1Name").html()).toBe("Cool Hike");
      expect($("#Hike2Name").html()).toBe("Less Cool Hike");
      expect($("#Hike3Name").html()).toBe("The Hiker 3");
      expect($("#Hike4Name").html()).toBe("Lake Forest Hamburger");
    });
});
