var fs = require("fs");
const {VM, VMScript} = require("vm2");
const codeFileName = `${__dirname}/code.js`
const windowFileName = `${__dirname}/window.js`

const vm = new VM();
var codeFile = fs.readFileSync(codeFileName, 'utf-8')
var windowFile = fs.readFileSync(windowFileName, 'utf-8')
const script = new VMScript(windowFile + codeFile, "vm2")
debugger;
vm.run(script)
debugger;

// 框架 封装的思想 功能单一 可扩展
// 框架 封装的思想 功能单一 可扩展
// v8 node(vm2)  运行

// 1. js调试框架 监控所有环境
// 在真是浏览器代理（无法代理某些对象）
// 在自己伪造的环境代理（任意代理，保证代理不会被检测）
// 利用开源谷歌浏览器 进行修改内核代码 C++ （学习难度比较高）


// 2 代码如何被检测
// toString() 
// 基于原型链的检测（navigation） 
// Dom环境的检测（canvas）
// 3. 代理是什么？
// 拦截 js 读取window.xx的操作