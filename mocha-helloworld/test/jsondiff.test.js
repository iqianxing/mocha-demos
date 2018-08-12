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
    var newJson = JSON.parse('{"success":true,"hello":"wOrld","user":{"name":"test","age":10}}');
    assert.deepEqual(oldJson, newJson);
  });
})