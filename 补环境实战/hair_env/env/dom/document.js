let _document = {};
Object.defineProperty(_document, "location", {
    get: function () {
        h_log("_document location get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document location set [call]", "arg:", arguments)
    }, enumerable: true, configurable: false,
});
_document.__proto__ = {};
HTMLDocument = function () {
    h_log("_document.__proto__ constructor value [call]", "arg:", arguments)
};
HTMLDocument.prototype = _document.__proto__;
Object.defineProperty(_document.__proto__, "constructor", {
    value: HTMLDocument,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(_document.__proto__, Symbol.toStringTag, {
    value: "HTMLDocument",
    writable: false,
    enumerable: false,
    configurable: true,
});
_document.__proto__.__proto__ = {};
Object.defineProperty(_document.__proto__.__proto__, "implementation", {
    get: function () {
        h_log("_document.__proto__.__proto__ implementation get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "URL", {
    get: function () {
        h_log("_document.__proto__.__proto__ URL get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "documentURI", {
    get: function () {
        h_log("_document.__proto__.__proto__ documentURI get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "compatMode", {
    get: function () {
        h_log("_document.__proto__.__proto__ compatMode get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "characterSet", {
    get: function () {
        h_log("_document.__proto__.__proto__ characterSet get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "charset", {
    get: function () {
        h_log("_document.__proto__.__proto__ charset get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "inputEncoding", {
    get: function () {
        h_log("_document.__proto__.__proto__ inputEncoding get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "contentType", {
    get: function () {
        h_log("_document.__proto__.__proto__ contentType get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "doctype", {
    get: function () {
        h_log("_document.__proto__.__proto__ doctype get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "documentElement", {
    get: function () {
        h_log("_document.__proto__.__proto__ documentElement get [call]", "arg:", arguments)

        return undefined
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "xmlEncoding", {
    get: function () {
        h_log("_document.__proto__.__proto__ xmlEncoding get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "xmlVersion", {
    get: function () {
        h_log("_document.__proto__.__proto__ xmlVersion get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ xmlVersion set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "xmlStandalone", {
    get: function () {
        h_log("_document.__proto__.__proto__ xmlStandalone get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ xmlStandalone set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "domain", {
    get: function () {
        h_log("_document.__proto__.__proto__ domain get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ domain set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "referrer", {
    get: function () {
        h_log("_document.__proto__.__proto__ referrer get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
let _value_cookie = ""
let _document_cookie_obj = {}
Object.defineProperty(_document.__proto__.__proto__, "cookie", {
    get: function () {
        h_log("_document.__proto__.__proto__ cookie get [call]", "arg:", arguments)
        return _value_cookie
    }, set: function (newValue) {
        h_log("_document.__proto__.__proto__ cookie set [call]", "arg:", arguments)
        let ck = newValue.split('=');
        if (ck.length >= 2) {
            let ck_key = ck[0];
            let ck_value = ck[1];
            if (ck_value.indexOf(';') != -1) {
                ck_value = ck[1].split(';')[0];
            } else {
                ck_value = ck[1];
            }
            _document_cookie_obj[ck_key] = ck_value
        }
        _value_cookie = newValue
        h_log(_document.cookie)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "lastModified", {
    get: function () {
        h_log("_document.__proto__.__proto__ lastModified get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "readyState", {
    get: function () {
        h_log("_document.__proto__.__proto__ readyState get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "title", {
    get: function () {
        h_log("_document.__proto__.__proto__ title get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ title set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "dir", {
    get: function () {
        h_log("_document.__proto__.__proto__ dir get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ dir set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "body", {
    get: function () {
        h_log("_document.__proto__.__proto__ body get [call]", "arg:", arguments)
        return new HTMLBodyElement()
    }, set: function () {
        h_log("_document.__proto__.__proto__ body set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "head", {
    get: function () {
        h_log("_document.__proto__.__proto__ head get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "images", {
    get: function () {
        h_log("_document.__proto__.__proto__ images get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "embeds", {
    get: function () {
        h_log("_document.__proto__.__proto__ embeds get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "plugins", {
    get: function () {
        h_log("_document.__proto__.__proto__ plugins get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "links", {
    get: function () {
        h_log("_document.__proto__.__proto__ links get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "forms", {
    get: function () {
        h_log("_document.__proto__.__proto__ forms get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "scripts", {
    get: function () {
        h_log("_document.__proto__.__proto__ scripts get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "currentScript", {
    get: function () {
        h_log("_document.__proto__.__proto__ currentScript get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "defaultView", {
    get: function () {
        h_log("_document.__proto__.__proto__ defaultView get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "designMode", {
    get: function () {
        h_log("_document.__proto__.__proto__ designMode get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ designMode set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onreadystatechange", {
    get: function () {
        h_log("_document.__proto__.__proto__ onreadystatechange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onreadystatechange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "anchors", {
    get: function () {
        h_log("_document.__proto__.__proto__ anchors get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "applets", {
    get: function () {
        h_log("_document.__proto__.__proto__ applets get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "fgColor", {
    get: function () {
        h_log("_document.__proto__.__proto__ fgColor get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ fgColor set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "linkColor", {
    get: function () {
        h_log("_document.__proto__.__proto__ linkColor get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ linkColor set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "vlinkColor", {
    get: function () {
        h_log("_document.__proto__.__proto__ vlinkColor get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ vlinkColor set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "alinkColor", {
    get: function () {
        h_log("_document.__proto__.__proto__ alinkColor get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ alinkColor set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "bgColor", {
    get: function () {
        h_log("_document.__proto__.__proto__ bgColor get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ bgColor set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "all", {
    get: function () {
        h_log("_document.__proto__.__proto__ all get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "scrollingElement", {
    get: function () {
        h_log("_document.__proto__.__proto__ scrollingElement get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointerlockchange", {
    get: function () {
        h_log("_document.__proto__.__proto__ onpointerlockchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onpointerlockchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointerlockerror", {
    get: function () {
        h_log("_document.__proto__.__proto__ onpointerlockerror get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onpointerlockerror set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "hidden", {
    get: function () {
        h_log("_document.__proto__.__proto__ hidden get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "visibilityState", {
    get: function () {
        h_log("_document.__proto__.__proto__ visibilityState get [call]", "arg:", arguments)
        return 'visible'
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "wasDiscarded", {
    get: function () {
        h_log("_document.__proto__.__proto__ wasDiscarded get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "prerendering", {
    get: function () {
        h_log("_document.__proto__.__proto__ prerendering get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "featurePolicy", {
    get: function () {
        h_log("_document.__proto__.__proto__ featurePolicy get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "webkitVisibilityState", {
    get: function () {
        h_log("_document.__proto__.__proto__ webkitVisibilityState get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "webkitHidden", {
    get: function () {
        h_log("_document.__proto__.__proto__ webkitHidden get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onbeforecopy", {
    get: function () {
        h_log("_document.__proto__.__proto__ onbeforecopy get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onbeforecopy set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onbeforecut", {
    get: function () {
        h_log("_document.__proto__.__proto__ onbeforecut get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onbeforecut set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onbeforepaste", {
    get: function () {
        h_log("_document.__proto__.__proto__ onbeforepaste get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onbeforepaste set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onfreeze", {
    get: function () {
        h_log("_document.__proto__.__proto__ onfreeze get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onfreeze set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onprerenderingchange", {
    get: function () {
        h_log("_document.__proto__.__proto__ onprerenderingchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onprerenderingchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onresume", {
    get: function () {
        h_log("_document.__proto__.__proto__ onresume get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onresume set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onsearch", {
    get: function () {
        h_log("_document.__proto__.__proto__ onsearch get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onsearch set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onvisibilitychange", {
    get: function () {
        h_log("_document.__proto__.__proto__ onvisibilitychange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onvisibilitychange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "fullscreenEnabled", {
    get: function () {
        h_log("_document.__proto__.__proto__ fullscreenEnabled get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ fullscreenEnabled set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "fullscreen", {
    get: function () {
        h_log("_document.__proto__.__proto__ fullscreen get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ fullscreen set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onfullscreenchange", {
    get: function () {
        h_log("_document.__proto__.__proto__ onfullscreenchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onfullscreenchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onfullscreenerror", {
    get: function () {
        h_log("_document.__proto__.__proto__ onfullscreenerror get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onfullscreenerror set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "webkitIsFullScreen", {
    get: function () {
        h_log("_document.__proto__.__proto__ webkitIsFullScreen get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "webkitCurrentFullScreenElement", {
    get: function () {
        h_log("_document.__proto__.__proto__ webkitCurrentFullScreenElement get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "webkitFullscreenEnabled", {
    get: function () {
        h_log("_document.__proto__.__proto__ webkitFullscreenEnabled get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "webkitFullscreenElement", {
    get: function () {
        h_log("_document.__proto__.__proto__ webkitFullscreenElement get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onwebkitfullscreenchange", {
    get: function () {
        h_log("_document.__proto__.__proto__ onwebkitfullscreenchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onwebkitfullscreenchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onwebkitfullscreenerror", {
    get: function () {
        h_log("_document.__proto__.__proto__ onwebkitfullscreenerror get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onwebkitfullscreenerror set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "rootElement", {
    get: function () {
        h_log("_document.__proto__.__proto__ rootElement get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "pictureInPictureEnabled", {
    get: function () {
        h_log("_document.__proto__.__proto__ pictureInPictureEnabled get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onbeforexrselect", {
    get: function () {
        h_log("_document.__proto__.__proto__ onbeforexrselect get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onbeforexrselect set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onabort", {
    get: function () {
        h_log("_document.__proto__.__proto__ onabort get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onabort set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onbeforeinput", {
    get: function () {
        h_log("_document.__proto__.__proto__ onbeforeinput get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onbeforeinput set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onbeforetoggle", {
    get: function () {
        h_log("_document.__proto__.__proto__ onbeforetoggle get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onbeforetoggle set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onblur", {
    get: function () {
        h_log("_document.__proto__.__proto__ onblur get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onblur set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oncancel", {
    get: function () {
        h_log("_document.__proto__.__proto__ oncancel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ oncancel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oncanplay", {
    get: function () {
        h_log("_document.__proto__.__proto__ oncanplay get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ oncanplay set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oncanplaythrough", {
    get: function () {
        h_log("_document.__proto__.__proto__ oncanplaythrough get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ oncanplaythrough set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onchange", {
    get: function () {
        h_log("_document.__proto__.__proto__ onchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onclick", {
    get: function () {
        h_log("_document.__proto__.__proto__ onclick get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onclick set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onclose", {
    get: function () {
        h_log("_document.__proto__.__proto__ onclose get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onclose set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oncontextlost", {
    get: function () {
        h_log("_document.__proto__.__proto__ oncontextlost get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ oncontextlost set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oncontextmenu", {
    get: function () {
        h_log("_document.__proto__.__proto__ oncontextmenu get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ oncontextmenu set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oncontextrestored", {
    get: function () {
        h_log("_document.__proto__.__proto__ oncontextrestored get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ oncontextrestored set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oncuechange", {
    get: function () {
        h_log("_document.__proto__.__proto__ oncuechange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ oncuechange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ondblclick", {
    get: function () {
        h_log("_document.__proto__.__proto__ ondblclick get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ ondblclick set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ondrag", {
    get: function () {
        h_log("_document.__proto__.__proto__ ondrag get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ ondrag set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ondragend", {
    get: function () {
        h_log("_document.__proto__.__proto__ ondragend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ ondragend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ondragenter", {
    get: function () {
        h_log("_document.__proto__.__proto__ ondragenter get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ ondragenter set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ondragleave", {
    get: function () {
        h_log("_document.__proto__.__proto__ ondragleave get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ ondragleave set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ondragover", {
    get: function () {
        h_log("_document.__proto__.__proto__ ondragover get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ ondragover set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ondragstart", {
    get: function () {
        h_log("_document.__proto__.__proto__ ondragstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ ondragstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ondrop", {
    get: function () {
        h_log("_document.__proto__.__proto__ ondrop get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ ondrop set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ondurationchange", {
    get: function () {
        h_log("_document.__proto__.__proto__ ondurationchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ ondurationchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onemptied", {
    get: function () {
        h_log("_document.__proto__.__proto__ onemptied get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onemptied set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onended", {
    get: function () {
        h_log("_document.__proto__.__proto__ onended get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onended set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onerror", {
    get: function () {
        h_log("_document.__proto__.__proto__ onerror get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onerror set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onfocus", {
    get: function () {
        h_log("_document.__proto__.__proto__ onfocus get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onfocus set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onformdata", {
    get: function () {
        h_log("_document.__proto__.__proto__ onformdata get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onformdata set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oninput", {
    get: function () {
        h_log("_document.__proto__.__proto__ oninput get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ oninput set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oninvalid", {
    get: function () {
        h_log("_document.__proto__.__proto__ oninvalid get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ oninvalid set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onkeydown", {
    get: function () {
        h_log("_document.__proto__.__proto__ onkeydown get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onkeydown set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onkeypress", {
    get: function () {
        h_log("_document.__proto__.__proto__ onkeypress get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onkeypress set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onkeyup", {
    get: function () {
        h_log("_document.__proto__.__proto__ onkeyup get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onkeyup set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onload", {
    get: function () {
        h_log("_document.__proto__.__proto__ onload get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onload set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onloadeddata", {
    get: function () {
        h_log("_document.__proto__.__proto__ onloadeddata get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onloadeddata set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onloadedmetadata", {
    get: function () {
        h_log("_document.__proto__.__proto__ onloadedmetadata get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onloadedmetadata set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onloadstart", {
    get: function () {
        h_log("_document.__proto__.__proto__ onloadstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onloadstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onmousedown", {
    get: function () {
        h_log("_document.__proto__.__proto__ onmousedown get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onmousedown set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onmouseenter", {
    get: function () {
        h_log("_document.__proto__.__proto__ onmouseenter get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onmouseenter set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onmouseleave", {
    get: function () {
        h_log("_document.__proto__.__proto__ onmouseleave get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onmouseleave set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onmousemove", {
    get: function () {
        h_log("_document.__proto__.__proto__ onmousemove get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onmousemove set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onmouseout", {
    get: function () {
        h_log("_document.__proto__.__proto__ onmouseout get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onmouseout set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onmouseover", {
    get: function () {
        h_log("_document.__proto__.__proto__ onmouseover get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onmouseover set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onmouseup", {
    get: function () {
        h_log("_document.__proto__.__proto__ onmouseup get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onmouseup set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onmousewheel", {
    get: function () {
        h_log("_document.__proto__.__proto__ onmousewheel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onmousewheel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpause", {
    get: function () {
        h_log("_document.__proto__.__proto__ onpause get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onpause set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onplay", {
    get: function () {
        h_log("_document.__proto__.__proto__ onplay get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onplay set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onplaying", {
    get: function () {
        h_log("_document.__proto__.__proto__ onplaying get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onplaying set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onprogress", {
    get: function () {
        h_log("_document.__proto__.__proto__ onprogress get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onprogress set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onratechange", {
    get: function () {
        h_log("_document.__proto__.__proto__ onratechange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onratechange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onreset", {
    get: function () {
        h_log("_document.__proto__.__proto__ onreset get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onreset set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onresize", {
    get: function () {
        h_log("_document.__proto__.__proto__ onresize get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onresize set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onscroll", {
    get: function () {
        h_log("_document.__proto__.__proto__ onscroll get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onscroll set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onsecuritypolicyviolation", {
    get: function () {
        h_log("_document.__proto__.__proto__ onsecuritypolicyviolation get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onsecuritypolicyviolation set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onseeked", {
    get: function () {
        h_log("_document.__proto__.__proto__ onseeked get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onseeked set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onseeking", {
    get: function () {
        h_log("_document.__proto__.__proto__ onseeking get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onseeking set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onselect", {
    get: function () {
        h_log("_document.__proto__.__proto__ onselect get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onselect set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onslotchange", {
    get: function () {
        h_log("_document.__proto__.__proto__ onslotchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onslotchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onstalled", {
    get: function () {
        h_log("_document.__proto__.__proto__ onstalled get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onstalled set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onsubmit", {
    get: function () {
        h_log("_document.__proto__.__proto__ onsubmit get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onsubmit set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onsuspend", {
    get: function () {
        h_log("_document.__proto__.__proto__ onsuspend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onsuspend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ontimeupdate", {
    get: function () {
        h_log("_document.__proto__.__proto__ ontimeupdate get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ ontimeupdate set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ontoggle", {
    get: function () {
        h_log("_document.__proto__.__proto__ ontoggle get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ ontoggle set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onvolumechange", {
    get: function () {
        h_log("_document.__proto__.__proto__ onvolumechange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onvolumechange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onwaiting", {
    get: function () {
        h_log("_document.__proto__.__proto__ onwaiting get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onwaiting set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onwebkitanimationend", {
    get: function () {
        h_log("_document.__proto__.__proto__ onwebkitanimationend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onwebkitanimationend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onwebkitanimationiteration", {
    get: function () {
        h_log("_document.__proto__.__proto__ onwebkitanimationiteration get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onwebkitanimationiteration set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onwebkitanimationstart", {
    get: function () {
        h_log("_document.__proto__.__proto__ onwebkitanimationstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onwebkitanimationstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onwebkittransitionend", {
    get: function () {
        h_log("_document.__proto__.__proto__ onwebkittransitionend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onwebkittransitionend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onwheel", {
    get: function () {
        h_log("_document.__proto__.__proto__ onwheel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onwheel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onauxclick", {
    get: function () {
        h_log("_document.__proto__.__proto__ onauxclick get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onauxclick set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ongotpointercapture", {
    get: function () {
        h_log("_document.__proto__.__proto__ ongotpointercapture get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ ongotpointercapture set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onlostpointercapture", {
    get: function () {
        h_log("_document.__proto__.__proto__ onlostpointercapture get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onlostpointercapture set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointerdown", {
    get: function () {
        h_log("_document.__proto__.__proto__ onpointerdown get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onpointerdown set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointermove", {
    get: function () {
        h_log("_document.__proto__.__proto__ onpointermove get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onpointermove set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointerrawupdate", {
    get: function () {
        h_log("_document.__proto__.__proto__ onpointerrawupdate get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onpointerrawupdate set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointerup", {
    get: function () {
        h_log("_document.__proto__.__proto__ onpointerup get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onpointerup set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointercancel", {
    get: function () {
        h_log("_document.__proto__.__proto__ onpointercancel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onpointercancel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointerover", {
    get: function () {
        h_log("_document.__proto__.__proto__ onpointerover get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onpointerover set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointerout", {
    get: function () {
        h_log("_document.__proto__.__proto__ onpointerout get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onpointerout set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointerenter", {
    get: function () {
        h_log("_document.__proto__.__proto__ onpointerenter get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onpointerenter set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointerleave", {
    get: function () {
        h_log("_document.__proto__.__proto__ onpointerleave get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onpointerleave set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onselectstart", {
    get: function () {
        h_log("_document.__proto__.__proto__ onselectstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onselectstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onselectionchange", {
    get: function () {
        h_log("_document.__proto__.__proto__ onselectionchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onselectionchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onanimationend", {
    get: function () {
        h_log("_document.__proto__.__proto__ onanimationend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onanimationend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onanimationiteration", {
    get: function () {
        h_log("_document.__proto__.__proto__ onanimationiteration get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onanimationiteration set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onanimationstart", {
    get: function () {
        h_log("_document.__proto__.__proto__ onanimationstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onanimationstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ontransitionrun", {
    get: function () {
        h_log("_document.__proto__.__proto__ ontransitionrun get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ ontransitionrun set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ontransitionstart", {
    get: function () {
        h_log("_document.__proto__.__proto__ ontransitionstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ ontransitionstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ontransitionend", {
    get: function () {
        h_log("_document.__proto__.__proto__ ontransitionend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ ontransitionend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ontransitioncancel", {
    get: function () {
        h_log("_document.__proto__.__proto__ ontransitioncancel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ ontransitioncancel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oncopy", {
    get: function () {
        h_log("_document.__proto__.__proto__ oncopy get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ oncopy set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oncut", {
    get: function () {
        h_log("_document.__proto__.__proto__ oncut get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ oncut set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpaste", {
    get: function () {
        h_log("_document.__proto__.__proto__ onpaste get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onpaste set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "children", {
    get: function () {
        h_log("_document.__proto__.__proto__ children get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "firstElementChild", {
    get: function () {
        h_log("_document.__proto__.__proto__ firstElementChild get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "lastElementChild", {
    get: function () {
        h_log("_document.__proto__.__proto__ lastElementChild get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "childElementCount", {
    get: function () {
        h_log("_document.__proto__.__proto__ childElementCount get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "activeElement", {
    get: function () {
        h_log("_document.__proto__.__proto__ activeElement get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "styleSheets", {
    get: function () {
        h_log("_document.__proto__.__proto__ styleSheets get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "pointerLockElement", {
    get: function () {
        h_log("_document.__proto__.__proto__ pointerLockElement get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "fullscreenElement", {
    get: function () {
        h_log("_document.__proto__.__proto__ fullscreenElement get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ fullscreenElement set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "adoptedStyleSheets", {
    get: function () {
        h_log("_document.__proto__.__proto__ adoptedStyleSheets get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ adoptedStyleSheets set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "pictureInPictureElement", {
    get: function () {
        h_log("_document.__proto__.__proto__ pictureInPictureElement get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "fonts", {
    get: function () {
        h_log("_document.__proto__.__proto__ fonts get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "adoptNode", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ adoptNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ adoptNode value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "append", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ append value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ append value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "captureEvents", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ captureEvents value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ captureEvents value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "caretRangeFromPoint", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ caretRangeFromPoint value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ caretRangeFromPoint value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "clear", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ clear value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ clear value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "close", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ close value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ close value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "createAttribute", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ createAttribute value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ createAttribute value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "createAttributeNS", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ createAttributeNS value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ createAttributeNS value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "createCDATASection", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ createCDATASection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ createCDATASection value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "createComment", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ createComment value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ createComment value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "createDocumentFragment", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ createDocumentFragment value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ createDocumentFragment value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "createElement", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ createElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ createElement value [call]", "arg:", arguments);
            debugger;
            if (arguments[0] === "div") {
                return new HTMLDivElement("h_div", "div1")
            } else if (arguments[0] === "a") {
                return new HTMLAnchorElement("a", "a1")
            }

        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "createElementNS", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ createElementNS value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ createElementNS value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "createEvent", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ createEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ createEvent value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});

let _createExpression = {};
_createExpression.__proto__ = {};
Object.defineProperty(_createExpression.__proto__, "evaluate", {
    get: function () {
        h_log("[v] _createExpression.__proto__ evaluate value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _createExpression.__proto__ evaluate value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
XPathExpression = function () {
    h_log("_createExpression.__proto__ constructor value [call]", "arg:", arguments)
};
XPathExpression.prototype = _createExpression.__proto__;
Object.defineProperty(_createExpression.__proto__, "constructor", {
    value: XPathExpression,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(_createExpression.__proto__, Symbol.toStringTag, {
    value: "XPathExpression",
    writable: false,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "createExpression", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ createExpression value [get]", "arg:", arguments);
        return function (a, b) {
            h_log("[v] _document.__proto__.__proto__ createExpression value [call]", "arg:", arguments)
            debugger;
            return new XPathExpression(a, b)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "createNSResolver", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ createNSResolver value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ createNSResolver value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "createNodeIterator", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ createNodeIterator value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ createNodeIterator value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "createProcessingInstruction", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ createProcessingInstruction value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ createProcessingInstruction value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "createRange", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ createRange value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ createRange value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "createTextNode", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ createTextNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ createTextNode value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "createTreeWalker", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ createTreeWalker value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ createTreeWalker value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "elementFromPoint", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ elementFromPoint value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ elementFromPoint value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "elementsFromPoint", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ elementsFromPoint value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ elementsFromPoint value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "evaluate", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ evaluate value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ evaluate value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "execCommand", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ execCommand value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ execCommand value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "exitFullscreen", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ exitFullscreen value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ exitFullscreen value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "exitPictureInPicture", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ exitPictureInPicture value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ exitPictureInPicture value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "exitPointerLock", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ exitPointerLock value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ exitPointerLock value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "getElementById", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ getElementById value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ getElementById value [call]", "arg:", arguments)
            if (arguments[0] === "root-hammerhead-shadow-ui") {
                return null
            }

        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "getElementsByClassName", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ getElementsByClassName value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ getElementsByClassName value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "getElementsByName", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ getElementsByName value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ getElementsByName value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "getElementsByTagName", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ getElementsByTagName value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ getElementsByTagName value [call]", "arg:", arguments)
            if (arguments[0] === "script") {
                return [new HTMLScriptElement("script1"), new HTMLScriptElement("script2")]
            } else if (arguments[0] === "meta") {
                return [new HTMLMetaElement("meta1"), new HTMLMetaElement("meta2")]
            } else if (arguments[0] === "base") {
                return []
            }
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "getElementsByTagNameNS", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ getElementsByTagNameNS value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ getElementsByTagNameNS value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "getSelection", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ getSelection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ getSelection value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "hasFocus", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ hasFocus value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ hasFocus value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "importNode", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ importNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ importNode value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "open", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ open value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ open value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "prepend", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ prepend value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ prepend value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "queryCommandEnabled", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ queryCommandEnabled value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ queryCommandEnabled value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "queryCommandIndeterm", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ queryCommandIndeterm value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ queryCommandIndeterm value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "queryCommandState", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ queryCommandState value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ queryCommandState value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "queryCommandSupported", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ queryCommandSupported value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ queryCommandSupported value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "queryCommandValue", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ queryCommandValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ queryCommandValue value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "querySelector", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ querySelector value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ querySelector value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "querySelectorAll", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ querySelectorAll value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ querySelectorAll value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "releaseEvents", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ releaseEvents value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ releaseEvents value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "replaceChildren", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ replaceChildren value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ replaceChildren value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "startViewTransition", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ startViewTransition value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ startViewTransition value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "webkitCancelFullScreen", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ webkitCancelFullScreen value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ webkitCancelFullScreen value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "webkitExitFullscreen", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ webkitExitFullscreen value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ webkitExitFullscreen value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "write", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ write value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ write value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "writeln", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ writeln value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ writeln value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Document = function () {
    h_log("_document.__proto__.__proto__ constructor value [call]", "arg:", arguments)
};
Document.prototype = _document.__proto__.__proto__;
Object.defineProperty(_document.__proto__.__proto__, "constructor", {
    value: Document,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "fragmentDirective", {
    get: function () {
        h_log("_document.__proto__.__proto__ fragmentDirective get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onbeforematch", {
    get: function () {
        h_log("_document.__proto__.__proto__ onbeforematch get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onbeforematch set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "browsingTopics", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ browsingTopics value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ browsingTopics value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "hasPrivateToken", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ hasPrivateToken value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ hasPrivateToken value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "hasRedemptionRecord", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ hasRedemptionRecord value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ hasRedemptionRecord value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "requestStorageAccess", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ requestStorageAccess value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ requestStorageAccess value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "timeline", {
    get: function () {
        h_log("_document.__proto__.__proto__ timeline get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oncontentvisibilityautostatechange", {
    get: function () {
        h_log("_document.__proto__.__proto__ oncontentvisibilityautostatechange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ oncontentvisibilityautostatechange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onscrollend", {
    get: function () {
        h_log("_document.__proto__.__proto__ onscrollend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_document.__proto__.__proto__ onscrollend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "getAnimations", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ getAnimations value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ getAnimations value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "hasStorageAccess", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ hasStorageAccess value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ hasStorageAccess value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, "requestStorageAccessFor", {
    get: function () {
        h_log("[v] _document.__proto__.__proto__ requestStorageAccessFor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _document.__proto__.__proto__ requestStorageAccessFor value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_document.__proto__.__proto__, Symbol.toStringTag, {
    value: "Document",
    writable: false,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, Symbol.unscopables, {
    value: {},
    writable: false,
    enumerable: false,
    configurable: true,
});
_document.__proto__.__proto__.__proto__ = Node.prototype;