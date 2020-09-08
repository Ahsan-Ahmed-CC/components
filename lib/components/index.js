"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = exports.Table = exports.Button = void 0;
var Button_1 = __importDefault(require("./Button"));
exports.Button = Button_1.default;
var Table_1 = __importDefault(require("./Table"));
exports.Table = Table_1.default;
var Pagination_1 = __importDefault(require("./Pagination"));
exports.Pagination = Pagination_1.default;
exports.default = {
    Button: Button_1.default,
    Table: Table_1.default,
    Pagination: Pagination_1.default
};
