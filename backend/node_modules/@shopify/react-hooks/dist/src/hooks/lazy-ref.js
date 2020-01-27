"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var UNSET = Symbol('unset');
function useLazyRef(getValue) {
    var ref = react_1.useRef(UNSET);
    if (ref.current === UNSET) {
        ref.current = getValue();
    }
    return ref;
}
exports.useLazyRef = useLazyRef;
