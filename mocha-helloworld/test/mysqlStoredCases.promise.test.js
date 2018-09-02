var assert = require("chai").assert;
var Promise = require("bluebird");

module.exports = function (testcases) {
  describe("# 动态生成用例", function () {
    testcases.forEach(function (testcase) {
      describe(testcase.name, function () {
        it("同步用例", function () {
          assert.ok(1);
        });

        it("异步用例", function (done) {
          assert.ok(1);
          setTimeout(done, 200)
        });
      })
    });
  });
}


if (module.parent && /mocha\.js/.test(module.parent.id)) {
  var pmysql = require("promise-mysql");
  pmysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'test'
  }).then(function (connection) {
    var sql = "SELECT id,name FROM projects limit 10";
    var results = connection.query(sql)
    connection.end();
    return results;
  }).then(function (results) {
    module.exports(results);
    setTimeout(function () {}, 10)
  });

  describe("从数据库中读取数据", function () {
    it("读取用例", function () {
      assert.equal(1, 1)
    })
  })
}