"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var class_variance_authority_1 = require("class-variance-authority");
var cardStyles = (0, class_variance_authority_1.cva)("shadow-md rounded-lg overflow-hidden", {
    variants: {
        size: {
            small: "w-64",
            medium: "w-80",
            large: "w-96",
        },
        color: {
            default: "border-gray-200",
            primary: "border-blue-500",
            secondary: "border-gray-400",
            danger: "border-red-500",
        },
        bgColor: {
            white: "bg-white",
            gray: "bg-gray-100",
            blue: "bg-blue-100",
            red: "bg-red-100",
        },
        titleColor: {
            black: "text-black",
            gray: "text-gray-800",
            blue: "text-blue-800",
            red: "text-red-800",
        },
        textColor: {
            gray: "text-gray-600",
            black: "text-black",
            blue: "text-blue-600",
            red: "text-red-600",
        },
    },
    defaultVariants: {
        size: "medium",
        color: "default",
        bgColor: "white",
        titleColor: "black",
        textColor: "gray",
    },
});
var Card = function (_a) {
    var title = _a.title, description = _a.description, imageUrl = _a.imageUrl, _b = _a.size, size = _b === void 0 ? "medium" : _b, _c = _a.color, color = _c === void 0 ? "default" : _c, _d = _a.bgColor, bgColor = _d === void 0 ? "white" : _d, _e = _a.titleColor, titleColor = _e === void 0 ? "black" : _e, _f = _a.textColor, textColor = _f === void 0 ? "gray" : _f;
    var cardClass = cardStyles({ size: size, color: color, bgColor: bgColor, titleColor: titleColor, textColor: textColor });
    return (react_1.default.createElement("div", { className: cardClass },
        react_1.default.createElement("img", { src: imageUrl, alt: title, className: "w-full h-52 object-cover" }),
        react_1.default.createElement("div", { className: "p-4" },
            react_1.default.createElement("h3", { className: "text-2xl font-bold mb-1 ".concat(titleColor) }, title),
            react_1.default.createElement("p", { className: "text-lg ".concat(textColor) }, description))));
};
exports.default = Card;
