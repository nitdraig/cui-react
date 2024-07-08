"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var class_variance_authority_1 = require("class-variance-authority");
var spinnerStyles = (0, class_variance_authority_1.cva)("animate-spin rounded-full border-t-2 border-b-2", {
    variants: {
        size: {
            small: "h-6 w-6",
            medium: "h-10 w-10",
            large: "h-14 w-14",
        },
        color: {
            blue: "border-blue-500",
            red: "border-red-500",
            green: "border-green-500",
            yellow: "border-yellow-500",
            black: "border-black-500",
            white: "border-white-500",
        },
    },
    defaultVariants: {
        size: "medium",
        color: "blue",
    },
});
var Spinner = function (_a) {
    var size = _a.size, color = _a.color;
    return (react_1.default.createElement("div", { className: "flex justify-center items-center" },
        react_1.default.createElement("div", { className: spinnerStyles({ size: size, color: color }) })));
};
exports.default = Spinner;
