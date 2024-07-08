"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var class_variance_authority_1 = require("class-variance-authority");
var cardStyles = (0, class_variance_authority_1.cva)("bg-white lg:h-96 h-80  shadow-md rounded-lg overflow-hidden", {
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
        defaultVariants: {
            size: "medium",
            color: "default",
        },
    },
});
var Card = function (_a) {
    var title = _a.title, description = _a.description, imageUrl = _a.imageUrl, size = _a.size, color = _a.color;
    return (react_1.default.createElement("div", { className: cardStyles({ size: size, color: color }) },
        react_1.default.createElement("img", { src: imageUrl, alt: title, className: "w-full h-52  object-cover" }),
        react_1.default.createElement("div", { className: "p-4" },
            react_1.default.createElement("h3", { className: "text-lg font-semibold mb-1" }, title),
            react_1.default.createElement("p", { className: "text-sm text-gray-600" }, description))));
};
exports.default = Card;
