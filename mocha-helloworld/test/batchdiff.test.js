var assert = require('chai').assert;
var request = require('request');

describe("Node.js版本批量接口diff", function () {
  this.timeout(0);
  [
    // diff apis
    {
      "oldapi": "https://easy-mock.com/mock/5b6b06f9a40bfb27425bbb6a/jsondiff/v1/demo",
      "newapi": "https://easy-mock.com/mock/5b6b06f9a40bfb27425bbb6a/jsondiff/v2/demo"
    },
    {
      "oldapi": "https://easy-mock.com/mock/5b6b06f9a40bfb27425bbb6a/jsondiff/v1/hello",
      "newapi": "https://easy-mock.com/mock/5b6b06f9a40bfb27425bbb6a/jsondiff/v2/hello"
    },
    {
      "oldapi": "https://easy-mock.com/mock/5b6b06f9a40bfb27425bbb6a/jsondiff/v1/user",
      "newapi": "https://easy-mock.com/mock/5b6b06f9a40bfb27425bbb6a/jsondiff/v2/user"
    },
    {
      "oldapi": "https://easy-mock.com/mock/5b6b06f9a40bfb27425bbb6a/jsondiff/v1/1/list",
      "newapi": "https://easy-mock.com/mock/5b6b06f9a40bfb27425bbb6a/jsondiff/v2/1/list"
    },
    {
      "oldapi": "https://easy-mock.com/mock/5b6b06f9a40bfb27425bbb6a/jsondiff/v1/2/list",
      "newapi": "https://easy-mock.com/mock/5b6b06f9a40bfb27425bbb6a/jsondiff/v2/2/list"
    },
    {
      "oldapi": "https://easy-mock.com/mock/5b6b06f9a40bfb27425bbb6a/jsondiff/v1/3/list",
      "newapi": "https://easy-mock.com/mock/5b6b06f9a40bfb27425bbb6a/jsondiff/v2/3/list"
    },
  ].forEach(function (kv) {
    it(kv.newapi + " vs " + kv.oldapi, function (done) {
      request.get(kv.newapi, {
          json: true
        },
        function (err, res, body) {
          request.get(kv.oldapi, {
              json: true
            },
            function (oldapiError, oldapiRes, oldapiBody) {
              assert.deepEqual(body, oldapiBody);
              done();
            }
          );
        }
      );
    });
  });
});