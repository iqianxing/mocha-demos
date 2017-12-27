var request = require('request');
var assert = require('chai').assert;

// 从QQ浏览器中抓取的一个请求：
// https://recommend.browser.qq.com/feeds/getRecommendList?adtag=newtab&size=10&guid=0e5b2e73aabfedbbf2a21e83cb4bafb9&channel=98&page=1&qbShowDocList=[]&t=1514388731574
describe("#/feeds/getRecommendList", function () {
    //adtag=newtab&size=10&guid=0e5b2e73aabfedbbf2a21e83cb4bafb9&channel=98&page=1&qbShowDocList=[]&t=1514388731574
    var data = {
        "adtag": "newtab",
        "size": "10",
        "guid": "0e5b2e73aabfedbbf2a21e83cb4bafb9",
        "channel": "98",
        "page": "1",
        "qbShowDocList": [],
        "t": "1514388731574"
    };

    describe("字段非空检查", function () {
        Object.keys(data).forEach(function (field) {
            it(field, function (done) {
                var newData = JSON.parse(JSON.stringify(data));
                newData[field] = null;
                request.get("https://recommend.browser.qq.com/feeds/getRecommendList", {
                    qs: {},
                }, function (error, response, body) {
                    assert.equal(response.statusCode, 200);
                    done();
                });
            })
        });
    });

    describe("字段长度检查(假设每个字段参数长度不超过50个字符)", function () {
        Object.keys(data).forEach(function (field) {
            it(field, function (done) {
                var newData = JSON.parse(JSON.stringify(data));
                newData[field] = "长度超过50个字符的字符串：欢迎各位学习mocha，mocha真的很好用。This is just a test 0e5b2e73aabfedbbf2a21e83cb4bafb9：字段长度检查(假设每个字段参数长度不超过50个字符)";
                request.get("https://recommend.browser.qq.com/feeds/getRecommendList", {
                    qs: {},
                }, function (error, response, body) {
                    assert.notEqual(response.statusCode, 200);
                    done();
                });
            })
        });
    });

    describe("简单sql注入检查", function () {
        Object.keys(data).forEach(function (field) {
            it(field, function (done) {
                var newData = JSON.parse(JSON.stringify(data));
                newData[field] = "11' or 1=1 -- ";
                request.get("https://recommend.browser.qq.com/feeds/getRecommendList", {
                    qs: {},
                }, function (error, response, body) {
                    assert.equal(response.statusCode, 200);
                    done();
                });
            })
        });
    });

})