window = globalThis;
window.Object = Object;
window.Function = Function;
window.Array = Array;
window.Number = Number;
window.parseFloat = parseFloat;
window.parseInt = parseInt;
window.Infinity = Infinity;
window.NaN = NaN;
window.undefined = undefined;
window.Boolean = Boolean;
window.String = String;
window.Symbol = Symbol;
window.Date = Date;
window.Promise = Promise;
window.RegExp = RegExp;
window.Error = Error;
window.AggregateError = AggregateError;
window.EvalError = EvalError;
window.RangeError = RangeError;
window.ReferenceError = ReferenceError;
window.SyntaxError = SyntaxError;
window.TypeError = TypeError;
window.URIError = URIError;
window.globalThis = globalThis;
window.JSON = JSON;
window.Math = Math;
window.Intl = Intl;
window.ArrayBuffer = ArrayBuffer;
window.Atomics = Atomics;
window.Uint8Array = Uint8Array;
window.Int8Array = Int8Array;
window.Uint16Array = Uint16Array;
window.Int16Array = Int16Array;
window.Uint32Array = Uint32Array;
window.Int32Array = Int32Array;
window.Float32Array = Float32Array;
window.Float64Array = Float64Array;
window.Uint8ClampedArray = Uint8ClampedArray;
window.BigUint64Array = BigUint64Array;
window.BigInt64Array = BigInt64Array;
window.DataView = DataView;
window.Map = Map;
window.BigInt = BigInt;
window.Set = Set;
window.WeakMap = WeakMap;
window.WeakSet = WeakSet;
window.Proxy = Proxy;
window.Reflect = Reflect;
window.FinalizationRegistry = FinalizationRegistry;
window.WeakRef = WeakRef;
window.decodeURI = decodeURI;
window.decodeURIComponent = decodeURIComponent;
window.encodeURI = encodeURI;
window.encodeURIComponent = encodeURIComponent;
window.escape = escape;
window.unescape = unescape;
window.eval = eval;
window.isFinite = isFinite;
window.isNaN = isNaN;
window.console = console;
Object.defineProperty(window, "Option", {
    get: function () {
        h_log("[v] window Option value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Option value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Image", {
    get: function () {
        h_log("[v] window Image value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Image value [call]", "arg:", arguments);
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Audio", {
    get: function () {
        h_log("[v] window Audio value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Audio value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "webkitURL", {
    get: function () {
        h_log("[v] window webkitURL value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitURL value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "webkitRTCPeerConnection", {
    get: function () {
        h_log("[v] window webkitRTCPeerConnection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitRTCPeerConnection value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "webkitMediaStream", {
    get: function () {
        h_log("[v] window webkitMediaStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitMediaStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});


Object.defineProperty(window, "WebKitMutationObserver", {
    get: function () {
        h_log("[v] window WebKitMutationObserver value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebKitMutationObserver value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebKitCSSMatrix", {
    get: function () {
        h_log("[v] window WebKitCSSMatrix value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebKitCSSMatrix value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XSLTProcessor", {
    get: function () {
        h_log("[v] window XSLTProcessor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XSLTProcessor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XPathResult", {
    get: function () {
        h_log("[v] window XPathResult value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XPathResult value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XPathEvaluator", {
    get: function () {
        h_log("[v] window XPathEvaluator value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XPathEvaluator value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XMLSerializer", {
    get: function () {
        h_log("[v] window XMLSerializer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XMLSerializer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XMLHttpRequestUpload", {
    get: function () {
        h_log("[v] window XMLHttpRequestUpload value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XMLHttpRequestUpload value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XMLHttpRequestEventTarget", {
    get: function () {
        h_log("[v] window XMLHttpRequestEventTarget value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XMLHttpRequestEventTarget value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XMLHttpRequest", {
    get: function () {
        h_log("[v] window XMLHttpRequest value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XMLHttpRequest value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XMLDocument", {
    get: function () {
        h_log("[v] window XMLDocument value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XMLDocument value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WritableStreamDefaultWriter", {
    get: function () {
        h_log("[v] window WritableStreamDefaultWriter value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WritableStreamDefaultWriter value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WritableStreamDefaultController", {
    get: function () {
        h_log("[v] window WritableStreamDefaultController value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WritableStreamDefaultController value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WritableStream", {
    get: function () {
        h_log("[v] window WritableStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WritableStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Worker", {
    get: function () {
        h_log("[v] window Worker value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Worker value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WheelEvent", {
    get: function () {
        h_log("[v] window WheelEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WheelEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebSocket", {
    get: function () {
        h_log("[v] window WebSocket value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebSocket value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLVertexArrayObject", {
    get: function () {
        h_log("[v] window WebGLVertexArrayObject value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLVertexArrayObject value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLUniformLocation", {
    get: function () {
        h_log("[v] window WebGLUniformLocation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLUniformLocation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLTransformFeedback", {
    get: function () {
        h_log("[v] window WebGLTransformFeedback value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLTransformFeedback value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLTexture", {
    get: function () {
        h_log("[v] window WebGLTexture value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLTexture value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLSync", {
    get: function () {
        h_log("[v] window WebGLSync value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLSync value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLShaderPrecisionFormat", {
    get: function () {
        h_log("[v] window WebGLShaderPrecisionFormat value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLShaderPrecisionFormat value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLShader", {
    get: function () {
        h_log("[v] window WebGLShader value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLShader value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLSampler", {
    get: function () {
        h_log("[v] window WebGLSampler value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLSampler value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLRenderingContext", {
    get: function () {
        h_log("[v] window WebGLRenderingContext value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLRenderingContext value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLRenderbuffer", {
    get: function () {
        h_log("[v] window WebGLRenderbuffer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLRenderbuffer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLQuery", {
    get: function () {
        h_log("[v] window WebGLQuery value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLQuery value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLProgram", {
    get: function () {
        h_log("[v] window WebGLProgram value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLProgram value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLFramebuffer", {
    get: function () {
        h_log("[v] window WebGLFramebuffer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLFramebuffer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLContextEvent", {
    get: function () {
        h_log("[v] window WebGLContextEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLContextEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLBuffer", {
    get: function () {
        h_log("[v] window WebGLBuffer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLBuffer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLActiveInfo", {
    get: function () {
        h_log("[v] window WebGLActiveInfo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLActiveInfo value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGL2RenderingContext", {
    get: function () {
        h_log("[v] window WebGL2RenderingContext value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGL2RenderingContext value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WaveShaperNode", {
    get: function () {
        h_log("[v] window WaveShaperNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WaveShaperNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "VisualViewport", {
    get: function () {
        h_log("[v] window VisualViewport value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window VisualViewport value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "VirtualKeyboardGeometryChangeEvent", {
    get: function () {
        h_log("[v] window VirtualKeyboardGeometryChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window VirtualKeyboardGeometryChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ViewTransition", {
    get: function () {
        h_log("[v] window ViewTransition value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ViewTransition value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "VideoFrame", {
    get: function () {
        h_log("[v] window VideoFrame value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window VideoFrame value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "VideoColorSpace", {
    get: function () {
        h_log("[v] window VideoColorSpace value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window VideoColorSpace value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ValidityState", {
    get: function () {
        h_log("[v] window ValidityState value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ValidityState value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "VTTCue", {
    get: function () {
        h_log("[v] window VTTCue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window VTTCue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "UserActivation", {
    get: function () {
        h_log("[v] window UserActivation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window UserActivation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "URLSearchParams", {
    get: function () {
        h_log("[v] window URLSearchParams value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window URLSearchParams value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "URLPattern", {
    get: function () {
        h_log("[v] window URLPattern value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window URLPattern value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "URL", {
    get: function () {
        h_log("[v] window URL value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window URL value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "UIEvent", {
    get: function () {
        h_log("[v] window UIEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window UIEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TrustedTypePolicyFactory", {
    get: function () {
        h_log("[v] window TrustedTypePolicyFactory value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TrustedTypePolicyFactory value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TrustedTypePolicy", {
    get: function () {
        h_log("[v] window TrustedTypePolicy value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TrustedTypePolicy value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TrustedScriptURL", {
    get: function () {
        h_log("[v] window TrustedScriptURL value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TrustedScriptURL value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TrustedScript", {
    get: function () {
        h_log("[v] window TrustedScript value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TrustedScript value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TrustedHTML", {
    get: function () {
        h_log("[v] window TrustedHTML value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TrustedHTML value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TreeWalker", {
    get: function () {
        h_log("[v] window TreeWalker value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TreeWalker value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TransitionEvent", {
    get: function () {
        h_log("[v] window TransitionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TransitionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TransformStreamDefaultController", {
    get: function () {
        h_log("[v] window TransformStreamDefaultController value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TransformStreamDefaultController value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TransformStream", {
    get: function () {
        h_log("[v] window TransformStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TransformStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TrackEvent", {
    get: function () {
        h_log("[v] window TrackEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TrackEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TouchList", {
    get: function () {
        h_log("[v] window TouchList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TouchList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TouchEvent", {
    get: function () {
        h_log("[v] window TouchEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TouchEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Touch", {
    get: function () {
        h_log("[v] window Touch value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Touch value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ToggleEvent", {
    get: function () {
        h_log("[v] window ToggleEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ToggleEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TimeRanges", {
    get: function () {
        h_log("[v] window TimeRanges value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TimeRanges value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TextTrackList", {
    get: function () {
        h_log("[v] window TextTrackList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TextTrackList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TextTrackCueList", {
    get: function () {
        h_log("[v] window TextTrackCueList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TextTrackCueList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TextTrackCue", {
    get: function () {
        h_log("[v] window TextTrackCue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TextTrackCue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TextTrack", {
    get: function () {
        h_log("[v] window TextTrack value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TextTrack value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TextMetrics", {
    get: function () {
        h_log("[v] window TextMetrics value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TextMetrics value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TextEvent", {
    get: function () {
        h_log("[v] window TextEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TextEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TextEncoderStream", {
    get: function () {
        h_log("[v] window TextEncoderStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TextEncoderStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TextEncoder", {
    get: function () {
        h_log("[v] window TextEncoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TextEncoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TextDecoderStream", {
    get: function () {
        h_log("[v] window TextDecoderStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TextDecoderStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TextDecoder", {
    get: function () {
        h_log("[v] window TextDecoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TextDecoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Text", {
    get: function () {
        h_log("[v] window Text value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Text value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TaskSignal", {
    get: function () {
        h_log("[v] window TaskSignal value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TaskSignal value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TaskPriorityChangeEvent", {
    get: function () {
        h_log("[v] window TaskPriorityChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TaskPriorityChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TaskController", {
    get: function () {
        h_log("[v] window TaskController value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TaskController value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TaskAttributionTiming", {
    get: function () {
        h_log("[v] window TaskAttributionTiming value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TaskAttributionTiming value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SyncManager", {
    get: function () {
        h_log("[v] window SyncManager value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SyncManager value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SubmitEvent", {
    get: function () {
        h_log("[v] window SubmitEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SubmitEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "StyleSheetList", {
    get: function () {
        h_log("[v] window StyleSheetList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window StyleSheetList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "StyleSheet", {
    get: function () {
        h_log("[v] window StyleSheet value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window StyleSheet value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "StylePropertyMapReadOnly", {
    get: function () {
        h_log("[v] window StylePropertyMapReadOnly value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window StylePropertyMapReadOnly value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "StylePropertyMap", {
    get: function () {
        h_log("[v] window StylePropertyMap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window StylePropertyMap value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "StorageEvent", {
    get: function () {
        h_log("[v] window StorageEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window StorageEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Storage", {
    get: function () {
        h_log("[v] window Storage value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Storage value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "StereoPannerNode", {
    get: function () {
        h_log("[v] window StereoPannerNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window StereoPannerNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "StaticRange", {
    get: function () {
        h_log("[v] window StaticRange value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window StaticRange value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SourceBufferList", {
    get: function () {
        h_log("[v] window SourceBufferList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SourceBufferList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SourceBuffer", {
    get: function () {
        h_log("[v] window SourceBuffer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SourceBuffer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ShadowRoot", {
    get: function () {
        h_log("[v] window ShadowRoot value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ShadowRoot value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Selection", {
    get: function () {
        h_log("[v] window Selection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Selection value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SecurityPolicyViolationEvent", {
    get: function () {
        h_log("[v] window SecurityPolicyViolationEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SecurityPolicyViolationEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ScriptProcessorNode", {
    get: function () {
        h_log("[v] window ScriptProcessorNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ScriptProcessorNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ScreenOrientation", {
    get: function () {
        h_log("[v] window ScreenOrientation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ScreenOrientation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Screen", {
    get: function () {
        h_log("[v] window Screen value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Screen value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Scheduling", {
    get: function () {
        h_log("[v] window Scheduling value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Scheduling value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Scheduler", {
    get: function () {
        h_log("[v] window Scheduler value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Scheduler value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGViewElement", {
    get: function () {
        h_log("[v] window SVGViewElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGViewElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGUseElement", {
    get: function () {
        h_log("[v] window SVGUseElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGUseElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGUnitTypes", {
    get: function () {
        h_log("[v] window SVGUnitTypes value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGUnitTypes value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGTransformList", {
    get: function () {
        h_log("[v] window SVGTransformList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGTransformList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGTransform", {
    get: function () {
        h_log("[v] window SVGTransform value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGTransform value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGTitleElement", {
    get: function () {
        h_log("[v] window SVGTitleElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGTitleElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGTextPositioningElement", {
    get: function () {
        h_log("[v] window SVGTextPositioningElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGTextPositioningElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGTextPathElement", {
    get: function () {
        h_log("[v] window SVGTextPathElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGTextPathElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGTextElement", {
    get: function () {
        h_log("[v] window SVGTextElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGTextElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGTextContentElement", {
    get: function () {
        h_log("[v] window SVGTextContentElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGTextContentElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGTSpanElement", {
    get: function () {
        h_log("[v] window SVGTSpanElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGTSpanElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGSymbolElement", {
    get: function () {
        h_log("[v] window SVGSymbolElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGSymbolElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGSwitchElement", {
    get: function () {
        h_log("[v] window SVGSwitchElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGSwitchElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGStyleElement", {
    get: function () {
        h_log("[v] window SVGStyleElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGStyleElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGStringList", {
    get: function () {
        h_log("[v] window SVGStringList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGStringList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGStopElement", {
    get: function () {
        h_log("[v] window SVGStopElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGStopElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGSetElement", {
    get: function () {
        h_log("[v] window SVGSetElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGSetElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGScriptElement", {
    get: function () {
        h_log("[v] window SVGScriptElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGScriptElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGSVGElement", {
    get: function () {
        h_log("[v] window SVGSVGElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGSVGElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGRectElement", {
    get: function () {
        h_log("[v] window SVGRectElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGRectElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGRect", {
    get: function () {
        h_log("[v] window SVGRect value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGRect value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGRadialGradientElement", {
    get: function () {
        h_log("[v] window SVGRadialGradientElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGRadialGradientElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGPreserveAspectRatio", {
    get: function () {
        h_log("[v] window SVGPreserveAspectRatio value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGPreserveAspectRatio value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGPolylineElement", {
    get: function () {
        h_log("[v] window SVGPolylineElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGPolylineElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGPolygonElement", {
    get: function () {
        h_log("[v] window SVGPolygonElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGPolygonElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGPointList", {
    get: function () {
        h_log("[v] window SVGPointList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGPointList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGPoint", {
    get: function () {
        h_log("[v] window SVGPoint value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGPoint value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGPatternElement", {
    get: function () {
        h_log("[v] window SVGPatternElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGPatternElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGPathElement", {
    get: function () {
        h_log("[v] window SVGPathElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGPathElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGNumberList", {
    get: function () {
        h_log("[v] window SVGNumberList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGNumberList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGNumber", {
    get: function () {
        h_log("[v] window SVGNumber value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGNumber value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGMetadataElement", {
    get: function () {
        h_log("[v] window SVGMetadataElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGMetadataElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGMatrix", {
    get: function () {
        h_log("[v] window SVGMatrix value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGMatrix value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGMaskElement", {
    get: function () {
        h_log("[v] window SVGMaskElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGMaskElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGMarkerElement", {
    get: function () {
        h_log("[v] window SVGMarkerElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGMarkerElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGMPathElement", {
    get: function () {
        h_log("[v] window SVGMPathElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGMPathElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGLinearGradientElement", {
    get: function () {
        h_log("[v] window SVGLinearGradientElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGLinearGradientElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGLineElement", {
    get: function () {
        h_log("[v] window SVGLineElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGLineElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGLengthList", {
    get: function () {
        h_log("[v] window SVGLengthList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGLengthList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGLength", {
    get: function () {
        h_log("[v] window SVGLength value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGLength value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGImageElement", {
    get: function () {
        h_log("[v] window SVGImageElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGImageElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGGraphicsElement", {
    get: function () {
        h_log("[v] window SVGGraphicsElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGGraphicsElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGGradientElement", {
    get: function () {
        h_log("[v] window SVGGradientElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGGradientElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGGeometryElement", {
    get: function () {
        h_log("[v] window SVGGeometryElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGGeometryElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGGElement", {
    get: function () {
        h_log("[v] window SVGGElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGGElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGForeignObjectElement", {
    get: function () {
        h_log("[v] window SVGForeignObjectElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGForeignObjectElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFilterElement", {
    get: function () {
        h_log("[v] window SVGFilterElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFilterElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFETurbulenceElement", {
    get: function () {
        h_log("[v] window SVGFETurbulenceElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFETurbulenceElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFETileElement", {
    get: function () {
        h_log("[v] window SVGFETileElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFETileElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFESpotLightElement", {
    get: function () {
        h_log("[v] window SVGFESpotLightElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFESpotLightElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFESpecularLightingElement", {
    get: function () {
        h_log("[v] window SVGFESpecularLightingElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFESpecularLightingElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEPointLightElement", {
    get: function () {
        h_log("[v] window SVGFEPointLightElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEPointLightElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEOffsetElement", {
    get: function () {
        h_log("[v] window SVGFEOffsetElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEOffsetElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEMorphologyElement", {
    get: function () {
        h_log("[v] window SVGFEMorphologyElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEMorphologyElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEMergeNodeElement", {
    get: function () {
        h_log("[v] window SVGFEMergeNodeElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEMergeNodeElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEMergeElement", {
    get: function () {
        h_log("[v] window SVGFEMergeElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEMergeElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEImageElement", {
    get: function () {
        h_log("[v] window SVGFEImageElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEImageElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEGaussianBlurElement", {
    get: function () {
        h_log("[v] window SVGFEGaussianBlurElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEGaussianBlurElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEFuncRElement", {
    get: function () {
        h_log("[v] window SVGFEFuncRElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEFuncRElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEFuncGElement", {
    get: function () {
        h_log("[v] window SVGFEFuncGElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEFuncGElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEFuncBElement", {
    get: function () {
        h_log("[v] window SVGFEFuncBElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEFuncBElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEFuncAElement", {
    get: function () {
        h_log("[v] window SVGFEFuncAElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEFuncAElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEFloodElement", {
    get: function () {
        h_log("[v] window SVGFEFloodElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEFloodElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEDropShadowElement", {
    get: function () {
        h_log("[v] window SVGFEDropShadowElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEDropShadowElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEDistantLightElement", {
    get: function () {
        h_log("[v] window SVGFEDistantLightElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEDistantLightElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEDisplacementMapElement", {
    get: function () {
        h_log("[v] window SVGFEDisplacementMapElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEDisplacementMapElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEDiffuseLightingElement", {
    get: function () {
        h_log("[v] window SVGFEDiffuseLightingElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEDiffuseLightingElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEConvolveMatrixElement", {
    get: function () {
        h_log("[v] window SVGFEConvolveMatrixElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEConvolveMatrixElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFECompositeElement", {
    get: function () {
        h_log("[v] window SVGFECompositeElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFECompositeElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEComponentTransferElement", {
    get: function () {
        h_log("[v] window SVGFEComponentTransferElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEComponentTransferElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEColorMatrixElement", {
    get: function () {
        h_log("[v] window SVGFEColorMatrixElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEColorMatrixElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEBlendElement", {
    get: function () {
        h_log("[v] window SVGFEBlendElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEBlendElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGEllipseElement", {
    get: function () {
        h_log("[v] window SVGEllipseElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGEllipseElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGElement", {
    get: function () {
        h_log("[v] window SVGElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGDescElement", {
    get: function () {
        h_log("[v] window SVGDescElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGDescElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGDefsElement", {
    get: function () {
        h_log("[v] window SVGDefsElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGDefsElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGComponentTransferFunctionElement", {
    get: function () {
        h_log("[v] window SVGComponentTransferFunctionElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGComponentTransferFunctionElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGClipPathElement", {
    get: function () {
        h_log("[v] window SVGClipPathElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGClipPathElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGCircleElement", {
    get: function () {
        h_log("[v] window SVGCircleElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGCircleElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimationElement", {
    get: function () {
        h_log("[v] window SVGAnimationElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimationElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedTransformList", {
    get: function () {
        h_log("[v] window SVGAnimatedTransformList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedTransformList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedString", {
    get: function () {
        h_log("[v] window SVGAnimatedString value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedString value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedRect", {
    get: function () {
        h_log("[v] window SVGAnimatedRect value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedRect value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedPreserveAspectRatio", {
    get: function () {
        h_log("[v] window SVGAnimatedPreserveAspectRatio value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedPreserveAspectRatio value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedNumberList", {
    get: function () {
        h_log("[v] window SVGAnimatedNumberList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedNumberList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedNumber", {
    get: function () {
        h_log("[v] window SVGAnimatedNumber value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedNumber value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedLengthList", {
    get: function () {
        h_log("[v] window SVGAnimatedLengthList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedLengthList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedLength", {
    get: function () {
        h_log("[v] window SVGAnimatedLength value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedLength value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedInteger", {
    get: function () {
        h_log("[v] window SVGAnimatedInteger value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedInteger value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedEnumeration", {
    get: function () {
        h_log("[v] window SVGAnimatedEnumeration value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedEnumeration value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedBoolean", {
    get: function () {
        h_log("[v] window SVGAnimatedBoolean value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedBoolean value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedAngle", {
    get: function () {
        h_log("[v] window SVGAnimatedAngle value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedAngle value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimateTransformElement", {
    get: function () {
        h_log("[v] window SVGAnimateTransformElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimateTransformElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimateMotionElement", {
    get: function () {
        h_log("[v] window SVGAnimateMotionElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimateMotionElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimateElement", {
    get: function () {
        h_log("[v] window SVGAnimateElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimateElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAngle", {
    get: function () {
        h_log("[v] window SVGAngle value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAngle value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAElement", {
    get: function () {
        h_log("[v] window SVGAElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Response", {
    get: function () {
        h_log("[v] window Response value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Response value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ResizeObserverSize", {
    get: function () {
        h_log("[v] window ResizeObserverSize value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ResizeObserverSize value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ResizeObserverEntry", {
    get: function () {
        h_log("[v] window ResizeObserverEntry value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ResizeObserverEntry value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ResizeObserver", {
    get: function () {
        h_log("[v] window ResizeObserver value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ResizeObserver value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Request", {
    get: function () {
        h_log("[v] window Request value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Request value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ReportingObserver", {
    get: function () {
        h_log("[v] window ReportingObserver value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ReportingObserver value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ReadableStreamDefaultReader", {
    get: function () {
        h_log("[v] window ReadableStreamDefaultReader value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ReadableStreamDefaultReader value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ReadableStreamDefaultController", {
    get: function () {
        h_log("[v] window ReadableStreamDefaultController value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ReadableStreamDefaultController value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ReadableStreamBYOBRequest", {
    get: function () {
        h_log("[v] window ReadableStreamBYOBRequest value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ReadableStreamBYOBRequest value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ReadableStreamBYOBReader", {
    get: function () {
        h_log("[v] window ReadableStreamBYOBReader value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ReadableStreamBYOBReader value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ReadableStream", {
    get: function () {
        h_log("[v] window ReadableStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ReadableStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ReadableByteStreamController", {
    get: function () {
        h_log("[v] window ReadableByteStreamController value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ReadableByteStreamController value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Range", {
    get: function () {
        h_log("[v] window Range value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Range value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RadioNodeList", {
    get: function () {
        h_log("[v] window RadioNodeList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RadioNodeList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCTrackEvent", {
    get: function () {
        h_log("[v] window RTCTrackEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCTrackEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCStatsReport", {
    get: function () {
        h_log("[v] window RTCStatsReport value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCStatsReport value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCSessionDescription", {
    get: function () {
        h_log("[v] window RTCSessionDescription value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCSessionDescription value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCSctpTransport", {
    get: function () {
        h_log("[v] window RTCSctpTransport value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCSctpTransport value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCRtpTransceiver", {
    get: function () {
        h_log("[v] window RTCRtpTransceiver value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCRtpTransceiver value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCRtpSender", {
    get: function () {
        h_log("[v] window RTCRtpSender value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCRtpSender value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCRtpReceiver", {
    get: function () {
        h_log("[v] window RTCRtpReceiver value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCRtpReceiver value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCPeerConnectionIceEvent", {
    get: function () {
        h_log("[v] window RTCPeerConnectionIceEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCPeerConnectionIceEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCPeerConnectionIceErrorEvent", {
    get: function () {
        h_log("[v] window RTCPeerConnectionIceErrorEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCPeerConnectionIceErrorEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCPeerConnection", {
    get: function () {
        h_log("[v] window RTCPeerConnection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCPeerConnection value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCIceTransport", {
    get: function () {
        h_log("[v] window RTCIceTransport value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCIceTransport value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCIceCandidate", {
    get: function () {
        h_log("[v] window RTCIceCandidate value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCIceCandidate value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCErrorEvent", {
    get: function () {
        h_log("[v] window RTCErrorEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCErrorEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCError", {
    get: function () {
        h_log("[v] window RTCError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCEncodedVideoFrame", {
    get: function () {
        h_log("[v] window RTCEncodedVideoFrame value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCEncodedVideoFrame value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCEncodedAudioFrame", {
    get: function () {
        h_log("[v] window RTCEncodedAudioFrame value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCEncodedAudioFrame value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCDtlsTransport", {
    get: function () {
        h_log("[v] window RTCDtlsTransport value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCDtlsTransport value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCDataChannelEvent", {
    get: function () {
        h_log("[v] window RTCDataChannelEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCDataChannelEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCDataChannel", {
    get: function () {
        h_log("[v] window RTCDataChannel value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCDataChannel value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCDTMFToneChangeEvent", {
    get: function () {
        h_log("[v] window RTCDTMFToneChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCDTMFToneChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCDTMFSender", {
    get: function () {
        h_log("[v] window RTCDTMFSender value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCDTMFSender value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCCertificate", {
    get: function () {
        h_log("[v] window RTCCertificate value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCCertificate value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PromiseRejectionEvent", {
    get: function () {
        h_log("[v] window PromiseRejectionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PromiseRejectionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ProgressEvent", {
    get: function () {
        h_log("[v] window ProgressEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ProgressEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Profiler", {
    get: function () {
        h_log("[v] window Profiler value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Profiler value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ProcessingInstruction", {
    get: function () {
        h_log("[v] window ProcessingInstruction value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ProcessingInstruction value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PopStateEvent", {
    get: function () {
        h_log("[v] window PopStateEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PopStateEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PointerEvent", {
    get: function () {
        h_log("[v] window PointerEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PointerEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PluginArray", {
    get: function () {
        h_log("[v] window PluginArray value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PluginArray value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Plugin", {
    get: function () {
        h_log("[v] window Plugin value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Plugin value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PictureInPictureWindow", {
    get: function () {
        h_log("[v] window PictureInPictureWindow value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PictureInPictureWindow value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PictureInPictureEvent", {
    get: function () {
        h_log("[v] window PictureInPictureEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PictureInPictureEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PeriodicWave", {
    get: function () {
        h_log("[v] window PeriodicWave value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PeriodicWave value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceTiming", {
    get: function () {
        h_log("[v] window PerformanceTiming value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceTiming value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceServerTiming", {
    get: function () {
        h_log("[v] window PerformanceServerTiming value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceServerTiming value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceResourceTiming", {
    get: function () {
        h_log("[v] window PerformanceResourceTiming value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceResourceTiming value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformancePaintTiming", {
    get: function () {
        h_log("[v] window PerformancePaintTiming value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformancePaintTiming value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceObserverEntryList", {
    get: function () {
        h_log("[v] window PerformanceObserverEntryList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceObserverEntryList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceObserver", {
    get: function () {
        h_log("[v] window PerformanceObserver value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceObserver value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceNavigationTiming", {
    get: function () {
        h_log("[v] window PerformanceNavigationTiming value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceNavigationTiming value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceNavigation", {
    get: function () {
        h_log("[v] window PerformanceNavigation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceNavigation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceMeasure", {
    get: function () {
        h_log("[v] window PerformanceMeasure value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceMeasure value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceMark", {
    get: function () {
        h_log("[v] window PerformanceMark value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceMark value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceLongTaskTiming", {
    get: function () {
        h_log("[v] window PerformanceLongTaskTiming value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceLongTaskTiming value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceEventTiming", {
    get: function () {
        h_log("[v] window PerformanceEventTiming value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceEventTiming value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceEntry", {
    get: function () {
        h_log("[v] window PerformanceEntry value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceEntry value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceElementTiming", {
    get: function () {
        h_log("[v] window PerformanceElementTiming value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceElementTiming value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Performance", {
    get: function () {
        h_log("[v] window Performance value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Performance value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Path2D", {
    get: function () {
        h_log("[v] window Path2D value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Path2D value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PannerNode", {
    get: function () {
        h_log("[v] window PannerNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PannerNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PageTransitionEvent", {
    get: function () {
        h_log("[v] window PageTransitionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PageTransitionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "OverconstrainedError", {
    get: function () {
        h_log("[v] window OverconstrainedError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window OverconstrainedError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "OscillatorNode", {
    get: function () {
        h_log("[v] window OscillatorNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window OscillatorNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "OffscreenCanvasRenderingContext2D", {
    get: function () {
        h_log("[v] window OffscreenCanvasRenderingContext2D value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window OffscreenCanvasRenderingContext2D value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "OffscreenCanvas", {
    get: function () {
        h_log("[v] window OffscreenCanvas value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window OffscreenCanvas value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "OfflineAudioContext", {
    get: function () {
        h_log("[v] window OfflineAudioContext value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window OfflineAudioContext value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "OfflineAudioCompletionEvent", {
    get: function () {
        h_log("[v] window OfflineAudioCompletionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window OfflineAudioCompletionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NodeList", {
    get: function () {
        h_log("[v] window NodeList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NodeList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NodeIterator", {
    get: function () {
        h_log("[v] window NodeIterator value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NodeIterator value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NodeFilter", {
    get: function () {
        h_log("[v] window NodeFilter value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NodeFilter value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});

Object.defineProperty(window, "NetworkInformation", {
    get: function () {
        h_log("[v] window NetworkInformation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NetworkInformation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NavigationTransition", {
    get: function () {
        h_log("[v] window NavigationTransition value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NavigationTransition value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NavigationHistoryEntry", {
    get: function () {
        h_log("[v] window NavigationHistoryEntry value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NavigationHistoryEntry value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NavigationDestination", {
    get: function () {
        h_log("[v] window NavigationDestination value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NavigationDestination value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NavigationCurrentEntryChangeEvent", {
    get: function () {
        h_log("[v] window NavigationCurrentEntryChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NavigationCurrentEntryChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Navigation", {
    get: function () {
        h_log("[v] window Navigation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Navigation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NavigateEvent", {
    get: function () {
        h_log("[v] window NavigateEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NavigateEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NamedNodeMap", {
    get: function () {
        h_log("[v] window NamedNodeMap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NamedNodeMap value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MutationRecord", {
    get: function () {
        h_log("[v] window MutationRecord value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MutationRecord value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});

let _MutationObserver = {};
_MutationObserver.__proto__ = {};
Object.defineProperty(_MutationObserver.__proto__, "disconnect", {
    get: function () {
        h_log("[v] _MutationObserver.__proto__ disconnect value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _MutationObserver.__proto__ disconnect value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_MutationObserver.__proto__, "observe", {
    get: function () {
        h_log("[v] _MutationObserver.__proto__ observe value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _MutationObserver.__proto__ observe value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_MutationObserver.__proto__, "takeRecords", {
    get: function () {
        h_log("[v] _MutationObserver.__proto__ takeRecords value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _MutationObserver.__proto__ takeRecords value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
MutationObserver = function () {
    h_log("_MutationObserver.__proto__ constructor value [call]", "arg:", arguments)
};
MutationObserver.prototype = _MutationObserver.__proto__;
Object.defineProperty(_MutationObserver.__proto__, "constructor", {
    value: MutationObserver,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(_MutationObserver.__proto__, Symbol.toStringTag, {
    value: "MutationObserver",
    writable: false,
    enumerable: false,
    configurable: true,
});

Object.defineProperty(window, "MouseEvent", {
    get: function () {
        h_log("[v] window MouseEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MouseEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MimeTypeArray", {
    get: function () {
        h_log("[v] window MimeTypeArray value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MimeTypeArray value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MimeType", {
    get: function () {
        h_log("[v] window MimeType value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MimeType value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MessagePort", {
    get: function () {
        h_log("[v] window MessagePort value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MessagePort value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MessageEvent", {
    get: function () {
        h_log("[v] window MessageEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MessageEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MessageChannel", {
    get: function () {
        h_log("[v] window MessageChannel value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MessageChannel value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaStreamTrackVideoStats", {
    get: function () {
        h_log("[v] window MediaStreamTrackVideoStats value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaStreamTrackVideoStats value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaStreamTrackProcessor", {
    get: function () {
        h_log("[v] window MediaStreamTrackProcessor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaStreamTrackProcessor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaStreamTrackGenerator", {
    get: function () {
        h_log("[v] window MediaStreamTrackGenerator value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaStreamTrackGenerator value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaStreamTrackEvent", {
    get: function () {
        h_log("[v] window MediaStreamTrackEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaStreamTrackEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaStreamTrack", {
    get: function () {
        h_log("[v] window MediaStreamTrack value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaStreamTrack value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaStreamEvent", {
    get: function () {
        h_log("[v] window MediaStreamEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaStreamEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaStreamAudioSourceNode", {
    get: function () {
        h_log("[v] window MediaStreamAudioSourceNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaStreamAudioSourceNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaStreamAudioDestinationNode", {
    get: function () {
        h_log("[v] window MediaStreamAudioDestinationNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaStreamAudioDestinationNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaStream", {
    get: function () {
        h_log("[v] window MediaStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaSourceHandle", {
    get: function () {
        h_log("[v] window MediaSourceHandle value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaSourceHandle value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaSource", {
    get: function () {
        h_log("[v] window MediaSource value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaSource value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaRecorder", {
    get: function () {
        h_log("[v] window MediaRecorder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaRecorder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaQueryListEvent", {
    get: function () {
        h_log("[v] window MediaQueryListEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaQueryListEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaQueryList", {
    get: function () {
        h_log("[v] window MediaQueryList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaQueryList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaList", {
    get: function () {
        h_log("[v] window MediaList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaError", {
    get: function () {
        h_log("[v] window MediaError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaEncryptedEvent", {
    get: function () {
        h_log("[v] window MediaEncryptedEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaEncryptedEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaElementAudioSourceNode", {
    get: function () {
        h_log("[v] window MediaElementAudioSourceNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaElementAudioSourceNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaCapabilities", {
    get: function () {
        h_log("[v] window MediaCapabilities value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaCapabilities value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MathMLElement", {
    get: function () {
        h_log("[v] window MathMLElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MathMLElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});

Object.defineProperty(window, "LayoutShiftAttribution", {
    get: function () {
        h_log("[v] window LayoutShiftAttribution value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window LayoutShiftAttribution value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "LayoutShift", {
    get: function () {
        h_log("[v] window LayoutShift value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window LayoutShift value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "LargestContentfulPaint", {
    get: function () {
        h_log("[v] window LargestContentfulPaint value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window LargestContentfulPaint value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "KeyframeEffect", {
    get: function () {
        h_log("[v] window KeyframeEffect value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window KeyframeEffect value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "KeyboardEvent", {
    get: function () {
        h_log("[v] window KeyboardEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window KeyboardEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IntersectionObserverEntry", {
    get: function () {
        h_log("[v] window IntersectionObserverEntry value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IntersectionObserverEntry value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IntersectionObserver", {
    get: function () {
        h_log("[v] window IntersectionObserver value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IntersectionObserver value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "InputEvent", {
    get: function () {
        h_log("[v] window InputEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window InputEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "InputDeviceInfo", {
    get: function () {
        h_log("[v] window InputDeviceInfo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window InputDeviceInfo value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "InputDeviceCapabilities", {
    get: function () {
        h_log("[v] window InputDeviceCapabilities value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window InputDeviceCapabilities value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ImageTrackList", {
    get: function () {
        h_log("[v] window ImageTrackList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ImageTrackList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ImageTrack", {
    get: function () {
        h_log("[v] window ImageTrack value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ImageTrack value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ImageData", {
    get: function () {
        h_log("[v] window ImageData value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ImageData value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ImageCapture", {
    get: function () {
        h_log("[v] window ImageCapture value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ImageCapture value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ImageBitmapRenderingContext", {
    get: function () {
        h_log("[v] window ImageBitmapRenderingContext value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ImageBitmapRenderingContext value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ImageBitmap", {
    get: function () {
        h_log("[v] window ImageBitmap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ImageBitmap value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IdleDeadline", {
    get: function () {
        h_log("[v] window IdleDeadline value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IdleDeadline value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IIRFilterNode", {
    get: function () {
        h_log("[v] window IIRFilterNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IIRFilterNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBVersionChangeEvent", {
    get: function () {
        h_log("[v] window IDBVersionChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBVersionChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBTransaction", {
    get: function () {
        h_log("[v] window IDBTransaction value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBTransaction value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBRequest", {
    get: function () {
        h_log("[v] window IDBRequest value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBRequest value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBOpenDBRequest", {
    get: function () {
        h_log("[v] window IDBOpenDBRequest value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBOpenDBRequest value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBObjectStore", {
    get: function () {
        h_log("[v] window IDBObjectStore value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBObjectStore value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBKeyRange", {
    get: function () {
        h_log("[v] window IDBKeyRange value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBKeyRange value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBIndex", {
    get: function () {
        h_log("[v] window IDBIndex value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBIndex value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBFactory", {
    get: function () {
        h_log("[v] window IDBFactory value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBFactory value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBDatabase", {
    get: function () {
        h_log("[v] window IDBDatabase value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBDatabase value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBCursorWithValue", {
    get: function () {
        h_log("[v] window IDBCursorWithValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBCursorWithValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBCursor", {
    get: function () {
        h_log("[v] window IDBCursor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBCursor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "History", {
    get: function () {
        h_log("[v] window History value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window History value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Headers", {
    get: function () {
        h_log("[v] window Headers value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Headers value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HashChangeEvent", {
    get: function () {
        h_log("[v] window HashChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HashChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLVideoElement", {
    get: function () {
        h_log("[v] window HTMLVideoElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLVideoElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLUnknownElement", {
    get: function () {
        h_log("[v] window HTMLUnknownElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLUnknownElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLUListElement", {
    get: function () {
        h_log("[v] window HTMLUListElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLUListElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTrackElement", {
    get: function () {
        h_log("[v] window HTMLTrackElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTrackElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTitleElement", {
    get: function () {
        h_log("[v] window HTMLTitleElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTitleElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTimeElement", {
    get: function () {
        h_log("[v] window HTMLTimeElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTimeElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTextAreaElement", {
    get: function () {
        h_log("[v] window HTMLTextAreaElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTextAreaElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTemplateElement", {
    get: function () {
        h_log("[v] window HTMLTemplateElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTemplateElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTableSectionElement", {
    get: function () {
        h_log("[v] window HTMLTableSectionElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTableSectionElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTableRowElement", {
    get: function () {
        h_log("[v] window HTMLTableRowElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTableRowElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTableElement", {
    get: function () {
        h_log("[v] window HTMLTableElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTableElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTableColElement", {
    get: function () {
        h_log("[v] window HTMLTableColElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTableColElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTableCellElement", {
    get: function () {
        h_log("[v] window HTMLTableCellElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTableCellElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTableCaptionElement", {
    get: function () {
        h_log("[v] window HTMLTableCaptionElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTableCaptionElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLStyleElement", {
    get: function () {
        h_log("[v] window HTMLStyleElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLStyleElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLSpanElement", {
    get: function () {
        h_log("[v] window HTMLSpanElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLSpanElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLSourceElement", {
    get: function () {
        h_log("[v] window HTMLSourceElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLSourceElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLSlotElement", {
    get: function () {
        h_log("[v] window HTMLSlotElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLSlotElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLSelectElement", {
    get: function () {
        h_log("[v] window HTMLSelectElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLSelectElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLQuoteElement", {
    get: function () {
        h_log("[v] window HTMLQuoteElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLQuoteElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLProgressElement", {
    get: function () {
        h_log("[v] window HTMLProgressElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLProgressElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLPreElement", {
    get: function () {
        h_log("[v] window HTMLPreElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLPreElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLPictureElement", {
    get: function () {
        h_log("[v] window HTMLPictureElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLPictureElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLParamElement", {
    get: function () {
        h_log("[v] window HTMLParamElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLParamElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLParagraphElement", {
    get: function () {
        h_log("[v] window HTMLParagraphElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLParagraphElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLOutputElement", {
    get: function () {
        h_log("[v] window HTMLOutputElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLOutputElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLOptionsCollection", {
    get: function () {
        h_log("[v] window HTMLOptionsCollection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLOptionsCollection value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLOptionElement", {
    get: function () {
        h_log("[v] window HTMLOptionElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLOptionElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLOptGroupElement", {
    get: function () {
        h_log("[v] window HTMLOptGroupElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLOptGroupElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLObjectElement", {
    get: function () {
        h_log("[v] window HTMLObjectElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLObjectElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLOListElement", {
    get: function () {
        h_log("[v] window HTMLOListElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLOListElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLModElement", {
    get: function () {
        h_log("[v] window HTMLModElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLModElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLMeterElement", {
    get: function () {
        h_log("[v] window HTMLMeterElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLMeterElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLMenuElement", {
    get: function () {
        h_log("[v] window HTMLMenuElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLMenuElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLMediaElement", {
    get: function () {
        h_log("[v] window HTMLMediaElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLMediaElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLMarqueeElement", {
    get: function () {
        h_log("[v] window HTMLMarqueeElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLMarqueeElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLMapElement", {
    get: function () {
        h_log("[v] window HTMLMapElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLMapElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLLinkElement", {
    get: function () {
        h_log("[v] window HTMLLinkElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLLinkElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLLegendElement", {
    get: function () {
        h_log("[v] window HTMLLegendElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLLegendElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLLabelElement", {
    get: function () {
        h_log("[v] window HTMLLabelElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLLabelElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLLIElement", {
    get: function () {
        h_log("[v] window HTMLLIElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLLIElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLInputElement", {
    get: function () {
        h_log("[v] window HTMLInputElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLInputElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLImageElement", {
    get: function () {
        h_log("[v] window HTMLImageElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLImageElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLIFrameElement", {
    get: function () {
        h_log("[v] window HTMLIFrameElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLIFrameElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});

Object.defineProperty(window, "HTMLHeadingElement", {
    get: function () {
        h_log("[v] window HTMLHeadingElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLHeadingElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLHRElement", {
    get: function () {
        h_log("[v] window HTMLHRElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLHRElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLFrameSetElement", {
    get: function () {
        h_log("[v] window HTMLFrameSetElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLFrameSetElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLFrameElement", {
    get: function () {
        h_log("[v] window HTMLFrameElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLFrameElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLFormElement", {
    get: function () {
        h_log("[v] window HTMLFormElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLFormElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLFormControlsCollection", {
    get: function () {
        h_log("[v] window HTMLFormControlsCollection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLFormControlsCollection value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLFontElement", {
    get: function () {
        h_log("[v] window HTMLFontElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLFontElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLFieldSetElement", {
    get: function () {
        h_log("[v] window HTMLFieldSetElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLFieldSetElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLEmbedElement", {
    get: function () {
        h_log("[v] window HTMLEmbedElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLEmbedElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLElement", {
    get: function () {
        h_log("[v] window HTMLElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLDocument", {
    get: function () {
        h_log("[v] window HTMLDocument value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLDocument value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLDirectoryElement", {
    get: function () {
        h_log("[v] window HTMLDirectoryElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLDirectoryElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLDialogElement", {
    get: function () {
        h_log("[v] window HTMLDialogElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLDialogElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLDetailsElement", {
    get: function () {
        h_log("[v] window HTMLDetailsElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLDetailsElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLDataListElement", {
    get: function () {
        h_log("[v] window HTMLDataListElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLDataListElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLDataElement", {
    get: function () {
        h_log("[v] window HTMLDataElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLDataElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLDListElement", {
    get: function () {
        h_log("[v] window HTMLDListElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLDListElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLCollection", {
    get: function () {
        h_log("[v] window HTMLCollection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLCollection value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLCanvasElement", {
    get: function () {
        h_log("[v] window HTMLCanvasElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLCanvasElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLButtonElement", {
    get: function () {
        h_log("[v] window HTMLButtonElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLButtonElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLBaseElement", {
    get: function () {
        h_log("[v] window HTMLBaseElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLBaseElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLBRElement", {
    get: function () {
        h_log("[v] window HTMLBRElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLBRElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLAudioElement", {
    get: function () {
        h_log("[v] window HTMLAudioElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLAudioElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLAreaElement", {
    get: function () {
        h_log("[v] window HTMLAreaElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLAreaElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLAllCollection", {
    get: function () {
        h_log("[v] window HTMLAllCollection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLAllCollection value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GeolocationPositionError", {
    get: function () {
        h_log("[v] window GeolocationPositionError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GeolocationPositionError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GeolocationPosition", {
    get: function () {
        h_log("[v] window GeolocationPosition value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GeolocationPosition value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GeolocationCoordinates", {
    get: function () {
        h_log("[v] window GeolocationCoordinates value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GeolocationCoordinates value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Geolocation", {
    get: function () {
        h_log("[v] window Geolocation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Geolocation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GamepadHapticActuator", {
    get: function () {
        h_log("[v] window GamepadHapticActuator value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GamepadHapticActuator value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GamepadEvent", {
    get: function () {
        h_log("[v] window GamepadEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GamepadEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GamepadButton", {
    get: function () {
        h_log("[v] window GamepadButton value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GamepadButton value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Gamepad", {
    get: function () {
        h_log("[v] window Gamepad value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Gamepad value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GainNode", {
    get: function () {
        h_log("[v] window GainNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GainNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FormDataEvent", {
    get: function () {
        h_log("[v] window FormDataEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FormDataEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FormData", {
    get: function () {
        h_log("[v] window FormData value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FormData value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FontFaceSetLoadEvent", {
    get: function () {
        h_log("[v] window FontFaceSetLoadEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FontFaceSetLoadEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FontFace", {
    get: function () {
        h_log("[v] window FontFace value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FontFace value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FocusEvent", {
    get: function () {
        h_log("[v] window FocusEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FocusEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FileReader", {
    get: function () {
        h_log("[v] window FileReader value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FileReader value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FileList", {
    get: function () {
        h_log("[v] window FileList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FileList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "File", {
    get: function () {
        h_log("[v] window File value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window File value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FeaturePolicy", {
    get: function () {
        h_log("[v] window FeaturePolicy value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FeaturePolicy value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "EventSource", {
    get: function () {
        h_log("[v] window EventSource value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window EventSource value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "EventCounts", {
    get: function () {
        h_log("[v] window EventCounts value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window EventCounts value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Event", {
    get: function () {
        h_log("[v] window Event value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Event value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ErrorEvent", {
    get: function () {
        h_log("[v] window ErrorEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ErrorEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "EncodedVideoChunk", {
    get: function () {
        h_log("[v] window EncodedVideoChunk value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window EncodedVideoChunk value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "EncodedAudioChunk", {
    get: function () {
        h_log("[v] window EncodedAudioChunk value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window EncodedAudioChunk value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ElementInternals", {
    get: function () {
        h_log("[v] window ElementInternals value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ElementInternals value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Element", {
    get: function () {
        h_log("[v] window Element value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Element value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DynamicsCompressorNode", {
    get: function () {
        h_log("[v] window DynamicsCompressorNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DynamicsCompressorNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DragEvent", {
    get: function () {
        h_log("[v] window DragEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DragEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DocumentType", {
    get: function () {
        h_log("[v] window DocumentType value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DocumentType value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DocumentFragment", {
    get: function () {
        h_log("[v] window DocumentFragment value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DocumentFragment value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Document", {
    get: function () {
        h_log("[v] window Document value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Document value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DelayNode", {
    get: function () {
        h_log("[v] window DelayNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DelayNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DecompressionStream", {
    get: function () {
        h_log("[v] window DecompressionStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DecompressionStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DataTransferItemList", {
    get: function () {
        h_log("[v] window DataTransferItemList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DataTransferItemList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DataTransferItem", {
    get: function () {
        h_log("[v] window DataTransferItem value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DataTransferItem value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DataTransfer", {
    get: function () {
        h_log("[v] window DataTransfer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DataTransfer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMTokenList", {
    get: function () {
        h_log("[v] window DOMTokenList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMTokenList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMStringMap", {
    get: function () {
        h_log("[v] window DOMStringMap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMStringMap value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMStringList", {
    get: function () {
        h_log("[v] window DOMStringList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMStringList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMRectReadOnly", {
    get: function () {
        h_log("[v] window DOMRectReadOnly value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMRectReadOnly value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMRectList", {
    get: function () {
        h_log("[v] window DOMRectList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMRectList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMRect", {
    get: function () {
        h_log("[v] window DOMRect value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMRect value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMQuad", {
    get: function () {
        h_log("[v] window DOMQuad value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMQuad value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMPointReadOnly", {
    get: function () {
        h_log("[v] window DOMPointReadOnly value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMPointReadOnly value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMPoint", {
    get: function () {
        h_log("[v] window DOMPoint value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMPoint value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMParser", {
    get: function () {
        h_log("[v] window DOMParser value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMParser value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMMatrixReadOnly", {
    get: function () {
        h_log("[v] window DOMMatrixReadOnly value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMMatrixReadOnly value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMMatrix", {
    get: function () {
        h_log("[v] window DOMMatrix value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMMatrix value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMImplementation", {
    get: function () {
        h_log("[v] window DOMImplementation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMImplementation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMException", {
    get: function () {
        h_log("[v] window DOMException value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMException value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMError", {
    get: function () {
        h_log("[v] window DOMError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CustomStateSet", {
    get: function () {
        h_log("[v] window CustomStateSet value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CustomStateSet value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CustomEvent", {
    get: function () {
        h_log("[v] window CustomEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CustomEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CustomElementRegistry", {
    get: function () {
        h_log("[v] window CustomElementRegistry value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CustomElementRegistry value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Crypto", {
    get: function () {
        h_log("[v] window Crypto value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Crypto value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CountQueuingStrategy", {
    get: function () {
        h_log("[v] window CountQueuingStrategy value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CountQueuingStrategy value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ConvolverNode", {
    get: function () {
        h_log("[v] window ConvolverNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ConvolverNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ConstantSourceNode", {
    get: function () {
        h_log("[v] window ConstantSourceNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ConstantSourceNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CompressionStream", {
    get: function () {
        h_log("[v] window CompressionStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CompressionStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CompositionEvent", {
    get: function () {
        h_log("[v] window CompositionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CompositionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Comment", {
    get: function () {
        h_log("[v] window Comment value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Comment value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CloseEvent", {
    get: function () {
        h_log("[v] window CloseEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CloseEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ClipboardEvent", {
    get: function () {
        h_log("[v] window ClipboardEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ClipboardEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CharacterData", {
    get: function () {
        h_log("[v] window CharacterData value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CharacterData value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ChannelSplitterNode", {
    get: function () {
        h_log("[v] window ChannelSplitterNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ChannelSplitterNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ChannelMergerNode", {
    get: function () {
        h_log("[v] window ChannelMergerNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ChannelMergerNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CanvasRenderingContext2D", {
    get: function () {
        h_log("[v] window CanvasRenderingContext2D value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CanvasRenderingContext2D value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CanvasPattern", {
    get: function () {
        h_log("[v] window CanvasPattern value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CanvasPattern value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CanvasGradient", {
    get: function () {
        h_log("[v] window CanvasGradient value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CanvasGradient value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CanvasCaptureMediaStreamTrack", {
    get: function () {
        h_log("[v] window CanvasCaptureMediaStreamTrack value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CanvasCaptureMediaStreamTrack value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSVariableReferenceValue", {
    get: function () {
        h_log("[v] window CSSVariableReferenceValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSVariableReferenceValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSUnparsedValue", {
    get: function () {
        h_log("[v] window CSSUnparsedValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSUnparsedValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSUnitValue", {
    get: function () {
        h_log("[v] window CSSUnitValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSUnitValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSTranslate", {
    get: function () {
        h_log("[v] window CSSTranslate value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSTranslate value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSTransformValue", {
    get: function () {
        h_log("[v] window CSSTransformValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSTransformValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSTransformComponent", {
    get: function () {
        h_log("[v] window CSSTransformComponent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSTransformComponent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSSupportsRule", {
    get: function () {
        h_log("[v] window CSSSupportsRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSSupportsRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSStyleValue", {
    get: function () {
        h_log("[v] window CSSStyleValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSStyleValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSStyleSheet", {
    get: function () {
        h_log("[v] window CSSStyleSheet value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSStyleSheet value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSStyleRule", {
    get: function () {
        h_log("[v] window CSSStyleRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSStyleRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSStyleDeclaration", {
    get: function () {
        h_log("[v] window CSSStyleDeclaration value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSStyleDeclaration value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSSkewY", {
    get: function () {
        h_log("[v] window CSSSkewY value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSSkewY value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSSkewX", {
    get: function () {
        h_log("[v] window CSSSkewX value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSSkewX value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSSkew", {
    get: function () {
        h_log("[v] window CSSSkew value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSSkew value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSScale", {
    get: function () {
        h_log("[v] window CSSScale value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSScale value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSRuleList", {
    get: function () {
        h_log("[v] window CSSRuleList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSRuleList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSRule", {
    get: function () {
        h_log("[v] window CSSRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSRotate", {
    get: function () {
        h_log("[v] window CSSRotate value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSRotate value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSPropertyRule", {
    get: function () {
        h_log("[v] window CSSPropertyRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSPropertyRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSPositionValue", {
    get: function () {
        h_log("[v] window CSSPositionValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSPositionValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSPerspective", {
    get: function () {
        h_log("[v] window CSSPerspective value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSPerspective value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSPageRule", {
    get: function () {
        h_log("[v] window CSSPageRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSPageRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSNumericValue", {
    get: function () {
        h_log("[v] window CSSNumericValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSNumericValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSNumericArray", {
    get: function () {
        h_log("[v] window CSSNumericArray value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSNumericArray value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSNamespaceRule", {
    get: function () {
        h_log("[v] window CSSNamespaceRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSNamespaceRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSMediaRule", {
    get: function () {
        h_log("[v] window CSSMediaRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSMediaRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSMatrixComponent", {
    get: function () {
        h_log("[v] window CSSMatrixComponent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSMatrixComponent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSMathValue", {
    get: function () {
        h_log("[v] window CSSMathValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSMathValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSMathSum", {
    get: function () {
        h_log("[v] window CSSMathSum value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSMathSum value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSMathProduct", {
    get: function () {
        h_log("[v] window CSSMathProduct value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSMathProduct value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSMathNegate", {
    get: function () {
        h_log("[v] window CSSMathNegate value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSMathNegate value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSMathMin", {
    get: function () {
        h_log("[v] window CSSMathMin value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSMathMin value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSMathMax", {
    get: function () {
        h_log("[v] window CSSMathMax value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSMathMax value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSMathInvert", {
    get: function () {
        h_log("[v] window CSSMathInvert value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSMathInvert value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSMathClamp", {
    get: function () {
        h_log("[v] window CSSMathClamp value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSMathClamp value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSLayerStatementRule", {
    get: function () {
        h_log("[v] window CSSLayerStatementRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSLayerStatementRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSLayerBlockRule", {
    get: function () {
        h_log("[v] window CSSLayerBlockRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSLayerBlockRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSKeywordValue", {
    get: function () {
        h_log("[v] window CSSKeywordValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSKeywordValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSKeyframesRule", {
    get: function () {
        h_log("[v] window CSSKeyframesRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSKeyframesRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSKeyframeRule", {
    get: function () {
        h_log("[v] window CSSKeyframeRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSKeyframeRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSImportRule", {
    get: function () {
        h_log("[v] window CSSImportRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSImportRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSImageValue", {
    get: function () {
        h_log("[v] window CSSImageValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSImageValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSGroupingRule", {
    get: function () {
        h_log("[v] window CSSGroupingRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSGroupingRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSFontPaletteValuesRule", {
    get: function () {
        h_log("[v] window CSSFontPaletteValuesRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSFontPaletteValuesRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSFontFaceRule", {
    get: function () {
        h_log("[v] window CSSFontFaceRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSFontFaceRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSCounterStyleRule", {
    get: function () {
        h_log("[v] window CSSCounterStyleRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSCounterStyleRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSContainerRule", {
    get: function () {
        h_log("[v] window CSSContainerRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSContainerRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSConditionRule", {
    get: function () {
        h_log("[v] window CSSConditionRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSConditionRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSS", {value: {}, writable: true, enumerable: false, configurable: true,});
Object.defineProperty(window, "CDATASection", {
    get: function () {
        h_log("[v] window CDATASection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CDATASection value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ByteLengthQueuingStrategy", {
    get: function () {
        h_log("[v] window ByteLengthQueuingStrategy value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ByteLengthQueuingStrategy value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BroadcastChannel", {
    get: function () {
        h_log("[v] window BroadcastChannel value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BroadcastChannel value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BlobEvent", {
    get: function () {
        h_log("[v] window BlobEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BlobEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Blob", {
    get: function () {
        h_log("[v] window Blob value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Blob value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BiquadFilterNode", {
    get: function () {
        h_log("[v] window BiquadFilterNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BiquadFilterNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BeforeUnloadEvent", {
    get: function () {
        h_log("[v] window BeforeUnloadEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BeforeUnloadEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BeforeInstallPromptEvent", {
    get: function () {
        h_log("[v] window BeforeInstallPromptEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BeforeInstallPromptEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BaseAudioContext", {
    get: function () {
        h_log("[v] window BaseAudioContext value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BaseAudioContext value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BarProp", {
    get: function () {
        h_log("[v] window BarProp value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BarProp value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioWorkletNode", {
    get: function () {
        h_log("[v] window AudioWorkletNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioWorkletNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioSinkInfo", {
    get: function () {
        h_log("[v] window AudioSinkInfo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioSinkInfo value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioScheduledSourceNode", {
    get: function () {
        h_log("[v] window AudioScheduledSourceNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioScheduledSourceNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioProcessingEvent", {
    get: function () {
        h_log("[v] window AudioProcessingEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioProcessingEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioParamMap", {
    get: function () {
        h_log("[v] window AudioParamMap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioParamMap value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioParam", {
    get: function () {
        h_log("[v] window AudioParam value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioParam value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioNode", {
    get: function () {
        h_log("[v] window AudioNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioListener", {
    get: function () {
        h_log("[v] window AudioListener value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioListener value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioDestinationNode", {
    get: function () {
        h_log("[v] window AudioDestinationNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioDestinationNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioData", {
    get: function () {
        h_log("[v] window AudioData value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioData value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioContext", {
    get: function () {
        h_log("[v] window AudioContext value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioContext value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioBufferSourceNode", {
    get: function () {
        h_log("[v] window AudioBufferSourceNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioBufferSourceNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioBuffer", {
    get: function () {
        h_log("[v] window AudioBuffer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioBuffer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Attr", {
    get: function () {
        h_log("[v] window Attr value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Attr value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AnimationEvent", {
    get: function () {
        h_log("[v] window AnimationEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AnimationEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AnimationEffect", {
    get: function () {
        h_log("[v] window AnimationEffect value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AnimationEffect value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Animation", {
    get: function () {
        h_log("[v] window Animation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Animation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AnalyserNode", {
    get: function () {
        h_log("[v] window AnalyserNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AnalyserNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AbstractRange", {
    get: function () {
        h_log("[v] window AbstractRange value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AbstractRange value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AbortSignal", {
    get: function () {
        h_log("[v] window AbortSignal value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AbortSignal value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AbortController", {
    get: function () {
        h_log("[v] window AbortController value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AbortController value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
window.window = window;
Object.defineProperty(window, "self", {
    get: function () {
        h_log("window self get [call]", "arg:", arguments)
        return globalThis
    }, set: function () {
        h_log("window self set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "document", {
    get: function () {
        h_log("window document get [call]", "arg:", arguments)
        return _document
    }, set: undefined, enumerable: true, configurable: false,
});
Object.defineProperty(window, "name", {
    get: function () {
        h_log("window name get [call]", "arg:", arguments)
        return ""
    }, set: function () {
        h_log("window name set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "location", {
    get: function () {
        h_log("window location get [call]", "arg:", arguments)
        return _location
    }, set: function () {
        h_log("window location set [call]", "arg:", arguments)
    }, enumerable: true, configurable: false,
});
Object.defineProperty(window, "customElements", {
    get: function () {
        h_log("window customElements get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "history", {
    get: function () {
        h_log("window history get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "navigation", {
    get: function () {
        h_log("window navigation get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window navigation set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "locationbar", {
    get: function () {
        h_log("window locationbar get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window locationbar set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "menubar", {
    get: function () {
        h_log("window menubar get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window menubar set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "personalbar", {
    get: function () {
        h_log("window personalbar get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window personalbar set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "scrollbars", {
    get: function () {
        h_log("window scrollbars get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window scrollbars set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "statusbar", {
    get: function () {
        h_log("window statusbar get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window statusbar set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "toolbar", {
    get: function () {
        h_log("window toolbar get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window toolbar set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "status", {
    get: function () {
        h_log("window status get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window status set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "closed", {
    get: function () {
        h_log("window closed get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "frames", {
    get: function () {
        h_log("window frames get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window frames set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "length", {
    get: function () {
        h_log("window length get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window length set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "top", {
    get: function () {
        h_log("window top get [call]", "arg:", arguments)
        return globalThis
    }, set: undefined, enumerable: true, configurable: false,
});
Object.defineProperty(window, "opener", {
    get: function () {
        h_log("window opener get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window opener set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "parent", {
    get: function () {
        h_log("window parent get [call]", "arg:", arguments)

    }, set: function () {
        h_log("window parent set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "frameElement", {
    get: function () {
        h_log("window frameElement get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "navigator", {
    get: function () {
        h_log("window navigator get [call]", "arg:", arguments)
        return _navigator
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "origin", {
    get: function () {
        h_log("window origin get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window origin set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
let _external = {};
_external.__proto__ = {};
Object.defineProperty(_external.__proto__, "AddSearchProvider", {
    get: function () {
        h_log("[v] _external.__proto__ AddSearchProvider value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _external.__proto__ AddSearchProvider value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_external.__proto__, "IsSearchProviderInstalled", {
    get: function () {
        h_log("[v] _external.__proto__ IsSearchProviderInstalled value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _external.__proto__ IsSearchProviderInstalled value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
External = function () {
    h_log("_external.__proto__ constructor value [call]", "arg:", arguments)
};
External.prototype = _external.__proto__;
Object.defineProperty(_external.__proto__, "constructor", {
    value: External,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(_external.__proto__, Symbol.toStringTag, {
    value: "External",
    writable: false,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(window, "external", {
    get: function () {
        h_log("window external get [call]", "arg:", arguments)
        return _external
    }, set: function () {
        h_log("window external set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "screen", {
    get: function () {
        h_log("window screen get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window screen set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "innerWidth", {
    get: function () {
        h_log("window innerWidth get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window innerWidth set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "innerHeight", {
    get: function () {
        h_log("window innerHeight get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window innerHeight set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "scrollX", {
    get: function () {
        h_log("window scrollX get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window scrollX set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "pageXOffset", {
    get: function () {
        h_log("window pageXOffset get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window pageXOffset set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "scrollY", {
    get: function () {
        h_log("window scrollY get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window scrollY set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "pageYOffset", {
    get: function () {
        h_log("window pageYOffset get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window pageYOffset set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "visualViewport", {
    get: function () {
        h_log("window visualViewport get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window visualViewport set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "screenX", {
    get: function () {
        h_log("window screenX get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window screenX set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "screenY", {
    get: function () {
        h_log("window screenY get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window screenY set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "outerWidth", {
    get: function () {
        h_log("window outerWidth get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window outerWidth set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "outerHeight", {
    get: function () {
        h_log("window outerHeight get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window outerHeight set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "devicePixelRatio", {
    get: function () {
        h_log("window devicePixelRatio get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window devicePixelRatio set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "event", {
    get: function () {
        h_log("window event get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window event set [call]", "arg:", arguments)
    }, enumerable: false, configurable: true,
});
Object.defineProperty(window, "clientInformation", {
    get: function () {
        h_log("window clientInformation get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window clientInformation set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "offscreenBuffering", {
    get: function () {
        h_log("window offscreenBuffering get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window offscreenBuffering set [call]", "arg:", arguments)
    }, enumerable: false, configurable: true,
});
Object.defineProperty(window, "screenLeft", {
    get: function () {
        h_log("window screenLeft get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window screenLeft set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "screenTop", {
    get: function () {
        h_log("window screenTop get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window screenTop set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "styleMedia", {
    get: function () {
        h_log("window styleMedia get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onsearch", {
    get: function () {
        h_log("window onsearch get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onsearch set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "isSecureContext", {
    get: function () {
        h_log("window isSecureContext get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "trustedTypes", {
    get: function () {
        h_log("window trustedTypes get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "performance", {
    get: function () {
        h_log("window performance get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window performance set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onappinstalled", {
    get: function () {
        h_log("window onappinstalled get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onappinstalled set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onbeforeinstallprompt", {
    get: function () {
        h_log("window onbeforeinstallprompt get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onbeforeinstallprompt set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "crypto", {
    get: function () {
        h_log("window crypto get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "indexedDB", {
    get: function () {
        h_log("window indexedDB get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
sessionStorage = {
    getItem: function (a) {
        h_log("sessionStorage getItem", arguments)
        return this[a] || null
    },
    setItem: function (a, b) {
        h_log("sessionStorage setItem", arguments)
        return this[a] = b
    },
    removeItem: function (a) {
        h_log("sessionStorage removeItem", arguments)
        delete this[a]
    }
}
window.sessionStorage = sessionStorage

localStorage = {
    getItem: function (a) {
        h_log("localStorage getItem", arguments);
        return this[a] || null
    },
    setItem: function (a, b) {
        h_log("localStorage setItem", arguments);
        return this[a] = b
    },
    removeItem: function (a) {
        h_log("localStorage removeItem", arguments);
        delete this[a]
    }
}
window.localStorage = localStorage

Object.defineProperty(window, "onbeforexrselect", {
    get: function () {
        h_log("window onbeforexrselect get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onbeforexrselect set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onabort", {
    get: function () {
        h_log("window onabort get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onabort set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onbeforeinput", {
    get: function () {
        h_log("window onbeforeinput get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onbeforeinput set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onbeforetoggle", {
    get: function () {
        h_log("window onbeforetoggle get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onbeforetoggle set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onblur", {
    get: function () {
        h_log("window onblur get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onblur set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "oncancel", {
    get: function () {
        h_log("window oncancel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window oncancel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "oncanplay", {
    get: function () {
        h_log("window oncanplay get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window oncanplay set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "oncanplaythrough", {
    get: function () {
        h_log("window oncanplaythrough get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window oncanplaythrough set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onchange", {
    get: function () {
        h_log("window onchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onclick", {
    get: function () {
        h_log("window onclick get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onclick set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onclose", {
    get: function () {
        h_log("window onclose get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onclose set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "oncontextlost", {
    get: function () {
        h_log("window oncontextlost get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window oncontextlost set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "oncontextmenu", {
    get: function () {
        h_log("window oncontextmenu get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window oncontextmenu set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "oncontextrestored", {
    get: function () {
        h_log("window oncontextrestored get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window oncontextrestored set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "oncuechange", {
    get: function () {
        h_log("window oncuechange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window oncuechange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondblclick", {
    get: function () {
        h_log("window ondblclick get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondblclick set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondrag", {
    get: function () {
        h_log("window ondrag get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondrag set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondragend", {
    get: function () {
        h_log("window ondragend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondragend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondragenter", {
    get: function () {
        h_log("window ondragenter get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondragenter set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondragleave", {
    get: function () {
        h_log("window ondragleave get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondragleave set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondragover", {
    get: function () {
        h_log("window ondragover get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondragover set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondragstart", {
    get: function () {
        h_log("window ondragstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondragstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondrop", {
    get: function () {
        h_log("window ondrop get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondrop set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondurationchange", {
    get: function () {
        h_log("window ondurationchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondurationchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onemptied", {
    get: function () {
        h_log("window onemptied get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onemptied set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onended", {
    get: function () {
        h_log("window onended get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onended set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onerror", {
    get: function () {
        h_log("window onerror get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onerror set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onfocus", {
    get: function () {
        h_log("window onfocus get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onfocus set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onformdata", {
    get: function () {
        h_log("window onformdata get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onformdata set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "oninput", {
    get: function () {
        h_log("window oninput get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window oninput set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "oninvalid", {
    get: function () {
        h_log("window oninvalid get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window oninvalid set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onkeydown", {
    get: function () {
        h_log("window onkeydown get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onkeydown set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onkeypress", {
    get: function () {
        h_log("window onkeypress get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onkeypress set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onkeyup", {
    get: function () {
        h_log("window onkeyup get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onkeyup set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onload", {
    get: function () {
        h_log("window onload get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onload set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onloadeddata", {
    get: function () {
        h_log("window onloadeddata get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onloadeddata set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onloadedmetadata", {
    get: function () {
        h_log("window onloadedmetadata get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onloadedmetadata set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onloadstart", {
    get: function () {
        h_log("window onloadstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onloadstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onmousedown", {
    get: function () {
        h_log("window onmousedown get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onmousedown set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onmouseenter", {
    get: function () {
        h_log("window onmouseenter get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onmouseenter set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onmouseleave", {
    get: function () {
        h_log("window onmouseleave get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onmouseleave set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onmousemove", {
    get: function () {
        h_log("window onmousemove get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onmousemove set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onmouseout", {
    get: function () {
        h_log("window onmouseout get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onmouseout set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onmouseover", {
    get: function () {
        h_log("window onmouseover get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onmouseover set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onmouseup", {
    get: function () {
        h_log("window onmouseup get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onmouseup set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onmousewheel", {
    get: function () {
        h_log("window onmousewheel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onmousewheel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpause", {
    get: function () {
        h_log("window onpause get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpause set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onplay", {
    get: function () {
        h_log("window onplay get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onplay set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onplaying", {
    get: function () {
        h_log("window onplaying get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onplaying set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onprogress", {
    get: function () {
        h_log("window onprogress get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onprogress set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onratechange", {
    get: function () {
        h_log("window onratechange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onratechange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onreset", {
    get: function () {
        h_log("window onreset get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onreset set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onresize", {
    get: function () {
        h_log("window onresize get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onresize set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onscroll", {
    get: function () {
        h_log("window onscroll get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onscroll set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onsecuritypolicyviolation", {
    get: function () {
        h_log("window onsecuritypolicyviolation get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onsecuritypolicyviolation set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onseeked", {
    get: function () {
        h_log("window onseeked get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onseeked set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onseeking", {
    get: function () {
        h_log("window onseeking get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onseeking set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onselect", {
    get: function () {
        h_log("window onselect get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onselect set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onslotchange", {
    get: function () {
        h_log("window onslotchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onslotchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onstalled", {
    get: function () {
        h_log("window onstalled get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onstalled set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onsubmit", {
    get: function () {
        h_log("window onsubmit get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onsubmit set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onsuspend", {
    get: function () {
        h_log("window onsuspend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onsuspend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ontimeupdate", {
    get: function () {
        h_log("window ontimeupdate get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ontimeupdate set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ontoggle", {
    get: function () {
        h_log("window ontoggle get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ontoggle set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onvolumechange", {
    get: function () {
        h_log("window onvolumechange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onvolumechange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onwaiting", {
    get: function () {
        h_log("window onwaiting get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onwaiting set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onwebkitanimationend", {
    get: function () {
        h_log("window onwebkitanimationend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onwebkitanimationend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onwebkitanimationiteration", {
    get: function () {
        h_log("window onwebkitanimationiteration get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onwebkitanimationiteration set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onwebkitanimationstart", {
    get: function () {
        h_log("window onwebkitanimationstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onwebkitanimationstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onwebkittransitionend", {
    get: function () {
        h_log("window onwebkittransitionend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onwebkittransitionend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onwheel", {
    get: function () {
        h_log("window onwheel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onwheel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onauxclick", {
    get: function () {
        h_log("window onauxclick get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onauxclick set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ongotpointercapture", {
    get: function () {
        h_log("window ongotpointercapture get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ongotpointercapture set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onlostpointercapture", {
    get: function () {
        h_log("window onlostpointercapture get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onlostpointercapture set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpointerdown", {
    get: function () {
        h_log("window onpointerdown get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpointerdown set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpointermove", {
    get: function () {
        h_log("window onpointermove get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpointermove set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpointerrawupdate", {
    get: function () {
        h_log("window onpointerrawupdate get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpointerrawupdate set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpointerup", {
    get: function () {
        h_log("window onpointerup get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpointerup set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpointercancel", {
    get: function () {
        h_log("window onpointercancel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpointercancel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpointerover", {
    get: function () {
        h_log("window onpointerover get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpointerover set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpointerout", {
    get: function () {
        h_log("window onpointerout get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpointerout set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpointerenter", {
    get: function () {
        h_log("window onpointerenter get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpointerenter set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpointerleave", {
    get: function () {
        h_log("window onpointerleave get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpointerleave set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onselectstart", {
    get: function () {
        h_log("window onselectstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onselectstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onselectionchange", {
    get: function () {
        h_log("window onselectionchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onselectionchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onanimationend", {
    get: function () {
        h_log("window onanimationend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onanimationend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onanimationiteration", {
    get: function () {
        h_log("window onanimationiteration get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onanimationiteration set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onanimationstart", {
    get: function () {
        h_log("window onanimationstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onanimationstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ontransitionrun", {
    get: function () {
        h_log("window ontransitionrun get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ontransitionrun set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ontransitionstart", {
    get: function () {
        h_log("window ontransitionstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ontransitionstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ontransitionend", {
    get: function () {
        h_log("window ontransitionend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ontransitionend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ontransitioncancel", {
    get: function () {
        h_log("window ontransitioncancel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ontransitioncancel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onafterprint", {
    get: function () {
        h_log("window onafterprint get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onafterprint set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onbeforeprint", {
    get: function () {
        h_log("window onbeforeprint get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onbeforeprint set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onbeforeunload", {
    get: function () {
        h_log("window onbeforeunload get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onbeforeunload set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onhashchange", {
    get: function () {
        h_log("window onhashchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onhashchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onlanguagechange", {
    get: function () {
        h_log("window onlanguagechange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onlanguagechange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onmessage", {
    get: function () {
        h_log("window onmessage get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onmessage set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onmessageerror", {
    get: function () {
        h_log("window onmessageerror get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onmessageerror set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onoffline", {
    get: function () {
        h_log("window onoffline get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onoffline set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ononline", {
    get: function () {
        h_log("window ononline get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ononline set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpagehide", {
    get: function () {
        h_log("window onpagehide get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpagehide set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpageshow", {
    get: function () {
        h_log("window onpageshow get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpageshow set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpopstate", {
    get: function () {
        h_log("window onpopstate get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpopstate set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onrejectionhandled", {
    get: function () {
        h_log("window onrejectionhandled get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onrejectionhandled set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onstorage", {
    get: function () {
        h_log("window onstorage get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onstorage set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onunhandledrejection", {
    get: function () {
        h_log("window onunhandledrejection get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onunhandledrejection set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onunload", {
    get: function () {
        h_log("window onunload get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onunload set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "crossOriginIsolated", {
    get: function () {
        h_log("window crossOriginIsolated get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "scheduler", {
    get: function () {
        h_log("window scheduler get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window scheduler set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "alert", {
    get: function () {
        h_log("[v] window alert value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window alert value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "atob", {
    get: function () {
        h_log("[v] window atob value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window atob value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "blur", {
    get: function () {
        h_log("[v] window blur value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window blur value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "btoa", {
    get: function () {
        h_log("[v] window btoa value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window btoa value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "cancelAnimationFrame", {
    get: function () {
        h_log("[v] window cancelAnimationFrame value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window cancelAnimationFrame value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "cancelIdleCallback", {
    get: function () {
        h_log("[v] window cancelIdleCallback value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window cancelIdleCallback value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "captureEvents", {
    get: function () {
        h_log("[v] window captureEvents value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window captureEvents value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "clearInterval", {
    get: function () {
        h_log("[v] window clearInterval value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window clearInterval value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "clearTimeout", {
    get: function () {
        h_log("[v] window clearTimeout value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window clearTimeout value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "close", {
    get: function () {
        h_log("[v] window close value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window close value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "confirm", {
    get: function () {
        h_log("[v] window confirm value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window confirm value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "createImageBitmap", {
    get: function () {
        h_log("[v] window createImageBitmap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window createImageBitmap value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "fetch", {
    get: function () {
        h_log("[v] window fetch value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window fetch value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "find", {
    get: function () {
        h_log("[v] window find value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window find value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "focus", {
    get: function () {
        h_log("[v] window focus value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window focus value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "getComputedStyle", {
    get: function () {
        h_log("[v] window getComputedStyle value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window getComputedStyle value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "getSelection", {
    get: function () {
        h_log("[v] window getSelection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window getSelection value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "matchMedia", {
    get: function () {
        h_log("[v] window matchMedia value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window matchMedia value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "moveBy", {
    get: function () {
        h_log("[v] window moveBy value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window moveBy value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "moveTo", {
    get: function () {
        h_log("[v] window moveTo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window moveTo value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "open", {
    get: function () {
        h_log("[v] window open value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window open value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "postMessage", {
    get: function () {
        h_log("[v] window postMessage value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window postMessage value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "print", {
    get: function () {
        h_log("[v] window print value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window print value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "prompt", {
    get: function () {
        h_log("[v] window prompt value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window prompt value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "queueMicrotask", {
    get: function () {
        h_log("[v] window queueMicrotask value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window queueMicrotask value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "releaseEvents", {
    get: function () {
        h_log("[v] window releaseEvents value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window releaseEvents value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "reportError", {
    get: function () {
        h_log("[v] window reportError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window reportError value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "requestAnimationFrame", {
    get: function () {
        h_log("[v] window requestAnimationFrame value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window requestAnimationFrame value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "requestIdleCallback", {
    get: function () {
        h_log("[v] window requestIdleCallback value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window requestIdleCallback value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "resizeBy", {
    get: function () {
        h_log("[v] window resizeBy value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window resizeBy value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "resizeTo", {
    get: function () {
        h_log("[v] window resizeTo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window resizeTo value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "scroll", {
    get: function () {
        h_log("[v] window scroll value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window scroll value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "scrollBy", {
    get: function () {
        h_log("[v] window scrollBy value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window scrollBy value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "scrollTo", {
    get: function () {
        h_log("[v] window scrollTo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window scrollTo value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});

Object.defineProperty(window, "stop", {
    get: function () {
        h_log("[v] window stop value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window stop value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "structuredClone", {
    get: function () {
        h_log("[v] window structuredClone value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window structuredClone value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "webkitCancelAnimationFrame", {
    get: function () {
        h_log("[v] window webkitCancelAnimationFrame value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitCancelAnimationFrame value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "webkitRequestAnimationFrame", {
    get: function () {
        h_log("[v] window webkitRequestAnimationFrame value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitRequestAnimationFrame value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "chrome", {value: {}, writable: true, enumerable: true, configurable: false,});
window.WebAssembly = WebAssembly;
Object.defineProperty(window, "fence", {
    get: function () {
        h_log("window fence get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "caches", {
    get: function () {
        h_log("window caches get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "cookieStore", {
    get: function () {
        h_log("window cookieStore get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondevicemotion", {
    get: function () {
        h_log("window ondevicemotion get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondevicemotion set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondeviceorientation", {
    get: function () {
        h_log("window ondeviceorientation get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondeviceorientation set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondeviceorientationabsolute", {
    get: function () {
        h_log("window ondeviceorientationabsolute get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondeviceorientationabsolute set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "launchQueue", {
    get: function () {
        h_log("window launchQueue get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "sharedStorage", {
    get: function () {
        h_log("window sharedStorage get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "documentPictureInPicture", {
    get: function () {
        h_log("window documentPictureInPicture get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onbeforematch", {
    get: function () {
        h_log("window onbeforematch get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onbeforematch set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "AbsoluteOrientationSensor", {
    get: function () {
        h_log("[v] window AbsoluteOrientationSensor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AbsoluteOrientationSensor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Accelerometer", {
    get: function () {
        h_log("[v] window Accelerometer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Accelerometer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioDecoder", {
    get: function () {
        h_log("[v] window AudioDecoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioDecoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioEncoder", {
    get: function () {
        h_log("[v] window AudioEncoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioEncoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioWorklet", {
    get: function () {
        h_log("[v] window AudioWorklet value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioWorklet value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BatteryManager", {
    get: function () {
        h_log("[v] window BatteryManager value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BatteryManager value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Cache", {
    get: function () {
        h_log("[v] window Cache value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Cache value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CacheStorage", {
    get: function () {
        h_log("[v] window CacheStorage value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CacheStorage value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Clipboard", {
    get: function () {
        h_log("[v] window Clipboard value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Clipboard value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ClipboardItem", {
    get: function () {
        h_log("[v] window ClipboardItem value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ClipboardItem value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CookieChangeEvent", {
    get: function () {
        h_log("[v] window CookieChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CookieChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CookieStore", {
    get: function () {
        h_log("[v] window CookieStore value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CookieStore value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CookieStoreManager", {
    get: function () {
        h_log("[v] window CookieStoreManager value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CookieStoreManager value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Credential", {
    get: function () {
        h_log("[v] window Credential value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Credential value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CredentialsContainer", {
    get: function () {
        h_log("[v] window CredentialsContainer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CredentialsContainer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CryptoKey", {
    get: function () {
        h_log("[v] window CryptoKey value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CryptoKey value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DeviceMotionEvent", {
    get: function () {
        h_log("[v] window DeviceMotionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DeviceMotionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DeviceMotionEventAcceleration", {
    get: function () {
        h_log("[v] window DeviceMotionEventAcceleration value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DeviceMotionEventAcceleration value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DeviceMotionEventRotationRate", {
    get: function () {
        h_log("[v] window DeviceMotionEventRotationRate value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DeviceMotionEventRotationRate value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DeviceOrientationEvent", {
    get: function () {
        h_log("[v] window DeviceOrientationEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DeviceOrientationEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FederatedCredential", {
    get: function () {
        h_log("[v] window FederatedCredential value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FederatedCredential value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPU", {
    get: function () {
        h_log("[v] window GPU value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPU value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUAdapter", {
    get: function () {
        h_log("[v] window GPUAdapter value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUAdapter value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUAdapterInfo", {
    get: function () {
        h_log("[v] window GPUAdapterInfo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUAdapterInfo value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUBindGroup", {
    get: function () {
        h_log("[v] window GPUBindGroup value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUBindGroup value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUBindGroupLayout", {
    get: function () {
        h_log("[v] window GPUBindGroupLayout value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUBindGroupLayout value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUBuffer", {
    get: function () {
        h_log("[v] window GPUBuffer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUBuffer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUBufferUsage", {value: {}, writable: true, enumerable: false, configurable: true,});
Object.defineProperty(window, "GPUCanvasContext", {
    get: function () {
        h_log("[v] window GPUCanvasContext value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUCanvasContext value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUColorWrite", {value: {}, writable: true, enumerable: false, configurable: true,});
Object.defineProperty(window, "GPUCommandBuffer", {
    get: function () {
        h_log("[v] window GPUCommandBuffer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUCommandBuffer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUCommandEncoder", {
    get: function () {
        h_log("[v] window GPUCommandEncoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUCommandEncoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUCompilationInfo", {
    get: function () {
        h_log("[v] window GPUCompilationInfo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUCompilationInfo value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUCompilationMessage", {
    get: function () {
        h_log("[v] window GPUCompilationMessage value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUCompilationMessage value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUComputePassEncoder", {
    get: function () {
        h_log("[v] window GPUComputePassEncoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUComputePassEncoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUComputePipeline", {
    get: function () {
        h_log("[v] window GPUComputePipeline value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUComputePipeline value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUDevice", {
    get: function () {
        h_log("[v] window GPUDevice value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUDevice value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUDeviceLostInfo", {
    get: function () {
        h_log("[v] window GPUDeviceLostInfo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUDeviceLostInfo value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUError", {
    get: function () {
        h_log("[v] window GPUError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUExternalTexture", {
    get: function () {
        h_log("[v] window GPUExternalTexture value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUExternalTexture value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUInternalError", {
    get: function () {
        h_log("[v] window GPUInternalError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUInternalError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUMapMode", {value: {}, writable: true, enumerable: false, configurable: true,});
Object.defineProperty(window, "GPUOutOfMemoryError", {
    get: function () {
        h_log("[v] window GPUOutOfMemoryError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUOutOfMemoryError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUPipelineError", {
    get: function () {
        h_log("[v] window GPUPipelineError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUPipelineError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUPipelineLayout", {
    get: function () {
        h_log("[v] window GPUPipelineLayout value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUPipelineLayout value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUQuerySet", {
    get: function () {
        h_log("[v] window GPUQuerySet value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUQuerySet value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUQueue", {
    get: function () {
        h_log("[v] window GPUQueue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUQueue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPURenderBundle", {
    get: function () {
        h_log("[v] window GPURenderBundle value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPURenderBundle value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPURenderBundleEncoder", {
    get: function () {
        h_log("[v] window GPURenderBundleEncoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPURenderBundleEncoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPURenderPassEncoder", {
    get: function () {
        h_log("[v] window GPURenderPassEncoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPURenderPassEncoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPURenderPipeline", {
    get: function () {
        h_log("[v] window GPURenderPipeline value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPURenderPipeline value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUSampler", {
    get: function () {
        h_log("[v] window GPUSampler value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUSampler value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUShaderModule", {
    get: function () {
        h_log("[v] window GPUShaderModule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUShaderModule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUShaderStage", {value: {}, writable: true, enumerable: false, configurable: true,});
Object.defineProperty(window, "GPUSupportedFeatures", {
    get: function () {
        h_log("[v] window GPUSupportedFeatures value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUSupportedFeatures value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUSupportedLimits", {
    get: function () {
        h_log("[v] window GPUSupportedLimits value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUSupportedLimits value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUTexture", {
    get: function () {
        h_log("[v] window GPUTexture value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUTexture value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUTextureUsage", {value: {}, writable: true, enumerable: false, configurable: true,});
Object.defineProperty(window, "GPUTextureView", {
    get: function () {
        h_log("[v] window GPUTextureView value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUTextureView value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUUncapturedErrorEvent", {
    get: function () {
        h_log("[v] window GPUUncapturedErrorEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUUncapturedErrorEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUValidationError", {
    get: function () {
        h_log("[v] window GPUValidationError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUValidationError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GravitySensor", {
    get: function () {
        h_log("[v] window GravitySensor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GravitySensor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Gyroscope", {
    get: function () {
        h_log("[v] window Gyroscope value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Gyroscope value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ImageDecoder", {
    get: function () {
        h_log("[v] window ImageDecoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ImageDecoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Keyboard", {
    get: function () {
        h_log("[v] window Keyboard value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Keyboard value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "KeyboardLayoutMap", {
    get: function () {
        h_log("[v] window KeyboardLayoutMap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window KeyboardLayoutMap value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "LinearAccelerationSensor", {
    get: function () {
        h_log("[v] window LinearAccelerationSensor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window LinearAccelerationSensor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Lock", {
    get: function () {
        h_log("[v] window Lock value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Lock value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "LockManager", {
    get: function () {
        h_log("[v] window LockManager value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window LockManager value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MIDIAccess", {
    get: function () {
        h_log("[v] window MIDIAccess value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MIDIAccess value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MIDIConnectionEvent", {
    get: function () {
        h_log("[v] window MIDIConnectionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MIDIConnectionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MIDIInput", {
    get: function () {
        h_log("[v] window MIDIInput value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MIDIInput value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MIDIInputMap", {
    get: function () {
        h_log("[v] window MIDIInputMap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MIDIInputMap value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MIDIMessageEvent", {
    get: function () {
        h_log("[v] window MIDIMessageEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MIDIMessageEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MIDIOutput", {
    get: function () {
        h_log("[v] window MIDIOutput value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MIDIOutput value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MIDIOutputMap", {
    get: function () {
        h_log("[v] window MIDIOutputMap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MIDIOutputMap value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MIDIPort", {
    get: function () {
        h_log("[v] window MIDIPort value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MIDIPort value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaDeviceInfo", {
    get: function () {
        h_log("[v] window MediaDeviceInfo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaDeviceInfo value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaDevices", {
    get: function () {
        h_log("[v] window MediaDevices value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaDevices value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaKeyMessageEvent", {
    get: function () {
        h_log("[v] window MediaKeyMessageEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaKeyMessageEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaKeySession", {
    get: function () {
        h_log("[v] window MediaKeySession value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaKeySession value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaKeyStatusMap", {
    get: function () {
        h_log("[v] window MediaKeyStatusMap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaKeyStatusMap value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaKeySystemAccess", {
    get: function () {
        h_log("[v] window MediaKeySystemAccess value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaKeySystemAccess value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaKeys", {
    get: function () {
        h_log("[v] window MediaKeys value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaKeys value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NavigationPreloadManager", {
    get: function () {
        h_log("[v] window NavigationPreloadManager value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NavigationPreloadManager value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NavigatorManagedData", {
    get: function () {
        h_log("[v] window NavigatorManagedData value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NavigatorManagedData value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "OrientationSensor", {
    get: function () {
        h_log("[v] window OrientationSensor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window OrientationSensor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PasswordCredential", {
    get: function () {
        h_log("[v] window PasswordCredential value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PasswordCredential value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RelativeOrientationSensor", {
    get: function () {
        h_log("[v] window RelativeOrientationSensor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RelativeOrientationSensor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ScreenDetailed", {
    get: function () {
        h_log("[v] window ScreenDetailed value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ScreenDetailed value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ScreenDetails", {
    get: function () {
        h_log("[v] window ScreenDetails value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ScreenDetails value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Sensor", {
    get: function () {
        h_log("[v] window Sensor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Sensor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SensorErrorEvent", {
    get: function () {
        h_log("[v] window SensorErrorEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SensorErrorEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ServiceWorker", {
    get: function () {
        h_log("[v] window ServiceWorker value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ServiceWorker value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ServiceWorkerContainer", {
    get: function () {
        h_log("[v] window ServiceWorkerContainer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ServiceWorkerContainer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ServiceWorkerRegistration", {
    get: function () {
        h_log("[v] window ServiceWorkerRegistration value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ServiceWorkerRegistration value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "StorageManager", {
    get: function () {
        h_log("[v] window StorageManager value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window StorageManager value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SubtleCrypto", {
    get: function () {
        h_log("[v] window SubtleCrypto value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SubtleCrypto value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "VideoDecoder", {
    get: function () {
        h_log("[v] window VideoDecoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window VideoDecoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "VideoEncoder", {
    get: function () {
        h_log("[v] window VideoEncoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window VideoEncoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "VirtualKeyboard", {
    get: function () {
        h_log("[v] window VirtualKeyboard value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window VirtualKeyboard value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WGSLLanguageFeatures", {
    get: function () {
        h_log("[v] window WGSLLanguageFeatures value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WGSLLanguageFeatures value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebTransport", {
    get: function () {
        h_log("[v] window WebTransport value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebTransport value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebTransportBidirectionalStream", {
    get: function () {
        h_log("[v] window WebTransportBidirectionalStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebTransportBidirectionalStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebTransportDatagramDuplexStream", {
    get: function () {
        h_log("[v] window WebTransportDatagramDuplexStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebTransportDatagramDuplexStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebTransportError", {
    get: function () {
        h_log("[v] window WebTransportError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebTransportError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Worklet", {
    get: function () {
        h_log("[v] window Worklet value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Worklet value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRDOMOverlayState", {
    get: function () {
        h_log("[v] window XRDOMOverlayState value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRDOMOverlayState value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRLayer", {
    get: function () {
        h_log("[v] window XRLayer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRLayer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRWebGLBinding", {
    get: function () {
        h_log("[v] window XRWebGLBinding value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRWebGLBinding value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AuthenticatorAssertionResponse", {
    get: function () {
        h_log("[v] window AuthenticatorAssertionResponse value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AuthenticatorAssertionResponse value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AuthenticatorAttestationResponse", {
    get: function () {
        h_log("[v] window AuthenticatorAttestationResponse value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AuthenticatorAttestationResponse value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AuthenticatorResponse", {
    get: function () {
        h_log("[v] window AuthenticatorResponse value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AuthenticatorResponse value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PublicKeyCredential", {
    get: function () {
        h_log("[v] window PublicKeyCredential value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PublicKeyCredential value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Bluetooth", {
    get: function () {
        h_log("[v] window Bluetooth value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Bluetooth value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BluetoothCharacteristicProperties", {
    get: function () {
        h_log("[v] window BluetoothCharacteristicProperties value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BluetoothCharacteristicProperties value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BluetoothDevice", {
    get: function () {
        h_log("[v] window BluetoothDevice value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BluetoothDevice value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BluetoothRemoteGATTCharacteristic", {
    get: function () {
        h_log("[v] window BluetoothRemoteGATTCharacteristic value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BluetoothRemoteGATTCharacteristic value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BluetoothRemoteGATTDescriptor", {
    get: function () {
        h_log("[v] window BluetoothRemoteGATTDescriptor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BluetoothRemoteGATTDescriptor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BluetoothRemoteGATTServer", {
    get: function () {
        h_log("[v] window BluetoothRemoteGATTServer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BluetoothRemoteGATTServer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BluetoothRemoteGATTService", {
    get: function () {
        h_log("[v] window BluetoothRemoteGATTService value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BluetoothRemoteGATTService value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CaptureController", {
    get: function () {
        h_log("[v] window CaptureController value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CaptureController value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DocumentPictureInPicture", {
    get: function () {
        h_log("[v] window DocumentPictureInPicture value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DocumentPictureInPicture value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "EyeDropper", {
    get: function () {
        h_log("[v] window EyeDropper value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window EyeDropper value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Fence", {
    get: function () {
        h_log("[v] window Fence value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Fence value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FencedFrameConfig", {
    get: function () {
        h_log("[v] window FencedFrameConfig value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FencedFrameConfig value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLFencedFrameElement", {
    get: function () {
        h_log("[v] window HTMLFencedFrameElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLFencedFrameElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FileSystemDirectoryHandle", {
    get: function () {
        h_log("[v] window FileSystemDirectoryHandle value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FileSystemDirectoryHandle value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FileSystemFileHandle", {
    get: function () {
        h_log("[v] window FileSystemFileHandle value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FileSystemFileHandle value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FileSystemHandle", {
    get: function () {
        h_log("[v] window FileSystemHandle value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FileSystemHandle value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FileSystemWritableFileStream", {
    get: function () {
        h_log("[v] window FileSystemWritableFileStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FileSystemWritableFileStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FontData", {
    get: function () {
        h_log("[v] window FontData value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FontData value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FragmentDirective", {
    get: function () {
        h_log("[v] window FragmentDirective value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FragmentDirective value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HID", {
    get: function () {
        h_log("[v] window HID value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HID value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HIDConnectionEvent", {
    get: function () {
        h_log("[v] window HIDConnectionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HIDConnectionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HIDDevice", {
    get: function () {
        h_log("[v] window HIDDevice value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HIDDevice value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HIDInputReportEvent", {
    get: function () {
        h_log("[v] window HIDInputReportEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HIDInputReportEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IdentityCredential", {
    get: function () {
        h_log("[v] window IdentityCredential value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IdentityCredential value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IdentityProvider", {
    get: function () {
        h_log("[v] window IdentityProvider value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IdentityProvider value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IdentityCredentialError", {
    get: function () {
        h_log("[v] window IdentityCredentialError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IdentityCredentialError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IdleDetector", {
    get: function () {
        h_log("[v] window IdleDetector value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IdleDetector value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "LaunchParams", {
    get: function () {
        h_log("[v] window LaunchParams value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window LaunchParams value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "LaunchQueue", {
    get: function () {
        h_log("[v] window LaunchQueue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window LaunchQueue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Mojo", {
    get: function () {
        h_log("[v] window Mojo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Mojo value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MojoHandle", {
    get: function () {
        h_log("[v] window MojoHandle value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MojoHandle value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MojoWatcher", {
    get: function () {
        h_log("[v] window MojoWatcher value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MojoWatcher value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NavigatorLogin", {
    get: function () {
        h_log("[v] window NavigatorLogin value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NavigatorLogin value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "OTPCredential", {
    get: function () {
        h_log("[v] window OTPCredential value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window OTPCredential value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PaymentAddress", {
    get: function () {
        h_log("[v] window PaymentAddress value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PaymentAddress value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PaymentRequest", {
    get: function () {
        h_log("[v] window PaymentRequest value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PaymentRequest value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PaymentResponse", {
    get: function () {
        h_log("[v] window PaymentResponse value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PaymentResponse value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PaymentMethodChangeEvent", {
    get: function () {
        h_log("[v] window PaymentMethodChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PaymentMethodChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Presentation", {
    get: function () {
        h_log("[v] window Presentation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Presentation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PresentationAvailability", {
    get: function () {
        h_log("[v] window PresentationAvailability value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PresentationAvailability value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PresentationConnection", {
    get: function () {
        h_log("[v] window PresentationConnection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PresentationConnection value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PresentationConnectionAvailableEvent", {
    get: function () {
        h_log("[v] window PresentationConnectionAvailableEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PresentationConnectionAvailableEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PresentationConnectionCloseEvent", {
    get: function () {
        h_log("[v] window PresentationConnectionCloseEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PresentationConnectionCloseEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PresentationConnectionList", {
    get: function () {
        h_log("[v] window PresentationConnectionList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PresentationConnectionList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PresentationReceiver", {
    get: function () {
        h_log("[v] window PresentationReceiver value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PresentationReceiver value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PresentationRequest", {
    get: function () {
        h_log("[v] window PresentationRequest value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PresentationRequest value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Serial", {
    get: function () {
        h_log("[v] window Serial value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Serial value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SerialPort", {
    get: function () {
        h_log("[v] window SerialPort value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SerialPort value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SharedStorage", {
    get: function () {
        h_log("[v] window SharedStorage value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SharedStorage value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SharedStorageWorklet", {
    get: function () {
        h_log("[v] window SharedStorageWorklet value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SharedStorageWorklet value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USB", {
    get: function () {
        h_log("[v] window USB value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USB value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBAlternateInterface", {
    get: function () {
        h_log("[v] window USBAlternateInterface value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBAlternateInterface value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBConfiguration", {
    get: function () {
        h_log("[v] window USBConfiguration value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBConfiguration value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBConnectionEvent", {
    get: function () {
        h_log("[v] window USBConnectionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBConnectionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBDevice", {
    get: function () {
        h_log("[v] window USBDevice value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBDevice value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBEndpoint", {
    get: function () {
        h_log("[v] window USBEndpoint value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBEndpoint value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBInTransferResult", {
    get: function () {
        h_log("[v] window USBInTransferResult value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBInTransferResult value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBInterface", {
    get: function () {
        h_log("[v] window USBInterface value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBInterface value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBIsochronousInTransferPacket", {
    get: function () {
        h_log("[v] window USBIsochronousInTransferPacket value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBIsochronousInTransferPacket value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBIsochronousInTransferResult", {
    get: function () {
        h_log("[v] window USBIsochronousInTransferResult value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBIsochronousInTransferResult value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBIsochronousOutTransferPacket", {
    get: function () {
        h_log("[v] window USBIsochronousOutTransferPacket value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBIsochronousOutTransferPacket value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBIsochronousOutTransferResult", {
    get: function () {
        h_log("[v] window USBIsochronousOutTransferResult value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBIsochronousOutTransferResult value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBOutTransferResult", {
    get: function () {
        h_log("[v] window USBOutTransferResult value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBOutTransferResult value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WakeLock", {
    get: function () {
        h_log("[v] window WakeLock value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WakeLock value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WakeLockSentinel", {
    get: function () {
        h_log("[v] window WakeLockSentinel value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WakeLockSentinel value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WindowControlsOverlay", {
    get: function () {
        h_log("[v] window WindowControlsOverlay value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WindowControlsOverlay value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WindowControlsOverlayGeometryChangeEvent", {
    get: function () {
        h_log("[v] window WindowControlsOverlayGeometryChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WindowControlsOverlayGeometryChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRAnchor", {
    get: function () {
        h_log("[v] window XRAnchor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRAnchor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRAnchorSet", {
    get: function () {
        h_log("[v] window XRAnchorSet value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRAnchorSet value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRBoundedReferenceSpace", {
    get: function () {
        h_log("[v] window XRBoundedReferenceSpace value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRBoundedReferenceSpace value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRCPUDepthInformation", {
    get: function () {
        h_log("[v] window XRCPUDepthInformation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRCPUDepthInformation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRCamera", {
    get: function () {
        h_log("[v] window XRCamera value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRCamera value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRDepthInformation", {
    get: function () {
        h_log("[v] window XRDepthInformation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRDepthInformation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRFrame", {
    get: function () {
        h_log("[v] window XRFrame value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRFrame value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRHitTestResult", {
    get: function () {
        h_log("[v] window XRHitTestResult value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRHitTestResult value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRHitTestSource", {
    get: function () {
        h_log("[v] window XRHitTestSource value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRHitTestSource value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRInputSource", {
    get: function () {
        h_log("[v] window XRInputSource value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRInputSource value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRInputSourceArray", {
    get: function () {
        h_log("[v] window XRInputSourceArray value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRInputSourceArray value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRInputSourceEvent", {
    get: function () {
        h_log("[v] window XRInputSourceEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRInputSourceEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRInputSourcesChangeEvent", {
    get: function () {
        h_log("[v] window XRInputSourcesChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRInputSourcesChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRLightEstimate", {
    get: function () {
        h_log("[v] window XRLightEstimate value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRLightEstimate value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRLightProbe", {
    get: function () {
        h_log("[v] window XRLightProbe value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRLightProbe value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRPose", {
    get: function () {
        h_log("[v] window XRPose value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRPose value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRRay", {
    get: function () {
        h_log("[v] window XRRay value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRRay value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRReferenceSpace", {
    get: function () {
        h_log("[v] window XRReferenceSpace value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRReferenceSpace value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRReferenceSpaceEvent", {
    get: function () {
        h_log("[v] window XRReferenceSpaceEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRReferenceSpaceEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRRenderState", {
    get: function () {
        h_log("[v] window XRRenderState value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRRenderState value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRRigidTransform", {
    get: function () {
        h_log("[v] window XRRigidTransform value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRRigidTransform value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRSession", {
    get: function () {
        h_log("[v] window XRSession value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRSession value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRSessionEvent", {
    get: function () {
        h_log("[v] window XRSessionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRSessionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRSpace", {
    get: function () {
        h_log("[v] window XRSpace value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRSpace value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRSystem", {
    get: function () {
        h_log("[v] window XRSystem value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRSystem value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRTransientInputHitTestResult", {
    get: function () {
        h_log("[v] window XRTransientInputHitTestResult value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRTransientInputHitTestResult value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRTransientInputHitTestSource", {
    get: function () {
        h_log("[v] window XRTransientInputHitTestSource value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRTransientInputHitTestSource value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRView", {
    get: function () {
        h_log("[v] window XRView value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRView value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRViewerPose", {
    get: function () {
        h_log("[v] window XRViewerPose value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRViewerPose value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRViewport", {
    get: function () {
        h_log("[v] window XRViewport value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRViewport value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRWebGLDepthInformation", {
    get: function () {
        h_log("[v] window XRWebGLDepthInformation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRWebGLDepthInformation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRWebGLLayer", {
    get: function () {
        h_log("[v] window XRWebGLLayer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRWebGLLayer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "getScreenDetails", {
    get: function () {
        h_log("[v] window getScreenDetails value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window getScreenDetails value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "queryLocalFonts", {
    get: function () {
        h_log("[v] window queryLocalFonts value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window queryLocalFonts value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "showDirectoryPicker", {
    get: function () {
        h_log("[v] window showDirectoryPicker value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window showDirectoryPicker value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "showOpenFilePicker", {
    get: function () {
        h_log("[v] window showOpenFilePicker value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window showOpenFilePicker value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "showSaveFilePicker", {
    get: function () {
        h_log("[v] window showSaveFilePicker value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window showSaveFilePicker value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "originAgentCluster", {
    get: function () {
        h_log("window originAgentCluster get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "credentialless", {
    get: function () {
        h_log("window credentialless get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "speechSynthesis", {
    get: function () {
        h_log("window speechSynthesis get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "oncontentvisibilityautostatechange", {
    get: function () {
        h_log("window oncontentvisibilityautostatechange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window oncontentvisibilityautostatechange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onscrollend", {
    get: function () {
        h_log("window onscrollend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onscrollend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "AnimationPlaybackEvent", {
    get: function () {
        h_log("[v] window AnimationPlaybackEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AnimationPlaybackEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AnimationTimeline", {
    get: function () {
        h_log("[v] window AnimationTimeline value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AnimationTimeline value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSAnimation", {
    get: function () {
        h_log("[v] window CSSAnimation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSAnimation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSTransition", {
    get: function () {
        h_log("[v] window CSSTransition value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSTransition value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DocumentTimeline", {
    get: function () {
        h_log("[v] window DocumentTimeline value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DocumentTimeline value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BackgroundFetchManager", {
    get: function () {
        h_log("[v] window BackgroundFetchManager value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BackgroundFetchManager value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BackgroundFetchRecord", {
    get: function () {
        h_log("[v] window BackgroundFetchRecord value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BackgroundFetchRecord value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BackgroundFetchRegistration", {
    get: function () {
        h_log("[v] window BackgroundFetchRegistration value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BackgroundFetchRegistration value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BluetoothUUID", {
    get: function () {
        h_log("[v] window BluetoothUUID value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BluetoothUUID value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BrowserCaptureMediaStreamTrack", {
    get: function () {
        h_log("[v] window BrowserCaptureMediaStreamTrack value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BrowserCaptureMediaStreamTrack value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CropTarget", {
    get: function () {
        h_log("[v] window CropTarget value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CropTarget value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSScopeRule", {
    get: function () {
        h_log("[v] window CSSScopeRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSScopeRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSStartingStyleRule", {
    get: function () {
        h_log("[v] window CSSStartingStyleRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSStartingStyleRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ContentVisibilityAutoStateChangeEvent", {
    get: function () {
        h_log("[v] window ContentVisibilityAutoStateChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ContentVisibilityAutoStateChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DelegatedInkTrailPresenter", {
    get: function () {
        h_log("[v] window DelegatedInkTrailPresenter value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DelegatedInkTrailPresenter value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Ink", {
    get: function () {
        h_log("[v] window Ink value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Ink value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DocumentPictureInPictureEvent", {
    get: function () {
        h_log("[v] window DocumentPictureInPictureEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DocumentPictureInPictureEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Highlight", {
    get: function () {
        h_log("[v] window Highlight value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Highlight value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HighlightRegistry", {
    get: function () {
        h_log("[v] window HighlightRegistry value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HighlightRegistry value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaMetadata", {
    get: function () {
        h_log("[v] window MediaMetadata value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaMetadata value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaSession", {
    get: function () {
        h_log("[v] window MediaSession value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaSession value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MutationEvent", {
    get: function () {
        h_log("[v] window MutationEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MutationEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NavigatorUAData", {
    get: function () {
        h_log("[v] window NavigatorUAData value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NavigatorUAData value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Notification", {
    get: function () {
        h_log("[v] window Notification value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Notification value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PaymentManager", {
    get: function () {
        h_log("[v] window PaymentManager value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PaymentManager value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PaymentRequestUpdateEvent", {
    get: function () {
        h_log("[v] window PaymentRequestUpdateEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PaymentRequestUpdateEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PeriodicSyncManager", {
    get: function () {
        h_log("[v] window PeriodicSyncManager value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PeriodicSyncManager value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PermissionStatus", {
    get: function () {
        h_log("[v] window PermissionStatus value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PermissionStatus value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Permissions", {
    get: function () {
        h_log("[v] window Permissions value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Permissions value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PushManager", {
    get: function () {
        h_log("[v] window PushManager value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PushManager value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PushSubscription", {
    get: function () {
        h_log("[v] window PushSubscription value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PushSubscription value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PushSubscriptionOptions", {
    get: function () {
        h_log("[v] window PushSubscriptionOptions value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PushSubscriptionOptions value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RemotePlayback", {
    get: function () {
        h_log("[v] window RemotePlayback value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RemotePlayback value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ScrollTimeline", {
    get: function () {
        h_log("[v] window ScrollTimeline value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ScrollTimeline value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ViewTimeline", {
    get: function () {
        h_log("[v] window ViewTimeline value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ViewTimeline value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SharedWorker", {
    get: function () {
        h_log("[v] window SharedWorker value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SharedWorker value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SpeechSynthesisErrorEvent", {
    get: function () {
        h_log("[v] window SpeechSynthesisErrorEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SpeechSynthesisErrorEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SpeechSynthesisEvent", {
    get: function () {
        h_log("[v] window SpeechSynthesisEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SpeechSynthesisEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SpeechSynthesisUtterance", {
    get: function () {
        h_log("[v] window SpeechSynthesisUtterance value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SpeechSynthesisUtterance value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "VideoPlaybackQuality", {
    get: function () {
        h_log("[v] window VideoPlaybackQuality value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window VideoPlaybackQuality value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "VisibilityStateEntry", {
    get: function () {
        h_log("[v] window VisibilityStateEntry value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window VisibilityStateEntry value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "webkitSpeechGrammar", {
    get: function () {
        h_log("[v] window webkitSpeechGrammar value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitSpeechGrammar value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "webkitSpeechGrammarList", {
    get: function () {
        h_log("[v] window webkitSpeechGrammarList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitSpeechGrammarList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "webkitSpeechRecognition", {
    get: function () {
        h_log("[v] window webkitSpeechRecognition value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitSpeechRecognition value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "webkitSpeechRecognitionError", {
    get: function () {
        h_log("[v] window webkitSpeechRecognitionError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitSpeechRecognitionError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "webkitSpeechRecognitionEvent", {
    get: function () {
        h_log("[v] window webkitSpeechRecognitionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitSpeechRecognitionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "webkitRequestFileSystem", {
    get: function () {
        h_log("[v] window webkitRequestFileSystem value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitRequestFileSystem value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "webkitResolveLocalFileSystemURL", {
    get: function () {
        h_log("[v] window webkitResolveLocalFileSystemURL value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitResolveLocalFileSystemURL value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "JSCompiler_renameProperty", {
    get: function () {
        h_log("[v] window JSCompiler_renameProperty value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window JSCompiler_renameProperty value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "dir", {
    get: function () {
        h_log("[v] window dir value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window dir value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "dirxml", {
    get: function () {
        h_log("[v] window dirxml value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window dirxml value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "profile", {
    get: function () {
        h_log("[v] window profile value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window profile value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "profileEnd", {
    get: function () {
        h_log("[v] window profileEnd value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window profileEnd value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "clear", {
    get: function () {
        h_log("[v] window clear value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window clear value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "table", {
    get: function () {
        h_log("[v] window table value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window table value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "keys", {
    get: function () {
        h_log("[v] window keys value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window keys value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "values", {
    get: function () {
        h_log("[v] window values value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window values value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "debug", {
    get: function () {
        h_log("[v] window debug value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window debug value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "undebug", {
    get: function () {
        h_log("[v] window undebug value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window undebug value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "monitor", {
    get: function () {
        h_log("[v] window monitor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window monitor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "unmonitor", {
    get: function () {
        h_log("[v] window unmonitor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window unmonitor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "inspect", {
    get: function () {
        h_log("[v] window inspect value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window inspect value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "copy", {
    get: function () {
        h_log("[v] window copy value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window copy value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "queryObjects", {
    get: function () {
        h_log("[v] window queryObjects value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window queryObjects value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "getEventListeners", {
    get: function () {
        h_log("[v] window getEventListeners value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window getEventListeners value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "getAccessibleName", {
    get: function () {
        h_log("[v] window getAccessibleName value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window getAccessibleName value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "getAccessibleRole", {
    get: function () {
        h_log("[v] window getAccessibleRole value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window getAccessibleRole value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "monitorEvents", {
    get: function () {
        h_log("[v] window monitorEvents value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window monitorEvents value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "unmonitorEvents", {
    get: function () {
        h_log("[v] window unmonitorEvents value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window unmonitorEvents value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
window.__proto__ = {};
Object.defineProperty(window.__proto__, "TEMPORARY", {
    value: 0,
    writable: false,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(window.__proto__, "PERSISTENT", {
    value: 1,
    writable: false,
    enumerable: true,
    configurable: false,
});
Window = function () {
    h_log("window.__proto__ constructor value [call]", "arg:", arguments)
};
Window.prototype = window.__proto__;
Object.defineProperty(window.__proto__, "constructor", {
    value: Window,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(window.__proto__, Symbol.toStringTag, {
    value: "Window",
    writable: false,
    enumerable: false,
    configurable: true,
});
window.__proto__.__proto__ = {};
Object.defineProperty(window.__proto__.__proto__, Symbol.toStringTag, {
    value: "WindowProperties",
    writable: false,
    enumerable: false,
    configurable: true,
});
window.__proto__.__proto__.__proto__ = eventTarget;