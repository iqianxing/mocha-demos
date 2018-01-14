# node.js起源
* node.js起源于javascript。
* javascript是一种最初设计在浏览器中运行的脚本语言，浏览器提供了javascript运行的环境。
* 随着技术的发展，javascript逐渐脱离浏览器，在服务器上独立运行。
* nodejs为服务器运行javascript提供了一种运行环境。
* 在各种浏览器的开发工具（F12）中，可以很方面的调试javascript。在console中可以输入下述javascript体验一下javascript。
> ```
> console.log("Hello, world!");
> ```

# node.js环境安装
1. 在[node.js官网](https://nodejs.org/en/)下载node.js安装包，进行安装。
2. 安装完毕后，检查node.js版本的命令如下：
> ```
> node --version
> ```
3. 上述命令会正确显示当前node.js的版本，如下所示：
> ```
> PS C:\Users\qianx> node --version
> v6.10.0
> PS C:\Users\qianx>
> ```

# node.js的helloworld程序
1. 新建一个helloworld.js的文件;
2. 打开文件，输入下述内容：
``` console.log("Hello, world!");```
3. 保存文件；
4. 输入```node helloworld.js```命令运行helloworld程序。
>```
>D:\mocha\nstarter\src>node helloworld.js
>Hello, World!
>```


# 参考资料
* [Node 入门](http://www.nodebeginner.org/index-zh-cn.html)
* [The NodeJS 中文文档](https://www.gitbook.com/book/0532/nodejs/details) （社区翻译）
* [七天学会NodeJS](http://nqdeng.github.io/7-days-nodejs/) 阿里出品，很好的入门资料
