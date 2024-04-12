
debugger;
let win = akvm.sandBox.runCode("window;",this); // 第二个参数传入的内部top 和parent属性
akvm.toolsFunc.log("win === window", win === window);
akvm.toolsFunc.log("win.top === window",win.top === window);
akvm.toolsFunc.log("win.parent === window", win.parent === window);