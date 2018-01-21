var assert = require('chai').assert;
var request =require('request');

describe("批量检查接口返回状态是否为200", function () {
    this.timeout(0);
    [
        "https://xw.qq.com/",
        "https://mat1.gtimg.com/www/mobi/2017/image/logo-text-white.svg",
        "https://mat1.gtimg.com/www/mobi/2017/image/elevator_icons_v0.svg",
        "https://mat1.gtimg.com/www/mobi/2017/image/image-placeholder-logo.svg",
        "https://mat1.gtimg.com/www/mobi/2017/image/addnav1.png",
        "https://mat1.gtimg.com/libs/t/finalboss-lite/0.1.4/finalboss-lite.min.js",
        "https://mat1.gtimg.com/www/mobi/2017/image/weather/00.svg",
        "https://mat1.gtimg.com/www/mobi/2017/image/location_black.svg",
        "https://mat1.gtimg.com/www/mobi/2017/image/arrow-right-fff.svg",
        "https://inews.gtimg.com/newsapp_ls/0/2272052535_294195/0",
        "https://inews.gtimg.com/newsapp_ls/0/2271860843_294195/0",
        "https://inews.gtimg.com/newsapp_ls/0/2271938065_294195/0",
        "https://inews.gtimg.com/newsapp_ls/0/2271006365_640330/0",
        "https://inews.gtimg.com/newsapp_ls/0/2271687204_294195/0",
        "https://inews.gtimg.com/newsapp_ls/0/2272149814_294195/0",
        "https://mat1.gtimg.com/www/mobi/2017/image/weather/02.svg",
    ].forEach(function(url){
        it(url,function(done){
            request(url,function(err,res,body){
                assert.equal(res.statusCode,200);
                done();
            })
        })
    })
});