"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var class_variance_authority_1 = require("class-variance-authority");
var cardStyles = (0, class_variance_authority_1.cva)("bg-transparent shadow-md lg:h-96 h-80 rounded-lg overflow-hidden relative bg-cover bg-no-repeat bg-center", {
    variants: {
        size: {
            small: "w-64",
            medium: "w-80",
            large: "w-96",
        },
        bg: {
            gray: "bg-gray-600",
            white: "bg-white",
            black: "bg-black",
            blue: "bg-blue-600",
            red: "bg-red-600",
        },
        titleColor: {
            gray: "text-gray-800",
            white: "text-white",
            black: "text-black",
            blue: "text-blue-800",
            red: "text-red-800",
        },
        subtitleColor: {
            gray: "text-gray-600",
            white: "text-white",
            black: "text-black",
            blue: "text-blue-600",
            red: "text-red-600",
        },
        defaultVariants: {
            size: "medium",
            color: "default",
            titleColor: "black",
            subtitleColor: "black",
        },
    },
});
var OverlayCard = function (_a) {
    var title = _a.title, _b = _a.titleColor, titleColor = _b === void 0 ? "black" : _b, subtitle = _a.subtitle, _c = _a.subtitleColor, subtitleColor = _c === void 0 ? "black" : _c, imageUrl = _a.imageUrl, size = _a.size, bg = _a.bg;
    return (react_1.default.createElement("div", { className: cardStyles({ size: size, titleColor: titleColor, subtitleColor: subtitleColor, bg: bg }), style: { backgroundImage: "url(".concat(imageUrl, ")") } },
        react_1.default.createElement("div", { className: "absolute inset-0 flex flex-col justify-between p-4 bg-white bg-opacity-40 w-full" },
            react_1.default.createElement("div", { className: "" },
                react_1.default.createElement("h3", { className: "text-2xl font-bold mb-2 ".concat(titleColor) }, title)),
            react_1.default.createElement("div", { className: "text-right" },
                react_1.default.createElement("p", { className: "text-lg ".concat(subtitleColor) }, subtitle)))));
};
exports.default = OverlayCard;
