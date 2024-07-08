"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Input = function (_a) {
    var id = _a.id, name = _a.name, labelText = _a.labelText, type = _a.type, pattern = _a.pattern;
    return (react_1.default.createElement("div", { className: "relative z-0 mb-6 w-full group" },
        react_1.default.createElement("input", { type: type, name: name, id: id, className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer", placeholder: " ", required: true, pattern: pattern }),
        react_1.default.createElement("label", { htmlFor: id, className: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" }, labelText)));
};
exports.default = Input;
