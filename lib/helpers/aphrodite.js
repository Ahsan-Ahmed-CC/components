"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.css = exports.StyleSheet = void 0;
var lodash_1 = __importDefault(require("lodash"));
var no_important_1 = require("aphrodite/no-important");
var _a = no_important_1.StyleSheet.extend([{
        selectorHandler: function (selector, baseSelector, generateSubtreeStyles) {
            var nestedTags = [];
            var selectors = selector.split(',');
            lodash_1.default.each(selectors, function (subselector, key) {
                if (selector[0] === '&') {
                    var tag = key === 0 ? subselector.slice(1) : subselector;
                    var nestedTag = generateSubtreeStyles((baseSelector + " " + tag).replace(/ +(?= )/g, ''));
                    nestedTags.push(nestedTag);
                }
            });
            return lodash_1.default.isEmpty(nestedTags) ? null : lodash_1.default.join(lodash_1.default.flattenDeep(nestedTags), ' ');
        }
    }]), StyleSheet = _a.StyleSheet, css = _a.css;
exports.StyleSheet = StyleSheet;
exports.css = css;
