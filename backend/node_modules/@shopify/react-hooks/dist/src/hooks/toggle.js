"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
/**
 * Returns a stateful value, and a set of memoized functions to toggle it,
 * set it to true and set it to false
 */
function useToggle(initialState) {
    var _a = tslib_1.__read(react_1.useState(initialState), 2), value = _a[0], setState = _a[1];
    return {
        value: value,
        toggle: react_1.useCallback(function () { return setState(function (state) { return !state; }); }, []),
        setTrue: react_1.useCallback(function () { return setState(true); }, []),
        setFalse: react_1.useCallback(function () { return setState(false); }, []),
    };
}
exports.useToggle = useToggle;
