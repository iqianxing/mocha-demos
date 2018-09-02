var assert = require("chai").assert;
var mysql = require("mysql");
var request = require("request");

module.exports = function (testcases) {
  describe("# 动态生成用例", function () {
    testcases.forEach(function (testcase) {
      describe(testcase.name, function () {
        it("同步用例", function () {
          assert.ok(1);
        });

        it("检测页面是否存活", function (done) {
          if (!testcase.homepage) {
            this.skip();
          }
          request.get(testcase.homepage, function (error, response, body) {
            assert.equal(response.statusCode, 200);
            done();
          })
        });

        it("检查mysql数据库中数据", function (done) {
          var connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'test'
          });
          connection.connect();
          var sql = "SELECT * FROM projects where id=?";
          connection.query(sql, testcase.id, function (error, results, fields) {
            console.log(JSON.stringify(results));
            connection.end();
            done();
          });
        });

        it("等待200ms", function (done) {
          setTimeout(done, 200);
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

  var sql = "SELECT * FROM projects";
  connection.query(sql, function (error, results, fields) {
    module.exports(results);
    setTimeout(function () {}, 10)
  });
  setInterval(function () {
    connection.query(sql, function (error, results, fields) {
      module.exports(results);
      setTimeout(function () {}, 10)
    });
  }, 100)

  describe("从数据库中读取数据", function () {
    it("读取用例", function () {
      assert.equal(1, 1)
    })
  })
}