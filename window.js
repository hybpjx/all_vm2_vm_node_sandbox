window = this;


// 主要用来保护伪造的函数，使其更难被识别

// 主要用来保护伪造的函数，让其更难识破
;
(() => {
    'use strict';
    // 取原型链上的toString
    const $toString = Function.toString;
    // 取方法名 reload
    const myFunction_toString_symbol = Symbol('('.concat('', ')_', (Math.random() + '').toString(36)));
    const myToString = function () {
        return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.call(this);
    };

    function set_native(func, key, value) {
        Object.defineProperty(func, key, {
            "enumerable": false,  // 不可枚举
            "configurable": true, // 可配置
            "writable": true, // 可写
            "value": value
        })
    }

    delete Function.prototype['toString'];// 删除原型链上的toString
    set_native(Function.prototype, "toString", myToString); // 自定义一个getter方法，其实就是一个hook
    //套个娃，保护一下我们定义的toString，避免js对toString再次toString，如：location.reload.toString.toString() 否则就暴露了
    set_native(Function.prototype.toString, myFunction_toString_symbol, "function toString() { [native code] }");
    this.catvm.safefunction = (func) => {
        set_native(func, myFunction_toString_symbol, `function ${myFunction_toString_symbol,func.name || ''}() { [native code] }`);
    }; //导出函数到globalThis，更改原型上的toSting为自己的toString。这个方法相当于过掉func的toString检测点
}).call(this);

// 后代理的检测不到先代理的。也就是我们这个代理 他是无法用代理检测的
function vmProxy(options) {
    return new Proxy(options, {
        set(target, property, value) {
            console.log("set", target, property, value);
            return Reflect.set(...arguments);
        },
        get(target, property, receiver) {
            console.log("get", target, property, receiver)
            return target[property];
        },

    })
}

Object.defineProperties(window, {
    [Symbol.toStringTag]: {
        value: "window",
        configurable: true,
    }
});
window = vmProxy(window);
navigator = vmProxy(class navigator { })
document = vmProxy(class document { })
location = class location { }
location.reload = function reload() {
}
location = vmProxy(location)
debugger;;
// window.document = {
//     referrer: '',
//     createElement: function (tagName) {
//         tagName = (tagName + "").toLowerCase();
//         if (tagName === "canvas") {
//             return {
//                 toDataURL: function () {
//                     return ''
//                 }
//             }
//         }
//         return {}
//     },
//     createEvent: function (eventName) {
//         console.log("createEvent", eventName)
//         return {
//             initEvent: function (x, x1, x2) {
//                 console.log("initEvent:", x)
//             },
//             addEventListener: function (x, x1) {
//                 console.log("addEventListener:", x, x1)
//             }
//         }
//     }
// }

// window.location = {
//     "ancestorOrigins": {},
//     "href": "https://www.toutiao.com/?wid=1688368231201",
//     "origin": "https://www.toutiao.com",
//     "protocol": "https:",
//     "host": "www.toutiao.com",
//     "hostname": "www.toutiao.com",
//     "port": "",
//     "pathname": "/",
//     "search": "?wid=1688368231201",
//     "hash": ""
// }



// navigator = {
//     "userAgent": "Mozilla/5.0 (Macintosh; Intel)"
// };
// // hook掉Object.getOwnPropertyDescriptor 以保持和浏览器一样返回的是undefined
// Object._getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Object.getOwnPropertyDescriptor = function (o, p) {
//     if (o.toLocalString() === "[object Navigator]") {
//         return undefined;
//     };
//     const describtions = Object._getOwnPropertyDescriptor(this, arguments);
// }

// const describtions = Object.getOwnPropertyDescriptor(navigator, "userAgent");
// console.log(describtions);
// debugger;