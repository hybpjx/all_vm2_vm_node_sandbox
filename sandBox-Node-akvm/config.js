// 加载外部模块导入到vm中，sandBox导入
debugger;
!function(){
    akvm.sandBox = Object.assign({}, this.sandBox);
    akvm.toolsFunc.log = akvm.sandBox.log || console.log;
    delete SharedArrayBuffer;// v8
    delete this.sandBox;
}();