let _div_dom = {};
_div_dom.__proto__ = {};
Object.defineProperty(_div_dom.__proto__, "align", {
    get: function () {
        h_log("_div_dom.__proto__ align get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_div_dom.__proto__ align set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
HTMLDivElement = function () {
    h_log("_div_dom.__proto__ constructor value [call]", "arg:", arguments)
    if (arguments.length && arguments[0] === "h_div") {
        this.tag_arg = arguments[1]
        return
    }
    throw TypeError("Illegal constructor")
};
HTMLDivElement.prototype = _div_dom.__proto__;
Object.defineProperty(_div_dom.__proto__, "constructor", {
    value: HTMLDivElement,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(_div_dom.__proto__, Symbol.toStringTag, {
    value: "HTMLDivElement",
    writable: false,
    enumerable: false,
    configurable: true,
});
_div_dom.__proto__.__proto__ = HTMLElement.prototype;


let _script_dom = {};
_script_dom.__proto__ = {};
Object.defineProperty(_script_dom.__proto__, "src", {
    get: function () {
        h_log("_script_dom.__proto__ src get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_script_dom.__proto__ src set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_script_dom.__proto__, "type", {
    get: function () {
        h_log("_script_dom.__proto__ type get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_script_dom.__proto__ type set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_script_dom.__proto__, "noModule", {
    get: function () {
        h_log("_script_dom.__proto__ noModule get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_script_dom.__proto__ noModule set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_script_dom.__proto__, "charset", {
    get: function () {
        h_log("_script_dom.__proto__ charset get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_script_dom.__proto__ charset set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_script_dom.__proto__, "async", {
    get: function () {
        h_log("_script_dom.__proto__ async get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_script_dom.__proto__ async set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_script_dom.__proto__, "defer", {
    get: function () {
        h_log("_script_dom.__proto__ defer get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_script_dom.__proto__ defer set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_script_dom.__proto__, "crossOrigin", {
    get: function () {
        h_log("_script_dom.__proto__ crossOrigin get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_script_dom.__proto__ crossOrigin set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_script_dom.__proto__, "text", {
    get: function () {
        h_log("_script_dom.__proto__ text get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_script_dom.__proto__ text set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_script_dom.__proto__, "referrerPolicy", {
    get: function () {
        h_log("_script_dom.__proto__ referrerPolicy get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_script_dom.__proto__ referrerPolicy set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_script_dom.__proto__, "fetchPriority", {
    get: function () {
        h_log("_script_dom.__proto__ fetchPriority get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_script_dom.__proto__ fetchPriority set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_script_dom.__proto__, "event", {
    get: function () {
        h_log("_script_dom.__proto__ event get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_script_dom.__proto__ event set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_script_dom.__proto__, "htmlFor", {
    get: function () {
        h_log("_script_dom.__proto__ htmlFor get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_script_dom.__proto__ htmlFor set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_script_dom.__proto__, "integrity", {
    get: function () {
        h_log("_script_dom.__proto__ integrity get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_script_dom.__proto__ integrity set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_script_dom.__proto__, "blocking", {
    get: function () {
        h_log("_script_dom.__proto__ blocking get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_script_dom.__proto__ blocking set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
HTMLScriptElement = function () {
    this.tag_arg = arguments[0]
    h_log("_script_dom.__proto__ constructor value [call]", "arg:", arguments)
};
HTMLScriptElement.prototype = _script_dom.__proto__;
Object.defineProperty(_script_dom.__proto__, "constructor", {
    value: HTMLScriptElement,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(_script_dom.__proto__, "attributionSrc", {
    get: function () {
        h_log("_script_dom.__proto__ attributionSrc get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_script_dom.__proto__ attributionSrc set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_script_dom.__proto__, Symbol.toStringTag, {
    value: "HTMLScriptElement",
    writable: false,
    enumerable: false,
    configurable: true,
});
_script_dom.__proto__.__proto__ = HTMLElement.prototype;


let _body_dom = {};
_body_dom.__proto__ = {};
Object.defineProperty(_body_dom.__proto__, "text", {
    get: function () {
        h_log("_body_dom.__proto__ text get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ text set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "link", {
    get: function () {
        h_log("_body_dom.__proto__ link get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ link set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "vLink", {
    get: function () {
        h_log("_body_dom.__proto__ vLink get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ vLink set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "aLink", {
    get: function () {
        h_log("_body_dom.__proto__ aLink get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ aLink set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "bgColor", {
    get: function () {
        h_log("_body_dom.__proto__ bgColor get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ bgColor set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "background", {
    get: function () {
        h_log("_body_dom.__proto__ background get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ background set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onblur", {
    get: function () {
        h_log("_body_dom.__proto__ onblur get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onblur set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onerror", {
    get: function () {
        h_log("_body_dom.__proto__ onerror get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onerror set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onfocus", {
    get: function () {
        h_log("_body_dom.__proto__ onfocus get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onfocus set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onload", {
    get: function () {
        h_log("_body_dom.__proto__ onload get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onload set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onresize", {
    get: function () {
        h_log("_body_dom.__proto__ onresize get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onresize set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onscroll", {
    get: function () {
        h_log("_body_dom.__proto__ onscroll get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onscroll set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onafterprint", {
    get: function () {
        h_log("_body_dom.__proto__ onafterprint get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onafterprint set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onbeforeprint", {
    get: function () {
        h_log("_body_dom.__proto__ onbeforeprint get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onbeforeprint set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onbeforeunload", {
    get: function () {
        h_log("_body_dom.__proto__ onbeforeunload get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onbeforeunload set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onhashchange", {
    get: function () {
        h_log("_body_dom.__proto__ onhashchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onhashchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onlanguagechange", {
    get: function () {
        h_log("_body_dom.__proto__ onlanguagechange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onlanguagechange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onmessage", {
    get: function () {
        h_log("_body_dom.__proto__ onmessage get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onmessage set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onmessageerror", {
    get: function () {
        h_log("_body_dom.__proto__ onmessageerror get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onmessageerror set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onoffline", {
    get: function () {
        h_log("_body_dom.__proto__ onoffline get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onoffline set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "ononline", {
    get: function () {
        h_log("_body_dom.__proto__ ononline get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ ononline set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onpagehide", {
    get: function () {
        h_log("_body_dom.__proto__ onpagehide get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onpagehide set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onpageshow", {
    get: function () {
        h_log("_body_dom.__proto__ onpageshow get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onpageshow set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onpopstate", {
    get: function () {
        h_log("_body_dom.__proto__ onpopstate get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onpopstate set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onrejectionhandled", {
    get: function () {
        h_log("_body_dom.__proto__ onrejectionhandled get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onrejectionhandled set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onstorage", {
    get: function () {
        h_log("_body_dom.__proto__ onstorage get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onstorage set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onunhandledrejection", {
    get: function () {
        h_log("_body_dom.__proto__ onunhandledrejection get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onunhandledrejection set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_body_dom.__proto__, "onunload", {
    get: function () {
        h_log("_body_dom.__proto__ onunload get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_body_dom.__proto__ onunload set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
HTMLBodyElement = function () {
    h_log("_body_dom.__proto__ constructor value [call]", "arg:", arguments)
};
HTMLBodyElement.prototype = _body_dom.__proto__;
Object.defineProperty(_body_dom.__proto__, "constructor", {
    value: HTMLBodyElement,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(_body_dom.__proto__, Symbol.toStringTag, {
    value: "HTMLBodyElement",
    writable: false,
    enumerable: false,
    configurable: true,
});
_body_dom.__proto__.__proto__ = HTMLElement.prototype;


let _meta_dom = {};
_meta_dom.__proto__ = {};
Object.defineProperty(_meta_dom.__proto__, "name", {
    get: function () {
        h_log("_meta_dom.__proto__ name get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_meta_dom.__proto__ name set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_meta_dom.__proto__, "httpEquiv", {
    get: function () {
        h_log("_meta_dom.__proto__ httpEquiv get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_meta_dom.__proto__ httpEquiv set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_meta_dom.__proto__, "content", {
    get: function () {
        h_log("_meta_dom.__proto__ content get [call]", "arg:", arguments)
        if (this.tag_arg === "meta2") {
            return config_CONTENT
        }
    }, set: function () {
        h_log("_meta_dom.__proto__ content set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_meta_dom.__proto__, "media", {
    get: function () {
        h_log("_meta_dom.__proto__ media get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_meta_dom.__proto__ media set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_meta_dom.__proto__, "scheme", {
    get: function () {
        h_log("_meta_dom.__proto__ scheme get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_meta_dom.__proto__ scheme set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
HTMLMetaElement = function () {
    this.tag_arg = arguments[0]
    h_log("_meta_dom.__proto__ constructor value [call]", "arg:", arguments)
};
HTMLMetaElement.prototype = _meta_dom.__proto__;
Object.defineProperty(_meta_dom.__proto__, "constructor", {
    value: HTMLMetaElement,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(_meta_dom.__proto__, Symbol.toStringTag, {
    value: "HTMLMetaElement",
    writable: false,
    enumerable: false,
    configurable: true,
});
_meta_dom.__proto__.__proto__ = HTMLElement.prototype;


let _head_dom = {};
_head_dom.__proto__ = {};
HTMLHeadElement = function () {
    h_log("_head_dom.__proto__ constructor value [call]", "arg:", arguments)
};
HTMLHeadElement.prototype = _head_dom.__proto__;
Object.defineProperty(_head_dom.__proto__, "constructor", {
    value: HTMLHeadElement,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(_head_dom.__proto__, Symbol.toStringTag, {
    value: "HTMLHeadElement",
    writable: false,
    enumerable: false,
    configurable: true,
});
_head_dom.__proto__.__proto__ = HTMLElement.prototype;

let _a_dom = {};
_a_dom.__proto__ = {};
Object.defineProperty(_a_dom.__proto__, "target", {
    get: function () {
        h_log("_a_dom.__proto__ target get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ target set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "download", {
    get: function () {
        h_log("_a_dom.__proto__ download get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ download set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "ping", {
    get: function () {
        h_log("_a_dom.__proto__ ping get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ ping set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "rel", {
    get: function () {
        h_log("_a_dom.__proto__ rel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ rel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "relList", {
    get: function () {
        h_log("_a_dom.__proto__ relList get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ relList set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "hreflang", {
    get: function () {
        h_log("_a_dom.__proto__ hreflang get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ hreflang set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "type", {
    get: function () {
        h_log("_a_dom.__proto__ type get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ type set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "referrerPolicy", {
    get: function () {
        h_log("_a_dom.__proto__ referrerPolicy get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ referrerPolicy set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "text", {
    get: function () {
        h_log("_a_dom.__proto__ text get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ text set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "coords", {
    get: function () {
        h_log("_a_dom.__proto__ coords get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ coords set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "charset", {
    get: function () {
        h_log("_a_dom.__proto__ charset get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ charset set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "name", {
    get: function () {
        h_log("_a_dom.__proto__ name get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ name set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "rev", {
    get: function () {
        h_log("_a_dom.__proto__ rev get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ rev set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "shape", {
    get: function () {
        h_log("_a_dom.__proto__ shape get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ shape set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "origin", {
    get: function () {
        h_log("_a_dom.__proto__ origin get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "protocol", {
    get: function () {
        h_log("_a_dom.__proto__ protocol get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ protocol set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "username", {
    get: function () {
        h_log("_a_dom.__proto__ username get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ username set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "password", {
    get: function () {
        h_log("_a_dom.__proto__ password get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ password set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "host", {
    get: function () {
        h_log("_a_dom.__proto__ host get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ host set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "hostname", {
    get: function () {
        h_log("_a_dom.__proto__ hostname get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ hostname set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "port", {
    get: function () {
        h_log("_a_dom.__proto__ port get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ port set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "pathname", {
    get: function () {
        h_log("_a_dom.__proto__ pathname get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ pathname set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "search", {
    get: function () {
        h_log("_a_dom.__proto__ search get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ search set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "hash", {
    get: function () {
        h_log("_a_dom.__proto__ hash get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ hash set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "href", {
    get: function () {
        h_log("_a_dom.__proto__ href get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ href set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "toString", {
    get: function () {
        h_log("[v] _a_dom.__proto__ toString value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _a_dom.__proto__ toString value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
HTMLAnchorElement = function () {
    h_log("_a_dom.__proto__ constructor value [call]", "arg:", arguments)
};
HTMLAnchorElement.prototype = _a_dom.__proto__;
Object.defineProperty(_a_dom.__proto__, "constructor", {
    value: HTMLAnchorElement,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "hrefTranslate", {
    get: function () {
        h_log("_a_dom.__proto__ hrefTranslate get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ hrefTranslate set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, "attributionSrc", {
    get: function () {
        h_log("_a_dom.__proto__ attributionSrc get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_a_dom.__proto__ attributionSrc set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_a_dom.__proto__, Symbol.toStringTag, {
    value: "HTMLAnchorElement",
    writable: false,
    enumerable: false,
    configurable: true,
});
_a_dom.__proto__.__proto__ = HTMLElement.prototype;


let _html_dom = {};
_html_dom.__proto__ = {};
Object.defineProperty(_html_dom.__proto__, "version", {
    get: function () {
        h_log("_html_dom.__proto__ version get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_html_dom.__proto__ version set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
HTMLHtmlElement = function () {
    h_log("_html_dom.__proto__ constructor value [call]", "arg:", arguments)
};
HTMLHtmlElement.prototype = _html_dom.__proto__;
Object.defineProperty(_html_dom.__proto__, "constructor", {
    value: HTMLHtmlElement,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(_html_dom.__proto__, Symbol.toStringTag, {
    value: "HTMLHtmlElement",
    writable: false,
    enumerable: false,
    configurable: true,
});
_html_dom.__proto__.__proto__ = HTMLElement.prototype;


