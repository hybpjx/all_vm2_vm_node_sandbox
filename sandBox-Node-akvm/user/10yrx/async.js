!function (){
    // akvm.toolsFunc.log(1111111111111111111);
    new Promise(function (resolve,reject){
        resolve();
    }).then(function (){

    }).then(function (){

    }).then(function (){

    }).then(function (){

    }).then(function (){

    }).then(function (){

    }).then(function (){

    }).then(function (){
        akvm.toolsFunc.log("=============================================");
        // 开始执行websocket
        let eventObj = akvm.memory.asyncEvent.WebSocket_onopen[0];
        let self = eventObj.self;
        let callback = eventObj.callback;
        let event = akvm.toolsFunc.createEvent("open", Event, true);
        callback.call(self, event);
    })
}();