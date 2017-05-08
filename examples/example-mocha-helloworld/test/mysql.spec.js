var assert = require("chai").assert;
var mysql = require("mysql");

describe("# mysql测试", function () {
    it("查询", function (done) {
        var connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '123456',
            database: 'helloworld'
        });
        connection.connect();
        var sql = "SELECT * FROM account_0000 limit 10";
        connection.query(sql, function (error, results, fields) {
            console.log(JSON.stringify(results));
            done();
        });

        connection.end();
    });
});