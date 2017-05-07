var assert = require("chai").assert;
var request = require("request");

describe("# http://www.qq.com", function () {
    it("打开qq主页", function (done) {
        request.get("http://www.qq.com", function (err, response, body) {
            assert.ok(response.statusCode, 200);
            done();
        });
    })
});