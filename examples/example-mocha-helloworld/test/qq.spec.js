var assert = require("chai").assert;
var request = require("request");

describe("# https://www.github.com", function () {
    it("github", function (done) {
        request.get("https://www.github.com", function (err, response, body) {
            assert.equal(response.statusCode, 200);
            assert.ok(body);
            done();
        });
    })
});