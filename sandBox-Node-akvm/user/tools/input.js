// akvm.toolsFunc.all;
// akvm.toolsFunc.setNative;
// akvm.toolsFunc.setHideProp;
// akvm.toolsFunc.getHideProp;
// akvm.toolsFunc.createObj
// akvm.toolsFunc.createEvent
// akvm.toolsFunc.throwError

debugger;
atob("123");
// 创建一个特殊对象, 同document.all对象
let all = new akvm.toolsFunc.all;
if(typeof all === "undefined"){

}
if(all !== undefined){

}
if(all == undefined){

}

function add(a,b){
    return a+b;
}
akvm.toolsFunc.setNative(add,"add");
console.log(add.toString())
documentx = {};
// documentx.nodeType = 9;
if(Object.getOwnPropertyDescriptor(documentx,"nodeType") === undefined){

}
akvm.toolsFunc.setHideProp(documentx, "nodeType", 9);
akvm.toolsFunc.getHideProp(documentx, "nodeType");

let div = document.createElement("div");
console.log(div.align);
if(Object.getOwnPropertyDescriptor(div,"align") !== undefined){
    console.log("error");
}
div.align = "123";
console.log(div.align);

let m = akvm.toolsFunc.createEvent("mouseup", MouseEvent,false,{x:100,y:200});

// new Window();

try{
    a.b;
}catch (e){
    debugger;
}

