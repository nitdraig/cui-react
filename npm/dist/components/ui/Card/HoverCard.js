"use strict";
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
var class_variance_authority_1 = require("class-variance-authority");
var react_1 = __importStar(require("react"));
var cardStyles = (0, class_variance_authority_1.cva)("bg-white lg:h-96 h-80 shadow-md rounded-lg overflow-hidden relative", {
    variants: {
        size: {
            small: "w-64",
            medium: "w-80",
            large: "w-96",
        },
        color: {
            default: "text-[#fff] border-gray-200",
            primary: "text-black border-blue-500",
            secondary: "border-gray-400",
            danger: "border-red-500",
        },
        defaultVariants: {
            size: "medium",
            color: "default",
        },
    },
});
var HoverCard = function (_a) {
    var title = _a.title, titleColor = _a.titleColor, subtitle = _a.subtitle, subtitleColor = _a.subtitleColor, imageUrl = _a.imageUrl, size = _a.size, color = _a.color;
    var _b = (0, react_1.useState)(false), isHovered = _b[0], setIsHovered = _b[1];
    var handleMouseEnter = function () {
        setIsHovered(true);
    };
    var handleMouseLeave = function () {
        setIsHovered(false);
    };
    return (react_1.default.createElement("div", { className: cardStyles({ size: size, color: color }), onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: "absolute inset-0 bg-cover bg-no-repeat bg-center filter ".concat(isHovered ? "blur-lg" : "blur-0", " transition-filter duration-500"), style: { backgroundImage: "url(".concat(imageUrl, ")") } }),
            react_1.default.createElement("div", { className: "absolute inset-0 p-4 flex flex-col justify-end opacity-0 hover:opacity-100 bg-black bg-opacity-20 transition-opacity duration-500" },
                react_1.default.createElement("h3", { className: "text-2xl font-bold mb-1 ".concat(titleColor) }, title),
                react_1.default.createElement("p", { className: "text-lg ".concat(subtitleColor) }, subtitle)))));
};
exports.default = HoverCard;
