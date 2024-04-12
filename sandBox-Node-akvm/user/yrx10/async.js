!function (){
    new Promise(function (r,j){r()}).then(
        function (){}
    ).then(
        function (){}
    ).then(
        function (){}
    ).then(
        function (){}
    ).then(
        function (){}
    ).then(
        function (){}
    ).then(
        function (){}
    ).then(
        function (){}
    ).then(
        function (){
            let eventObj = akvm.memory.WebSocket_onopen;
            let callback = eventObj.callback;
            let self = eventObj.self;
            let e = akvm.toolsFunc.createEvent("", Event, true);
            akvm.toolsFunc.log("================================开始执行open事件========================================");
            callback.call(self, e);
        }
    )

}();