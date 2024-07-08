"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Spinner = function () {
    return (react_1.default.createElement("div", { className: "flex justify-center items-center" },
        react_1.default.createElement("div", { className: "animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-blue-500" })));
};
exports.default = Spinner;
