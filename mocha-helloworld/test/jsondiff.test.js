var assert = require("chai").assert;

describe("JSON对比测试", function () {
  it("Key顺序相同+Value相同", function () {
    var oldJson = JSON.parse('{"hello":"world","success":true}');
    var newJson = JSON.parse('{"hello":"world","success":true}');
    assert.deepEqual(oldJson, newJson);
  });

  it("Key顺序不同+Value相同", function () {
    var oldJson = JSON.parse('{"hello":"world","success":true}');
    var newJson = JSON.parse('{"success":true,"hello":"world"}');
    assert.deepEqual(oldJson, newJson);
  });

  it("Key顺序不同+Value不同", function () {
    var oldJson = JSON.parse('{"hello":"world","success":true}');
    var newJson = JSON.parse('{"success":true,"hello":"wOrld"}');
    assert.deepEqual(oldJson, newJson);
  });
  
  it("JSON嵌套：Key顺序不同+Value不同", function () {
    var oldJson = JSON.parse('{"user":{"name":"devops","age":10},"hello":"world","success":true}');
    var newJson = JSON.parse('{"success":true,"hello":"world","user":{"name":"test","age":10}}');
    assert.deepEqual(oldJson, newJson);
  });

  it("中文字符", function () {
    var oldJson = JSON.parse('{"hello":"你好","success":true}');
    var newJson = JSON.parse('{"success":true,"hello":"你好吗"}');
    assert.deepEqual(oldJson, newJson);
  });

  it("日期", function () {
    var oldJson = JSON.parse('{"hello":"你好","success":true,"birthDay":"1995-06-15 10:05:00"}');
    var newJson = JSON.parse('{"success":true,"hello":"你好","birthDay":"1995-06-15 20:05:00"}');
    assert.deepEqual(oldJson, newJson);
  });
})