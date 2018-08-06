var assert = require("chai").assert;

describe("json diff", function () {
  it("json相同", function () {
    var oldJson = JSON.parse('{"title":"com.tencent.news","fullTitle":"Androbugs report com.tencent.news","timedOut":false,"duration":0,"state":"passed","speed":"fast","pass":true,"fail":false,"pending":false}')
    var newJson = JSON.parse('{"title":"com.tencent.news","fullTitle":"Androbugs report com.tencent.news","timedOut":false,"duration":0,"state":"passed","speed":"fast","pass":true,"fail":false,"pending":false}')
    assert.deepEqual(oldJson, newJson)
  })

  it("json不同", function () {
    var oldJson = JSON.parse('{"title":"com.tencent.news","fullTitle":"Androbugs report com.tencent.news","timedOut":false,"duration":0,"state":"passed","speed":"fast","pass":true,"fail":false,"pending":false}')
    var newJson = JSON.parse('{"title":"com.tencent.news2","fullTitle":"Androbugs report com.tencent.news","timedOut":false,"duration":0,"state":"passed","speed":"fast","pass":true,"fail":false,"pending":false}')
    assert.deepEqual(oldJson, newJson)
  })
})