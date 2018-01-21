var assert = require('chai').assert;
var request = require('request');

describe("批量检查接口返回状态是否为200", function () {
    this.timeout(0);
    var testcases = [{
            qq: "https://xw.qq.com/index.htm",
        },
        {
            qq: "http://kuaibao.qq.com/mobile.htm",
        },
        {
            jd: "http://m.jd.com/",
        },
        {
            baidu: "https://www.baidu.com"
        }
    ];
    testcases.forEach(function (testcase) {
        it("检查是否包括属性名为qq的属性", function () {
            assert.ok(testcase.qq);
        });
        
        testcase.qq && it(testcase.qq, function (done) {
            request(testcase.qq, function (err, res, body) {
                assert.equal(res.statusCode, 200);
                done();
            })
        });
    })
});