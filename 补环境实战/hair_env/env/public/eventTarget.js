let eventTarget = {};
Object.defineProperty(eventTarget, "addEventListener", {
    get: function () {
        h_log("[v] eventTarget addEventListener value [get]", "arg:", arguments);
        return function () {
            h_log("[v] eventTarget addEventListener value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(eventTarget, "dispatchEvent", {
    get: function () {
        h_log("[v] eventTarget dispatchEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] eventTarget dispatchEvent value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(eventTarget, "removeEventListener", {
    get: function () {
        h_log("[v] eventTarget removeEventListener value [get]", "arg:", arguments);
        return function () {
            h_log("[v] eventTarget removeEventListener value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
EventTarget = function () {
    h_log("eventTarget constructor value [call]", "arg:", arguments)
};
EventTarget.prototype = eventTarget;
Object.defineProperty(eventTarget, "constructor", {
    value: EventTarget,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(eventTarget, Symbol.toStringTag, {
    value: "EventTarget",
    writable: false,
    enumerable: false,
    configurable: true,
});
