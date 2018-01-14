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
```
npm install (with no args, in package dir)
npm install [<@scope>/]<name>
npm install [<@scope>/]<name>@<tag>
npm install [<@scope>/]<name>@<version>
npm install [<@scope>/]<name>@<version range>
npm install <tarball file>
npm install <tarball url>
npm install <folder>

alias: npm i
common options: [-S|--save|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [-B|--save-bundle] [--dry-run]
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

