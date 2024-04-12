!function(){
    akvm.config.print = true;
    akvm.toolsFunc.tryHook = function (e){
        e.stack = "123666";
    }
}();
// 具体功能实现
!function (){
    akvm.envFunc.Document_createElement = function (){
        let tag = {};
        let tagName = arguments[0].toLowerCase();
        if(tagName === "div"){
            return akvm.toolsFunc.createObj(tag, HTMLDivElement);
        }
    }
    akvm.envFunc.HTMLDivElement_align_get = function (){
        return akvm.toolsFunc.getHideProp(this, "align") || "";
    }
    akvm.envFunc.HTMLDivElement_align_set = function (){
        akvm.toolsFunc.setHideProp(this, "align", arguments[0]);
    }
    akvm.envFunc.globalThis_Window = function (){
        akvm.toolsFunc.throwError("Illegal constructor")
    }


}();