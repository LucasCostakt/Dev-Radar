"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function usePrevious(value) {
    var ref = react_1.useRef();
    react_1.useEffect(function () {
        ref.current = value;
    }, [value]);
    return ref.current;
}
exports.usePrevious = usePrevious;
