// 框架代码
let ld;
ld = {};
ld.config = {};
ld.config.proxy = true; // 代理开关
ld.getType = function getType(obj) {
    return Object.prototype.toString.call(obj)
}

ld.proxy = function proxy(obj, objName) {
    // obj : 原始对象
    // objName: 原始对象的名字。
    if (!ld.config.proxy) {
        return obj
    }

    let handler = {
        get: function (target, prop, receiver) {
            let result;
            try {// 防止报错
                result = Reflect.get(target, prop, receiver)

                /*
                如果迭代对象 可以使用JSON.stringify 但是考虑到循环引用不能显示，所以不推荐。
                console.log(`get|obj:[${objName}] 正在获取属性prop——> [${prop}] result====> [${JSON.stringify(result)}]`);
                 */
                let type = ld.getType(result)

                if (result instanceof Object) {
                    console.log(`{get|obj:[${objName}] 正在获取属性(prop)——> [${prop.toString()}] type====> [${type}]}`);
                    // 需要递归对象
                    result = ld.proxy(result, `${objName}.${prop.toString()}`);
                } else if (typeof result === "symbol") {
                    console.log(`{get|obj:[${objName}] 正在获取属性(prop)——> [${prop.toString()}] result====> [${result.toString()}]}`);
                } else {
                    console.log(`{get|obj:[${objName}] 正在获取属性(prop)——> [${prop.toString()}] result====> [${result}]}`);
                }
            } catch (e) {
                console.log(`{!error! ====> [${e.message}] get|obj:[${objName}] 正在获取属性(prop)——> [${prop.toString()}]}`);
            }
            return result;
        },
        set: function (target, prop, value, receiver) {
            let result
            try {
                result = Reflect.set(target, prop, value, receiver);
                let type = ld.getType(value)
                if (value instanceof Object) {
                    console.log(`{set|obj:[${objName}] 正在设置属性(prop)——> [${prop.toString()}] type====> [${type}]}`);
                    // 需要递归对象
                } else if (typeof value === "symbol") {
                    console.log(`{set|obj:[${objName}] 正在设置属性(prop)——> [${prop.toString()}] value ====> [${value.toString()}]}`);
                } else {
                    console.log(`{set|obj:[${objName}] 正在设置属性(prop)——> [${prop.toString()}] value ====> [${value}]}`);
                }
            } catch (e) {
                console.log(`{!error! ====> [${e.message}] set|obj:[${objName}] 正在设置属性(prop)——> [${prop.toString()}]}`);
            }
            return result
        },
        getOwnPropertyDescriptor(target, prop) {
            let result;
            // 返回结果有两种情况 第一种undefined，还有一种是描述符对象
            try {
                result = Reflect.getOwnPropertyDescriptor(target, prop);
                let type = ld.getType(result)
                console.log(`{getOwnPropertyDescriptor |obj:[${objName}] (prop)——> [${prop.toString()}] type====> [${type}]}`);

                // // 不会对描述符进行拦截，拦截也可以 信息太多了 没必要
                // if (typeof result !== "undefined") {
                //     result = ld.proxy(result, `${objName}.${prop.toString()}.PropertyDescriptor`);
                // }
            } catch (e) {
                console.log(`{!error! ====> [${e.message}] getOwnPropertyDescriptor|obj:[${objName}] (prop)——> [${prop.toString()}]}`);
            }
            return result;
        },
        defineProperty: function (target, prop, descriptor) {
            let result;
            // 直接回调
            try {
                result = Reflect.defineProperty(target, prop, descriptor);
                console.log(`{defineProperty |obj:[${objName}] (prop)——> [${prop.toString()}]}`);
            } catch (e) {
                console.log(`{!error! ====> [${e.message}] defineProperty|obj:[${objName}] (prop)——> [${prop.toString()}]}`);
            }
            return result
        },
        apply: function (target, thisArgs, argumentList) {
            /*
            target : 函数对象
            thisArgs: 调用函数的this指针
            argumentList: 数组 列表 函数的入参组成的列表， 同JS中的apply方法。
             */

            let result;
            try {
                result = Reflect.apply(target, thisArgs, argumentList);
                let type = ld.getType(result)
                if (result instanceof Object) {
                    console.log(`{apply|function :[${objName}]  result:[${result}]}`);
                } else if (typeof result === "symbol") {
                    console.log(`{apply|function :[${objName}]  result:[${result.toString()}]}`);
                } else {
                    console.log(`apply|function :[${objName}],  result:[${result}]`);
                }

            } catch (e) {
                console.log(`apply|function :[${objName}] !error! ====> [${e.message}] `);

            }
            return result
        },
        construct: function (target, argumentsList, newTarget) {
            /*
            target: 函数对象
            argumentsList： 关键字传进来的参数 是一个列表
            newTarget: 代理后的对象
             */
            let result;
            try {
                result = Reflect.construct(target, argumentsList, newTarget);
                let type = ld.getType(result);
                console.log(`construct|function :[${objName}]  type:[${type}]`);
            } catch (e) {
                console.log(`construct|function :[${objName}] !error! ====> [${e.message}] `);

            }
            return result
        },
        deleteProperty(target, propKey) {
            let result;
            result = Reflect.deleteProperty(target, propKey);
            console.log(`{deleteProperty|obj:[${objName}] ——> prop:[${propKey.toString()}], result:[${result}]}`);
            return result;
        },
        has(target, propKey) {
            let result;
            result = Reflect.has(target, propKey);
            console.log(`{has|obj:[${objName}] ——> prop:[${propKey.toString()}], result:[${result}]}`);
            return result;
        },
        ownKeys(target) {
            let result;
            result = Reflect.ownKeys(target);
            console.log(`{ownKeys|obj:[${objName}]}`)
            return result
        },
        getPrototypeOf(target) {
            let result;
            result = Reflect.getPrototypeOf(target);
            console.log(`{getPrototypeOf|obj:[${objName}]`);
            return result;
        },
        setPrototypeOf(target, proto) {
            let result;
            result = Reflect.setPrototypeOf(target, proto);
            console.log(`{setPrototypeOf|obj:[${objName}]`);
            return result;
        },
        preventExtensions(target) {
            let result;
            result = Reflect.preventExtensions(target);
            console.log(`{preventExtensions|obj:[${objName}]}`)
            return result
        },
        isExtensible(target) {
            let result;
            result = Reflect.isExtensible(target);
            console.log(`{isExtensible|obj:[${objName}]}`)
            return result
        }
    };


    return new Proxy(obj, handler)
}

module.exports = ld;