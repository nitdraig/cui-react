"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var class_variance_authority_1 = require("class-variance-authority");
var selectStyles = (0, class_variance_authority_1.cva)("relative", {
    variants: {
        color: {
            primary: "border-[#000000] hover:border-[#e0e0e0] ",
            secondary: "border-[#ffffff] hover:border-[#000000]  ",
            danger: "bg-[#ad0202] hover:bg-[#df0505] ",
            plate: "border-[#c7c3c3]  hover:border-[#2c2727]    ",
            blue: "border-[#328dca] hover:border-[#48b6ff]   ",
        },
        defaultVariants: {
            color: "primary",
        },
    },
});
var Select = function (_a) {
    var options = _a.options, className = _a.className, color = _a.color;
    return (react_1.default.createElement("div", { className: "relative  ".concat(className) },
        react_1.default.createElement("select", { className: "block appearance-none w-full   border ".concat(selectStyles({
                color: color,
            }), " px-4 py-2 pr-8 rounded-md shadow  leading-tight focus:outline-none focus:shadow-outline") },
            react_1.default.createElement("option", { value: "" }, "Select an option"),
            options.map(function (option) { return (react_1.default.createElement("option", { key: option.value, value: option.value }, option.label)); })),
        react_1.default.createElement("div", { className: "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none" },
            react_1.default.createElement("svg", { className: "w-4 h-4 dark:text-gray-500 text-gray-200", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" },
                react_1.default.createElement("path", { fillRule: "evenodd", d: "M10 12a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L10 10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-.707.293z" })))));
};
exports.default = Select;
