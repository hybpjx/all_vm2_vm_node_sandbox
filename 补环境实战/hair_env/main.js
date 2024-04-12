

// 在加载 js代码的时候，html页面是 分批次加载的，按照每一个 script标签，顺序加载
// 浏览器的 事件循环机制
// 框架的入口

// js代码的提取，拿 script标签里的内容 和 src
// 怎么从此html里面去拿这些东西，  xpath 正则 css选择器， 等等等等

// jquery

const cheerio = require('cheerio');  // 框架的上线文管理器
const {VM} = require("vm2");
const fs = require("fs");
const config = require("./config");
const request = require('sync-request')

const _setTimeout = function (a, b){
    return setTimeout(a)
}

let html = fs.readFileSync("./work/work.html", "utf-8")
const $ = cheerio.load(html);
const vm = new VM({
    sandbox: {
        h_log: config.DEBUG?console.log:function (){},
        setTimeout: _setTimeout,
        setInterval: _setTimeout,
        config_LOCATION: config.LOCATION,
        config_CONTENT: $($("meta")[1]).attr("content"),
    }
});


let _html_code = ""
if(html.length >= 100){
    for(let script of $('script')){
        _html_code += $(script).text()
        let _src = $(script).attr("src")
        if(_src){
            // 进行后续操作，也就是请求js文件，这里可以利用浏览器的方法，做一个缓存目录 缓存js文件
            // src 的请求如何构建 可能是相对路径，也可能是绝对路径
            let URL = config.LOCATION.origin + _src
            let _headers = {
                "userAgent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
            let response = request('GET', URL, {
                headers: _headers
            })
            _html_code += response.body.toString() + ';'
        }
    }
}

let code = "debugger;" // 便于调试
// 加载框架代码
code += fs.readFileSync("./env/init.js", "utf-8")
code += fs.readFileSync("./env/public/eventTarget.js", "utf-8")
code += fs.readFileSync("./env/bom/navigator.js", "utf-8")
code += fs.readFileSync("./env/bom/location.js", "utf-8")
code += fs.readFileSync("./env/dom/dom.js", "utf-8")
code += fs.readFileSync("./env/dom/tag.js", "utf-8")
code += fs.readFileSync("./env/dom/document.js", "utf-8")
code += fs.readFileSync("./env/bom/window.js", "utf-8")

code = `(function(){${code}})();`
code += _html_code
code += fs.readFileSync("./work/work.js", "utf-8")

// 可留可不留
code = `try{${code};debugger}catch(e){h_log(e);debugger;};`
code += `document.cookie`;
_cookie = vm.run(code);
console.log(_cookie)