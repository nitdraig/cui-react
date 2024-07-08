"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var class_variance_authority_1 = require("class-variance-authority");
var cardStyles = (0, class_variance_authority_1.cva)("bg-white shadow-md rounded-lg overflow-hidden", {
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
var TextCard = function (_a) {
    var title = _a.title, _b = _a.titleColor, titleColor = _b === void 0 ? "text-black" : _b, subtitle = _a.subtitle, _c = _a.subtitleColor, subtitleColor = _c === void 0 ? "text-gray-600" : _c, size = _a.size, color = _a.color;
    return (react_1.default.createElement("div", { className: cardStyles({ size: size, color: color }) },
        react_1.default.createElement("div", { className: "flex flex-col justify-between p-4" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("h3", { className: "text-lg font-semibold mb-1 ".concat(titleColor) }, title),
                react_1.default.createElement("div", { className: "text-center" },
                    react_1.default.createElement("p", { className: "text-md ".concat(subtitleColor) }, subtitle))))));
};
exports.default = TextCard;
