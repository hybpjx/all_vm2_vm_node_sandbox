
Error.prepareStackTrace = function (error, structuredStackTrace) {
    h_log("有报错, 错误已打印，可以考虑在此处拦截\n", error)
    // error.stack = error.stack.replace(/vm.js/g, "<anonymous>")
    // h_log("有报错,已拦截，替换为\n", error.stack)
    return error
};


let _lp_func_toString = Object.assign(Function.prototype.toString);
let _lp_obj_toString = Object.assign(Object.prototype.toString);



Function.prototype.toString = function () {
    // h_log(this)
    if(_lp_func_toString.call(this).includes("open")){
        h_log(`Function toString ${this.name} 被调用`)
        h_log(`返回：` + 'function open() { [native code] }')
        return 'function open() { [native code] }'
    }
        h_log(`Function toString ${this.name} 被调用`)
        h_log("函数体为（只展示50字符）：" + _lp_func_toString.call(this).slice(0, 50))
        h_log("原路返回")
        return _lp_func_toString.call(this)
};

Object.prototype.toString = function () {
    h_log("Object toString 被调用")
    h_log("对象为：" + _lp_obj_toString.call(this))
    h_log(this)
    h_log("----------------------------------------")
    return _lp_obj_toString.call(this)
};

