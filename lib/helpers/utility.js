"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = void 0;
var lodash_1 = __importDefault(require("lodash"));
exports.memoize = function (fn) {
    var lastArgs = [];
    var lastResult = null;
    var called = false;
    function memoized() {
        var args = [];
        for (var _a = 0; _a < arguments.length; _a++) {
            args[_a] = arguments[_a];
        }
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (called && lodash_1.default.isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = fn.apply(window, newArgs);
        called = true;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
};
