!function (){
    location.href = "https://baidu.com"
    akvm.config.print = true;
    // 固定参数
    // Date.now

    // Math.random : 随机数列表 // 保护toString

    // Date.prototype.valueOf : 时间戳列表


}();
!function (){
    akvm.envFunc.Document_createElement = function (){
        let tagName = arguments[0].toLowerCase();
        if(tagName === "div"){
            return akvm.toolsFunc.createObj({},HTMLDivElement);
        }else if(tagName === "style"){
            return akvm.toolsFunc.createObj({},HTMLStyleElement);
        }else if(tagName === "canvas"){
            return akvm.toolsFunc.createObj({},HTMLCanvasElement);
        }else if(tagName === "script"){
            return akvm.toolsFunc.createObj({},HTMLScriptElement);
        }else if(tagName === "form"){
            return akvm.toolsFunc.createObj({},HTMLFormElement);
        }else if(tagName === "input"){
            return akvm.toolsFunc.createObj({},HTMLInputElement);
        }else if(tagName === "iframe"){
            return akvm.toolsFunc.createObj({},HTMLIFrameElement);
        }else if(tagName === "a"){
            return akvm.toolsFunc.createObj({},HTMLAnchorElement);
        }else if(tagName === "textarea"){
            return akvm.toolsFunc.createObj({},HTMLTextAreaElement);
        }else if(tagName === "button"){
            return akvm.toolsFunc.createObj({},HTMLButtonElement);
        }else if(tagName === "video"){
            return akvm.toolsFunc.createObj({},HTMLVideoElement);
        }
    }
    akvm.envFunc.Document_documentElement_get = function (){
        return akvm.toolsFunc.createObj({},HTMLHtmlElement);
    }
    akvm.envFunc.Document_body_get = function (){
        return akvm.toolsFunc.createObj({},HTMLBodyElement);
    }
    akvm.envFunc.globalThis_MouseEvent = function (){
        return akvm.toolsFunc.createEvent(arguments[0], MouseEvent, false, arguments[1]);
    }
    akvm.envFunc.HTMLIFrameElement_contentWindow_get = function (){
        return akvm.sandBox.runCode("window;", globalThis);
    }
    akvm.envFunc.Document_head_get = function (){
        return akvm.toolsFunc.createObj({},HTMLHeadElement);
    }
    akvm.envFunc.DOMImplementation_createHTMLDocument = function (){
        return akvm.toolsFunc.createObj({},HTMLDocument);
    }
    akvm.envFunc.Node_appendChild = function (){
        return arguments[0];
    }
    akvm.envFunc.HTMLElement_style_get = function (){
        return akvm.toolsFunc.createObj({},CSSStyleDeclaration);
    }
    akvm.envFunc.Element_outerHTML_get = function (){
        return '<div></div>';
    }
    akvm.envFunc.Element_querySelectorAll = function (){
        return akvm.toolsFunc.createObj({},NodeList);
    }
    akvm.envFunc.Node_childNodes_get = function (){
        return akvm.toolsFunc.createObj({},NodeList);
    }
    akvm.envFunc.Element_getBoundingClientRect = function (){
        return akvm.toolsFunc.createObj({},DOMRect);
    }
    akvm.envFunc.globalThis_getComputedStyle = function (){
        return akvm.toolsFunc.createObj({},CSSStyleDeclaration);
    }
    akvm.envFunc.CanvasRenderingContext2D_getImageData = function (){
        let imageData = {
            "data": new Uint8ClampedArray([0,0,0,0])
        }
        return akvm.toolsFunc.createObj(imageData,ImageData);
    }
    akvm.envFunc.CanvasRenderingContext2D_measureText = function (){
        return akvm.toolsFunc.createObj({},TextMetrics);
    }
    akvm.envFunc.HTMLCanvasElement_getContext = function (){
        let type = arguments[0];
        if(type === "2d"){
            return akvm.toolsFunc.createObj({},CanvasRenderingContext2D);
        }
    }
    akvm.envFunc.Document_createElementNS = function (){
        return akvm.toolsFunc.createObj({},SVGGElement);
    }
    akvm.envFunc.Navigator_getBattery = function (){
        let obj = akvm.toolsFunc.createObj({},BatteryManager);
        return new Promise(function (resolve,reject){
            resolve(obj);
        });
    }
    akvm.envFunc.NavigatorUAData_getHighEntropyValues = function (){
        let obj = {
            bitness:"64",
            brands:[{brand: 'Not.A/Brand', version: '8'},{brand: 'Chromium', version: '114'},{brand: 'Google Chrome', version: '114'}],
            mobile: false,
            platform:"Windows"
        };
        return new Promise(function (resolve,reject){
            resolve(obj);
        });
    }
    akvm.envFunc.MediaDevices_enumerateDevices = function (){
        let a = akvm.toolsFunc.createObj({},InputDeviceInfo);
        let b = akvm.toolsFunc.createObj({},InputDeviceInfo);
        let c = akvm.toolsFunc.createObj({},MediaDeviceInfo);
        let obj = [a,b,c];
        return new Promise(function (resolve,reject){
            resolve(obj);
        });
    }
    akvm.envFunc.WebSocket_onopen_set = function (){
        let event = {
            self:this,
            callback:arguments[0]
        }
        if(akvm.memory.asyncEvent.WebSocket_onopen === undefined){
            akvm.memory.asyncEvent.WebSocket_onopen = [];
        }
        akvm.memory.asyncEvent.WebSocket_onopen.push(event);
    }
}();