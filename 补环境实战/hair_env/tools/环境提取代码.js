// 插件用法，看课程吧。这里的内容过于随心所欲了。有BUG随时反馈

/* 取 window 注意事项
    1. window = {}  改成 window = globalThis
    2. Window = function () 改成 let _Window = function(){}, Window.prototype 同理
    3. Object.defineProperty(window, "Window", {  返回值给 _Window   【想想，2,3 为什么要这么做】
    4. 删除 $ 那些东西。 以及下面的东西 （只有打开控制台这个才有）
    5. dom节点是需要额外处理的，请先运行 get_code("", "dom")，会自动生成一份dom节点的基底
*/

// 我没有刻意压缩文本，导致弄出来的东西可能偏大。如果想要优化，就写一个函数用来打印日志
(function () {
    let js_code = "h_log=console.log;"
    let get_obj_code = function (obj, obj_text, isdom) {
        vm2_exies_var_arra = [
            "window",
            "Proxy",
            "Function",
            "eval",
            "Object",
            "Array",
            "Number",
            "parseFloat",
            "parseInt",
            "Infinity",
            "NaN",
            "undefined",
            "Boolean",
            "String",
            "Symbol",
            "Date",
            "Promise",
            "RegExp",
            "Error",
            "AggregateError",
            "EvalError",
            "RangeError",
            "ReferenceError",
            "SyntaxError",
            "TypeError",
            "URIError",
            "globalThis",
            "JSON",
            "Math",
            "Intl",
            "ArrayBuffer",
            "Uint8Array",
            "Int8Array",
            "Uint16Array",
            "Int16Array",
            "Uint32Array",
            "Int32Array",
            "Float32Array",
            "Float64Array",
            "Uint8ClampedArray",
            "BigUint64Array",
            "BigInt64Array",
            "DataView",
            "Map",
            "BigInt",
            "Set",
            "WeakMap",
            "WeakSet",
            "Reflect",
            "FinalizationRegistry",
            "WeakRef",
            "decodeURI",
            "decodeURIComponent",
            "encodeURI",
            "encodeURIComponent",
            "escape",
            "unescape",
            "isFinite",
            "isNaN",
            "console",
            "Atomics",
            "WebAssembly",]


        // 拿对象的所有属性和原型情况
        function get_prototype_code(obj, obj_text) {

            // 对dom节点的判断
            if (obj === HTMLElement.prototype) {
                js_code += `${obj_text} = HTMLElement.prototype;`
                return "stop"
            }
            if (obj === Node.prototype) {
                js_code += `${obj_text} = Node.prototype;`
                return "stop"
            }

            // obj ----> 传入的对象
            // obj_text ----> 传入的对象的字符串
            if (obj === Object.prototype) {
                // 到底层了，直接弹出
                return
            }
            // 对EventTarget 额外默认处理
            if (obj[Symbol.toStringTag] === "EventTarget") {
                js_code += `${obj_text}=eventTarget;`
                return
            }
            js_code += ((!(obj_text in window) && !obj_text.includes(".")) ? "let " : "") + `${obj_text}={};`
            // 获取对象的所有描述符对象
            let all_PropertyDescriptors = Object.getOwnPropertyDescriptors(obj)
            for (let _obj_attribute of Reflect.ownKeys(all_PropertyDescriptors)) {
                if (vm2_exies_var_arra.includes(_obj_attribute) && obj_text === "window") {
                    js_code += `window.${_obj_attribute}=${_obj_attribute};`
                    continue
                }
                // 创造描述符对象文本,以便于直接复用
                let Descriptors_text = "{"
                for (let _obj_attribute_descriptors in all_PropertyDescriptors[_obj_attribute]) {
                    // 获取描述内容
                    let Descriptors_detail = all_PropertyDescriptors[_obj_attribute][_obj_attribute_descriptors]
                    if (typeof Descriptors_detail === "function") {
                        // 对 constructor 做额外处理, 创造函数
                        if (_obj_attribute === "constructor") {
                            let _global_let = (Descriptors_detail.name in window) ? '' : "let "
                            js_code += `${_global_let}${Descriptors_detail.name} = function (){h_log("${obj_text} ${_obj_attribute} ${_obj_attribute_descriptors} [call]","arg:", arguments)};`
                            js_code += `${Descriptors_detail.name}.prototype=${obj_text};`
                            Descriptors_text += `${_obj_attribute_descriptors}:${Descriptors_detail.name},`
                        }
                        // 对value 为 函数的，进行额外处理，把value换成 get，以便于打印日志和补充环境
                        else if (_obj_attribute_descriptors === "value") {
                            Descriptors_text += `get:function(){h_log("[v] ${obj_text} ${_obj_attribute} ${_obj_attribute_descriptors} [get]","arg:", arguments);return function(){h_log("[v] ${obj_text} ${_obj_attribute} ${_obj_attribute_descriptors} [call]","arg:", arguments)}},`
                            let keys = Object.keys(all_PropertyDescriptors[_obj_attribute])
                            Descriptors_text += `${keys[2]}: ${all_PropertyDescriptors[_obj_attribute][keys[2]]}, ${keys[3]}: ${all_PropertyDescriptors[_obj_attribute][keys[3]]}`
                            break;
                        } else {
                            Descriptors_text += `${_obj_attribute_descriptors}:function(){h_log("${obj_text} ${_obj_attribute} ${_obj_attribute_descriptors} [call]","arg:", arguments)},`
                        }
                    } else if (typeof Descriptors_detail === "object") {
                        Descriptors_text += `${_obj_attribute_descriptors}:{},`
                    } else if (typeof Descriptors_detail === "string") {
                        Descriptors_text += `${_obj_attribute_descriptors}:"${Descriptors_detail}",`
                    } else {
                        Descriptors_text += `${_obj_attribute_descriptors}: ${Descriptors_detail},`
                    }
                }
                Descriptors_text += "}"


                // 设置描述符, 如果是符号，则特殊处理
                if (typeof _obj_attribute === "symbol") {
                    js_code += `Object.defineProperty(${obj_text}, ${_obj_attribute.description}, ${Descriptors_text});`
                } else {
                    js_code += `Object.defineProperty(${obj_text}, "${_obj_attribute}", ${Descriptors_text});`
                }
            }
            // 开始生成文本
        }

        while (1) {
            if (obj === Object.prototype) {
                break
            } else {
                if (get_prototype_code(obj, obj_text) === "stop") {
                    break
                }
                obj = obj.__proto__
                obj_text += ".__proto__"
            }
        }
    };
    let get_func_code = function (func, func_text) {
        js_code += `let ${func_text}=function(){};`
        // 取函数的prototype描述符
        if (!func.prototype) {
            console.log("此函数没有描述符，直接设置即可")
            return
        }
        let _func_descriptor = Object.getOwnPropertyDescriptor(func, "prototype")
        let Descriptors_text = "{"
        for (let descriptor in _func_descriptor) {
            // 获取描述内容
            let Descriptors_detail = _func_descriptor[descriptor]
            if (typeof Descriptors_detail === "object") {
                Descriptors_text += `${descriptor}:${func_text}_${descriptor},`
                get_obj_code(Descriptors_detail, `${func_text}_${descriptor}`) // 这里想接的话，可以接入取对象工具函数，看您心情
            } else {
                Descriptors_text += `${descriptor}:${Descriptors_detail},`
            }
        }
        Descriptors_text += "}"
        js_code += `Object.defineProperty(${func_text},"prototype",${Descriptors_text});`
    };
    let get_dom_code = function () {
        obj = document.createElement("div").__proto__.__proto__
        obj_text = "_base_dom"

        function get_prototype_code(obj, obj_text) {
            // obj ----> 传入的对象
            // obj_text ----> 传入的对象的字符串
            if (obj === Object.prototype) {
                // 到底层了，直接弹出
                return
            }
            // 对EventTarget 额外默认处理
            if (obj[Symbol.toStringTag] === "EventTarget") {
                js_code += `${obj_text}=eventTarget;`
                return
            }
            js_code += ((!(obj_text in window) && !obj_text.includes(".")) ? "let " : "") + `${obj_text}={};`
            // 获取对象的所有描述符对象
            let all_PropertyDescriptors = Object.getOwnPropertyDescriptors(obj)
            for (let _obj_attribute of Reflect.ownKeys(all_PropertyDescriptors)) {
                // 创造描述符对象文本,以便于直接复用
                let Descriptors_text = "{"
                for (let _obj_attribute_descriptors in all_PropertyDescriptors[_obj_attribute]) {
                    // 获取描述内容
                    let Descriptors_detail = all_PropertyDescriptors[_obj_attribute][_obj_attribute_descriptors]
                    if (typeof Descriptors_detail === "function") {
                        // 对 constructor 做额外处理, 创造函数
                        if (_obj_attribute === "constructor") {
                            let _global_let = (Descriptors_detail.name in window) ? '' : "let "
                            js_code += `${_global_let}${Descriptors_detail.name} = function (){h_log("${obj_text} ${_obj_attribute} ${_obj_attribute_descriptors} [call]","arg:", arguments)};`
                            js_code += `${Descriptors_detail.name}.prototype=${obj_text};`
                            Descriptors_text += `${_obj_attribute_descriptors}:${Descriptors_detail.name},`
                        }
                        // 对value 为 函数的，进行额外处理，把value换成 get，以便于打印日志和补充环境
                        else if (_obj_attribute_descriptors === "value") {
                            Descriptors_text += `get:function(){h_log("[v] ${obj_text} ${_obj_attribute} ${_obj_attribute_descriptors} [get]","arg:", arguments);return function(){h_log("[v] ${obj_text} ${_obj_attribute} ${_obj_attribute_descriptors} [call]","arg:", arguments)}},`
                            let keys = Object.keys(all_PropertyDescriptors[_obj_attribute])
                            Descriptors_text += `${keys[2]}: ${all_PropertyDescriptors[_obj_attribute][keys[2]]}, ${keys[3]}: ${all_PropertyDescriptors[_obj_attribute][keys[3]]}`
                            break;
                        } else {
                            Descriptors_text += `${_obj_attribute_descriptors}:function(){h_log("${obj_text} ${_obj_attribute} ${_obj_attribute_descriptors} [call]","arg:", arguments)},`
                        }
                    } else if (typeof Descriptors_detail === "object") {
                        Descriptors_text += `${_obj_attribute_descriptors}:{},`
                    } else if (typeof Descriptors_detail === "string") {
                        Descriptors_text += `${_obj_attribute_descriptors}:"${Descriptors_detail}",`
                    } else {
                        Descriptors_text += `${_obj_attribute_descriptors}: ${Descriptors_detail},`
                    }
                }
                Descriptors_text += "}"

                // 设置描述符, 如果是符号，则特殊处理
                if (typeof _obj_attribute === "symbol") {
                    js_code += `Object.defineProperty(${obj_text}, ${_obj_attribute.description}, ${Descriptors_text});`
                } else {
                    js_code += `Object.defineProperty(${obj_text}, "${_obj_attribute}", ${Descriptors_text});`
                }
            }
            // 开始生成文本
        }

        while (1) {
            if (obj === Object.prototype) {
                break
            } else {
                get_prototype_code(obj, obj_text)
                obj = obj.__proto__
                obj_text += ".__proto__"
            }
        }
    };

    function get_code(arg1, arg2, arg3) {
        if (typeof arg1 === "object") {
            get_obj_code(arg1, arg2, arg3)
        } else if (typeof arg1 === "function") {
            get_func_code(arg1, arg2)
        } else if (arg2 === "dom") {
            get_dom_code()
        } else {
            throw TypeError("只能接收对象/函数")
        }
    }

    get_code(document.createElement('div'), "_div_dom")
    console.log(js_code)
})()

