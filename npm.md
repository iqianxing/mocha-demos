# npm介绍
NPM是随同NodeJS一起安装的包管理工具。

## npm -v
查看npm版本。
``` shell
PS D:\Projects\nstarter\examples\example-npm> npm -v
3.10.10
PS D:\Projects\nstarter\examples\example-npm>
```
* npm版本与node版本:
- 类似于maven区别与Java版本的区别。

## npm源配置
国内直接使用 npm 的官方镜像是非常慢的，可以通过下述命令使用淘宝 NPM 镜像。
```
npm config set registry https://registry.npm.taobao.org
```
或者使用cnpm
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## npm install
安装node.js项目的依赖包。  
项目依赖安装完毕便可进行开发、测试工作了。   
示例如下：
``` shell
PS D:\Projects\nstarter> cd .\examples\example-mocha
PS D:\Projects\nstarter\examples\example-mocha> git clone https://github.com/mochajs/mocha
Cloning into 'mocha'...
remote: Counting objects: 11346, done.
remote: Compressing objects: 100% (69/69), done.
remote: Total 11346 (delta 40), reused 0 (delta 0), pack-reused 11277
Receiving objects: 100% (11346/11346), 3.52 MiB | 43.00 KiB/s, done.
Resolving deltas: 100% (7019/7019), done.
Checking out files: 100% (250/250), done.
PS D:\Projects\nstarter\examples\example-mocha> cd .\mocha
PS D:\Projects\nstarter\examples\example-mocha\mocha> npm install
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated npmconf@0.0.24: this package has been reintegrated into npm and is now out of date with respect to npm

> phantomjs-prebuilt@2.1.14 install D:\Projects\nstarter\examples\example-mocha\mocha\node_modules\karma-phantomjs-launcher\node_modules\phantomjs-prebuilt
> node install.js

Considering PhantomJS found at D:\Programs\phantomjs-2.1.1\bin\phantomjs.EXE
Found PhantomJS at D:\Programs\phantomjs-2.1.1\bin\phantomjs.EXE ...verifying
Writing location.js file
PhantomJS is already installed on PATH at D:\Programs\phantomjs-2.1.1\bin\phantomjs.EXE

> wd@1.2.0 install D:\Projects\nstarter\examples\example-mocha\mocha\node_modules\wd
> node scripts/build-browser-scripts


> phantomjs@1.9.8 install D:\Projects\nstarter\examples\example-mocha\mocha\node_modules\phantomjs
> node install.js

PhantomJS detected, but wrong version 2.1.1 @ D:\Programs\phantomjs-2.1.1\bin\phantomjs.EXE.
Download already available at C:\Users\XIELIA~1\AppData\Local\Temp\phantomjs\phantomjs-1.9.7-windows.zip
Extracting zip contents
Copying extracted folder C:\Users\XIELIA~1\AppData\Local\Temp\phantomjs\phantomjs-1.9.7-windows.zip-extract-1494163516913\phantomjs-1.9.7-windows -> D:\Projects\nstarter\examples\example-moch
a\mocha\node_modules\phantomjs\lib\phantom
Writing location.js file
Done. Phantomjs binary available at D:\Projects\nstarter\examples\example-mocha\mocha\node_modules\phantomjs\lib\phantom\phantomjs.exe

> sauce-connect-launcher@1.2.2 postinstall D:\Projects\nstarter\examples\example-mocha\mocha\node_modules\sauce-connect-launcher
> node scripts/install.js || nodejs scripts/install.js

mocha@3.3.0 D:\Projects\nstarter\examples\example-mocha\mocha
+-- @coderbyheart/karma-sauce-launcher@0.0.0-development  extraneous (git://github.com/coderbyheart/karma-sauce-launcher.git#5259942cd6d40090eaa13ceeef5b0b8738c7710f)
+-- assert@1.4.1
| `-- util@0.10.3
|   `-- inherits@2.0.1
+-- browser-stdout@1.3.0
+-- browserify@13.3.0
| +-- browser-pack@6.0.2
| | +-- combine-source-map@0.7.2
| | | +-- inline-source-map@0.6.2
......
+-- browserify@14.3.0
| +-- buffer@5.0.6
| +-- https-browserify@1.0.0
| `-- string_decoder@0.10.31
`-- outpipe@1.1.1

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.1: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
```

## npm run <cmd>
1. npm run test表示使用npm run执行package.json文件中scripts属性中配置的test命令。
2. npm rum build表示使用npm run执行package.json文件中scripts属性中配置的build命令。
例如下面截取的是[mocha](https://github.com/mochajs/mocha)的package.json中的一段配置。
``` json
  "engines": {
    "node": ">= 0.10.x",
    "npm": ">= 1.4.x"
  },
  "scripts": {
    "test": "make test && make clean",
    "precoverage": "rm -rf coverage",
    "coverage": "COVERAGE=true npm run test",
    "postcoverage": "istanbul-combine -d coverage -r lcov -r html coverage/reports/*/*.json",
    "preversion": "make test && make mocha.js && git add mocha.js"
  },
  "dependencies": {
    "browser-stdout": "1.3.0",
    "commander": "2.9.0",
    "debug": "2.6.0",
    "diff": "3.2.0",
    "escape-string-regexp": "1.0.5",
    "glob": "7.1.1",
    "growl": "1.9.2",
    "json3": "3.3.2",
    "lodash.create": "3.1.1",
    "mkdirp": "0.5.1",
    "supports-color": "3.1.2"
  },
```

## npm init
创建一个node.js项目的package.json文件。
``` powershell
PS D:\Projects\nstarter> cd .\examples\example-npm
PS D:\Projects\nstarter\examples\example-npm> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (example-npm)
version: (1.0.0)
description: npm example
entry point: (index.js)
test command: mocha
git repository:
keywords: npm mocha node
author: hello
license: (ISC) mit
Sorry, license should be a valid SPDX license expression (without "LicenseRef"), "UNLICENSED", or "SEE LICENSE IN <filename>" and license is similar to the valid expression "MIT".
license: (ISC) MIT
About to write to D:\Projects\nstarter\examples\example-npm\package.json:

{
  "name": "example-npm",
  "version": "1.0.0",
  "description": "npm example",
  "main": "index.js",
  "scripts": {
    "test": "mocha"
  },
  "keywords": [
    "npm",
    "mocha",
    "node"
  ],
  "author": "hello",
  "license": "MIT"
}


Is this ok? (yes) yes
PS D:\Projects\nstarter\examples\example-npm>
```

创建好的package.json文件如下：
``` json
{
  "name": "example-npm",
  "version": "1.0.0",
  "description": "npm example",
  "main": "index.js",
  "scripts": {
    "test": "mocha"
  },
  "keywords": [
    "npm",
    "mocha",
    "node"
  ],
  "author": "hello",
  "license": "MIT"
}
```

## 参考资料
[npm 使用介绍](http://www.runoob.com/nodejs/nodejs-npm.html)

