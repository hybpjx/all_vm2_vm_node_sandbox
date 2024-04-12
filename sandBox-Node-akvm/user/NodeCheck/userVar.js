!function(){// 初始化
    location.href = "https://baidu.com";
    akvm.toolsFunc.tryHook = function (e){// 调用栈修改
        // akvm.toolsFunc.log(e.message);
        e.stack = 'Error\n    at <anonymous>:1:1';
    }
    // 创建全局html对象
    let html = akvm.toolsFunc.createObj({},HTMLHtmlElement);
    // 隐藏到document对象下
    akvm.toolsFunc.setHideProp(document,"html", html);
    akvm.config.print = true;// 是否输出日志
}();


!function(){
    akvm.envFunc.Navigator_userAgent_get = function (){
        // plugins检测需要代理，直接改成非chrome UA
        return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/115.0.0.0 Safari/537.36";
    }
    akvm.envFunc.globalThis_MouseEvent = function (){
        return akvm.toolsFunc.createEvent(arguments[0], MouseEvent,false);
    }
    akvm.envFunc.Event_type_get = function (){
        return akvm.toolsFunc.getHideProp(obj,"type");
    }
    akvm.envFunc.HTMLAllCollection_length_get = function (){
        return 1;
    }
    akvm.envFunc.Document_all_get = function(){
        let all = akvm.toolsFunc.getHideProp(this,"all"); // 获取document对象的隐藏属性all，默认位undefined
        if(all === undefined){// 第一次执行document.all时创建特殊对象
            let obj = new akvm.toolsFunc.all();
            obj[0] = akvm.toolsFunc.createObj({},HTMLBodyElement);// 创建类型为HTMLBodyElement的对象
            all = akvm.toolsFunc.createObj(obj, HTMLAllCollection);// 创建类型为HTMLAllCollection的对象
            akvm.toolsFunc.setHideProp(this,"all",all);// 设置document对象的隐藏属性all，再次获取时，直接返回
        }
        return all;
    }
}();
