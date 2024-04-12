var HTMLCanvasElement = function HTMLCanvasElement() { // 构造函数
    throw new TypeError("Illegal constructor");
};
catvm.safefunction(HTMLCanvasElement);

Object.defineProperties(HTMLCanvasElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLCanvasElement",
        configurable: true
    }
});
////////// 浏览器代码自动生成部分

////////



// 用户创建div
catvm.memory.htmlelements["Canvas"] = function () {
    var Canvas = new (function () { });
    //////////////////////////////////////////
    Object.defineProperty(HTMLCanvasElement.prototype, "width", { configurable: true, enumerable: true, get: function () { return hahavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "width_get", arguments) }, set: function () { return hahavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "width_set", arguments) } });
    Object.defineProperty(HTMLCanvasElement.prototype, "height", { configurable: true, enumerable: true, get: function () { return hahavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "height_get", arguments) }, set: function () { return hahavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "height_set", arguments) } });
    Object.defineProperty(HTMLCanvasElement.prototype, "captureStream", { configurable: true, enumerable: true, writable: true, value: function () { return hahavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "captureStream", arguments) } });
    Object.defineProperty(HTMLCanvasElement.prototype, "getContext", { configurable: true, enumerable: true, writable: true, value: function () { return hahavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "getContext", arguments) } });
    Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", { configurable: true, enumerable: true, writable: true, value: function () { return hahavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "toBlob", arguments) } });
    Object.defineProperty(HTMLCanvasElement.prototype, "toDataURL", { configurable: true, enumerable: true, writable: true, value: function () { return hahavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "toDataURL", arguments) } });
    Object.defineProperty(HTMLCanvasElement.prototype, "transferControlToOffscreen", { configurable: true, enumerable: true, writable: true, value: function () { return hahavm.toolsFunc.dispatch(this, HTMLCanvasElement.prototype, "HTMLCanvasElement", "transferControlToOffscreen", arguments) } });

    /////////////////////////
    Canvas.__proto__ = HTMLCanvasElement.prototype;
    return Canvas;
}

