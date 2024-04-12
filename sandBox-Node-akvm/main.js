// 导入模块
const vm = require("vm");
const fs = require("fs");
function getCode(path){
    try{
        return fs.readFileSync(`${path}`) + "\r\n";
    }catch (e){
        console.log(`${path}不存在`);
        return "";
    }
}
function run(name){// 名称!
    console.time();
    // 配置相关代码,外部导入的模块等
    const configCode = getCode(`${__dirname}/config.js`);
    // 用户初始化代码，环境等
    const userVarCode = getCode(`${__dirname}/user/${name}/userVar.js`);
    // 需要调试的代码
    const debugCode = "\n;debugger;\ntry{\n"+ getCode(`${__dirname}/user/${name}/input.js`) +"\ndebugger;\n}catch(e){\ndebugger\nakvm.toolsFunc.log(e);\n}";
    // 异步改同步执行的代码
    const asyncCode = getCode(`${__dirname}/user/${name}/async.js`);
    // 共同的环境代码
    const commonCode = `${configCode}${userVarCode}`;
    // 整合代码
    const scriptCode = `${debugCode}${asyncCode}`;// 待调试代码
    function runCode(code, parent){
        /*
        code:需要执行的代码
        parent:导入top/parent对象
        */
        const sandBox = Object.assign({},this);
        sandBox.parent = parent;
        // 创建虚拟机实例
        vm.createContext(sandBox);
        // 运行脚本文件
        return vm.runInContext(sandBox.commonCode + code, sandBox,{ filename: `${sandBox.name}${Math.random().toString(36).substring(1,8)}.vm`});
    }
    const sandBox = {
        "vm":vm,
        "name":name,
        "TextDecoder":TextDecoder,
        "TextEncoder":TextEncoder,
        "log":console.log,
        "atob":atob,
        "btoa":btoa,
        "commonCode":commonCode,// 共有的环境代码
        "runCode":runCode,
    }
    let result = sandBox.runCode(scriptCode);
    console.timeEnd();
    // 输出结果
    console.log("ret:",result);
    console.log("执行完成");
    return result;
}
debugger;
// run("tools"); // 工具方法
// run("iframe"); // iframe测试
// run("NodeCheck"); // Node环境检测
// run("05yrx"); // 猿人学第五题2023

run("yrx10")// 猿人学2023第十题