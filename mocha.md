# mocha简介
Mocha（发音"摩卡"）诞生于2011年，是现在最流行的JavaScript测试框架之一，在浏览器和Node环境都可以使用。    
*[mocha官网](http://mochajs.org/)  
*[测试框架 Mocha 实例教程](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)

## 安装
```
npm install --global mocha
```

## 使用mocha运行测试用例
在npm介绍中，使用git克隆了mocha项目，运行mocha的测试命令如下：
```
PS D:\Projects\nstarter> cd .\examples\example-mocha
PS D:\Projects\nstarter\examples\example-mocha> cd .\mocha
PS D:\Projects\nstarter\examples\example-mocha\mocha> mocha


  √ should work
  Mocha
    1) should not output colors to pipe

  Mocha
    "grep" option
      √ should add a RegExp to the mocha.options object
      √ should convert string to a RegExp
    "fgrep" option
      √ should escape and convert string to a RegExp
    .grep()
      √ should add a RegExp to the mocha.options object
      √ should convert grep string to a RegExp
      √ should covert grep regex-like string to a RegExp
      √ should return it's parent Mocha object for chainability
    "invert" option
      √ should add a Boolean to the mocha.options object

  async
    hooks
      √ one
      √ two
      √ three
    .isPromise
      √ should return true if the value is Promise-ish
      √ should return false if the value is not an object
      √ should return false if the value is an object w/o a "then" function


  177 passing (4s)
  6 pending
  1 failing

  1) Mocha should not output colors to pipe:
     Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.




PS D:\Projects\nstarter\examples\example-mocha\mocha>

```

## 自己动手
1. 初始化项目
```
S D:\Projects\nstarter> cd .\examples\example-mocha-helloworld
PS D:\Projects\nstarter\examples\example-mocha-helloworld> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (example-mocha-helloworld) mocha-helloworld
version: (1.0.0)
description: mocha helloworld
entry point: (index.js)
test command: mocha
git repository:
keywords: mocha
author: helloworld
license: (ISC) MIT
About to write to D:\Projects\nstarter\examples\example-mocha-helloworld\package.json:

{
  "name": "mocha-helloworld",
  "version": "1.0.0",
  "description": "mocha helloworld",
  "main": "index.js",
  "scripts": {
    "test": "mocha"
  },
  "keywords": [
    "mocha"
  ],
  "author": "helloworld",
  "license": "MIT"
}


Is this ok? (yes) YES
PS D:\Projects\nstarter\examples\example-mocha-helloworld>
```

2. 安装依赖库chai、request
```
PS D:\Projects\nstarter\examples\example-mocha-helloworld> npm install chai --save
mocha-helloworld@1.0.0 D:\Projects\nstarter\examples\example-mocha-helloworld
`-- chai@3.5.0
  +-- assertion-error@1.0.2
  +-- deep-eql@0.1.3
  | `-- type-detect@0.1.1
  `-- type-detect@1.0.0

npm WARN mocha-helloworld@1.0.0 No repository field.
PS D:\Projects\nstarter\examples\example-mocha-helloworld> npm install request --save
mocha-helloworld@1.0.0 D:\Projects\nstarter\examples\example-mocha-helloworld
`-- request@2.81.0
  +-- aws-sign2@0.6.0
  +-- aws4@1.6.0
  +-- caseless@0.12.0
......

npm WARN mocha-helloworld@1.0.0 No repository field.
PS D:\Projects\nstarter\examples\example-mocha-helloworld>
```
3. 创建test目录
```
mkdir test
```
4. helloworld(同步)
``` js
var assert = require("chai").assert;

describe("# Hello, world!", function () {
    it("1+1=2",function(){
        assert.equal(1+1,2);
    })
});
```
运行hello测试用例：
```
PS D:\Projects\nstarter\examples\example-mocha-helloworld> mocha


  # Hello, world!
    √ 1+1=2


  1 passing (18ms)
```
或者指定测试用例文件名称
```
PS D:\Projects\nstarter\examples\example-mocha-helloworld> mocha .\test\helloworld.spec.js


  # Hello, world!
    √ 1+1=2


  1 passing (14ms)
```
5. 异步测试
``` js
var assert = require("chai").assert;
var request = require("request");

describe("# http://www.qq.com", function () {
    it("打开qq主页", function (done) {
        request.get("http://www.qq.com", function (err, response, body) {
            assert.ok(response.statusCode, 200);
            done();
        });
    })
});
```
运行测试：
```
PS D:\Projects\nstarter\examples\example-mocha-helloworld> mocha .\test\qq.spec.js


  # http://www.qq.com
    √ 打开qq主页 (660ms)


  1 passing (672ms)
```


##  钩子函数  
钩子函数示例
``` js
describe('hooks', function() {

  before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases
});
```

