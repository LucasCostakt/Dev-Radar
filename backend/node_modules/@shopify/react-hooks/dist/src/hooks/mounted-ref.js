"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useMountedRef() {
    var mounted = react_1.useRef(true);
    react_1.useEffect(function () {
        return function () {
            mounted.current = false;
        };
    }, []);
    return mounted;
}
exports.useMountedRef = useMountedRef;
