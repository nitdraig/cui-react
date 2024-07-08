"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
var react_1 = __importDefault(require("react"));
var class_variance_authority_1 = require("class-variance-authority");
var buttonStyles = (0, class_variance_authority_1.cva)("rounded-md cursor-pointer py-2 px-4 text-white font-sm transition duration-300 ease-in-out", {
    variants: {
        size: {
            small: "text-xs py-1 px-2",
            medium: "text-sm py-2 px-4",
            large: "text-lg py-3 px-6",
            full: "text-2xl py-4 px-8",
        },
        color: {
            primary: "bg-[#FFFFFF] text-[#000] border-2 border-[#000000] hover:bg-[#e0e0e0] ",
            secondary: "bg-[#000000] border-2 border-[#000000] hover:bg-[#534f4f]  ",
            danger: "bg-[#ad0202] hover:bg-[#df0505] ",
            plate: "bg-[#CCCCCC]  text-[#383838]   hover:bg-[#2c2727]  hover:text-[#ffffff]  ",
        },
        defaultVariants: {
            color: "primary",
        },
    },
});
function Button(_a) {
    var size = _a.size, color = _a.color, text = _a.text, onClick = _a.onClick, props = __rest(_a, ["size", "color", "text", "onClick"]);
    var handleClick = function () {
        if (onClick) {
            onClick();
        }
    };
    return (react_1.default.createElement("button", __assign({ className: buttonStyles({ size: size, color: color }), onClick: handleClick }, props), text));
}
