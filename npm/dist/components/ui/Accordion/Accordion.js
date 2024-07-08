"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var class_variance_authority_1 = require("class-variance-authority");
var accordionStyles = (0, class_variance_authority_1.cva)("", {
    variants: {
        size: {
            small: "w-64",
            medium: "w-80",
            large: "w-96",
        },
        color: {
            default: "bg-transparent",
            primary: "bg-black",
            secondary: "bg-gray-100",
            danger: "bg-red-100",
            white: "bg-white",
        },
        textColor: {
            default: "text-black",
            primary: "text-blue-500",
            secondary: "text-gray-500",
            danger: "text-red-500",
            white: "text-white",
        },
        defaultVariants: {
            size: "medium",
            color: "default",
            textColor: "default",
        },
    },
});
var Accordion = function (_a) {
    var items = _a.items, color = _a.color, textColor = _a.textColor;
    var _b = (0, react_1.useState)(null), activeIndex = _b[0], setActiveIndex = _b[1];
    var toggleAccordion = function (index) {
        setActiveIndex(function (prevIndex) { return (prevIndex === index ? null : index); });
    };
    return (react_1.default.createElement("div", { className: "".concat(accordionStyles({
            color: color,
            textColor: textColor,
        }), " divide-y divide-gray-200") }, items.map(function (item, index) { return (react_1.default.createElement("div", { key: index },
        react_1.default.createElement("div", { className: "flex justify-between items-center cursor-pointer p-4 ".concat(accordionStyles({
                textColor: textColor,
            })), onClick: function () { return toggleAccordion(index); } },
            react_1.default.createElement("h3", { className: "text-lg font-semibold" }, item.title),
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 transition-transform ".concat(activeIndex === index ? "transform rotate-180" : ""), viewBox: "0 0 20 20", fill: "currentColor" },
                react_1.default.createElement("path", { d: "M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 10.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-.707.293z" }))),
        react_1.default.createElement("div", { className: "overflow-hidden transition-all ".concat(activeIndex === index ? "h-auto opacity-100" : "h-0 opacity-0") },
            react_1.default.createElement("div", { className: "p-4" },
                react_1.default.createElement("p", null, item.content))))); })));
};
exports.default = Accordion;
