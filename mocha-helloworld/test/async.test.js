var fetch = require("node-fetch");
var request = require("request");
var assert = require("chai").assert;

describe("同步测试", function () {
  this.timeout(0);

  it("异步请求响应状态码为200", function () {
    fetch("http://www.qq.com")
      .then(function (res) {
        return res.status;
      })
      .then(function (status) {
        assert.equal(status, 200);
      })
  });
})

describe('异步测试', function () {
  it('异步请求响应状态码为200', function (done) {
    request
      .get('http://www.qq.com', function (err, response, body) {
        assert.equal(response.statusCode, 200);
        assert.ok(body);
        done();
      });
  });
});