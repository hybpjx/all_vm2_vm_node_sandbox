!function (){
    location.href = 'https://match2023.yuanrenxue.cn/topic/10';
    let html = akvm.toolsFunc.createObj({},HTMLHtmlElement);
    let head = akvm.toolsFunc.createObj({},HTMLHeadElement);
    akvm.toolsFunc.setHideProp(document,"documentElement",html);
    akvm.toolsFunc.setHideProp(document,"head",head);
    akvm.config.print = true;
}();

!function (){
    akvm.envFunc.Document_createElement = function (){
        let tagName = arguments[0].toLowerCase();
        let tag = {};
        if(tagName === "iframe"){
            return akvm.toolsFunc.createObj(tag, HTMLIFrameElement);
        }else if(tagName === "div"){
            akvm.toolsFunc.setHideProp(tag,"outerHTML",'<div></div>');
            return akvm.toolsFunc.createObj(tag, HTMLDivElement);
        }else if(tagName === "canvas"){
            return akvm.toolsFunc.createObj(tag, HTMLCanvasElement);
        }else if(tagName === "script"){
            return akvm.toolsFunc.createObj(tag, HTMLScriptElement);
        }else if(tagName === "a"){
            return akvm.toolsFunc.createObj(tag, HTMLAnchorElement);
        }else if(tagName === "video"){
            return akvm.toolsFunc.createObj(tag, HTMLVideoElement);
        }else if(tagName === "style"){
            return akvm.toolsFunc.createObj(tag, HTMLStyleElement);
        }else if(tagName === "form"){
            return akvm.toolsFunc.createObj(tag, HTMLFormElement);
        }else if(tagName === "input"){
            return akvm.toolsFunc.createObj(tag, HTMLInputElement);
        }else if(tagName === "button"){
            return akvm.toolsFunc.createObj(tag, HTMLButtonElement);
        }else if(tagName === "textarea"){
            return akvm.toolsFunc.createObj(tag, HTMLTextAreaElement);
        }
    }
    akvm.envFunc.HTMLIFrameElement_contentWindow_get = function (){
        let win = akvm.toolsFunc.getHideProp(this, "contentWindow");
        if(win === undefined){
            win = akvm.sandBox.runCode("this;", globalThis);
            akvm.toolsFunc.setHideProp(this, "contentWindow", win);
        }
        return win;
    }
    akvm.envFunc.Navigator_getBattery = function (){
        let obj = akvm.toolsFunc.createObj({},BatteryManager);
        return new Promise(function (resolve, reject){
            resolve(obj);
        });
    }
    akvm.envFunc.MediaDevices_enumerateDevices = function (){
        let a = akvm.toolsFunc.createObj({},InputDeviceInfo);
        akvm.toolsFunc.setHideProp(a,"kind", 'audioinput');
        let b = akvm.toolsFunc.createObj({},InputDeviceInfo);
        let c = akvm.toolsFunc.createObj({},MediaDeviceInfo);
        let obj = [a,b,c];
        return new Promise(function (resolve, reject){
            resolve(obj);
        });
    }
    akvm.envFunc.NavigatorUAData_getHighEntropyValues = function (){
        let obj = {
            bitness:"64",
            brands:[{brand: 'Not.A/Brand', version: '8'},{brand: 'Chromium', version: '114'},{brand: 'Google Chrome', version: '114'}],
            mobile:false,
            platform:"Windows"
        }
        return new Promise(function (resolve, reject){
            resolve(obj);
        });
    }
    akvm.envFunc.globalThis_WebSocket = function (){
        return this;
    }
    akvm.envFunc.WebSocket_onopen_set = function (){
        let event = {
            "self":this,
            "callback":arguments[0]
        }
        akvm.memory.WebSocket_onopen = event;
    }
    akvm.envFunc.HTMLCanvasElement_getContext = function (){
        if(arguments[0] === "2d"){
            return akvm.toolsFunc.createObj({},CanvasRenderingContext2D);
        }
    }
    akvm.envFunc.CanvasRenderingContext2D_measureText = function (){
        return akvm.toolsFunc.createObj({},TextMetrics);
    }
    akvm.envFunc.Node_childNodes_get = function (){
        return akvm.toolsFunc.createObj({},NodeList);
    }
    akvm.envFunc.Document_createElementNS = function (){
        return akvm.toolsFunc.createObj({},Node);
    }
    akvm.envFunc.CanvasRenderingContext2D_getImageData = function (){
        let imageData = {};
        imageData.data = new Uint8ClampedArray([1,1,1,1]);
        return akvm.toolsFunc.createObj(imageData,ImageData);
    }
    akvm.envFunc.Element_querySelectorAll = function (){
        if(arguments[0] === 'UL > LI'){
            return akvm.toolsFunc.createObj({}, NodeList);
        }
    }
    akvm.envFunc.HTMLElement_style_get = function (){
        return akvm.toolsFunc.createObj({}, CSSStyleDeclaration);
    }
    akvm.envFunc.globalThis_getComputedStyle = function (){
        return akvm.toolsFunc.createObj({}, CSSStyleDeclaration);
    }
    akvm.envFunc.DOMImplementation_createHTMLDocument = function (){
        return akvm.toolsFunc.createObj({}, HTMLDocument);
    }
    akvm.envFunc.Document_body_get = function (){
        return akvm.toolsFunc.createObj({},HTMLBodyElement);
    }
    akvm.envFunc.Element_getBoundingClientRect = function (){
        return akvm.toolsFunc.createObj({},DOMRect);
    }
}();