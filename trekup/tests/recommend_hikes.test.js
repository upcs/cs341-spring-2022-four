var fs = require('fs');

test('test recommended hikes',()=>{
  //Read index file to string
    var html = fs.readFileSync('public/Index.html', 'utf8');
    expect(html).toEqual(expect.anything());

    document.body.innerHTML = html;
    const $ = require("jquery");
    expect($("#Hike1Name").html()).toBe("Hike 1");
});
