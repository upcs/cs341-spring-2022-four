/* recommend_hikes.test
 *
 * unit tests whether on some of the recommended hikes pulled
 */
var fs = require('fs');

test('test recommended hikes', () => {
    // read index file to string
    var html = fs.readFileSync('public/Index.html', 'utf8');
    expect(html).toEqual(expect.anything());
    document.body.innerHTML = html;

    const $ = require("jquery");
    if (document.readyState === 'complete') {
        expect($("#Hike1Name").html()).toBe("Hike 1");
        expect($("#Hike4Name").html()).toBe("Hike 4");

        expect($("#Hike1Metrics").html()).toBe("Elevation Change: 1000, Mileage: 27");
    }
});
