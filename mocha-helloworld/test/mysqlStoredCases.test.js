var assert = require("chai").assert;
var mysql = require("mysql");
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
  var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'test'
  });
  connection.connect();
  var sql = "SELECT * FROM projects limit 10";
  connection.query(sql, function (error, results, fields) {
    connection.end();

    module.exports(results);
    setTimeout(function () {}, 10)
  });

  describe("从数据库中读取数据", function () {
    it("读取用例", function () {
      assert.equal(1, 1)
    })
  })
}