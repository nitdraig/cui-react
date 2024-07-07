import React from "react";
import { cva } from "class-variance-authority";
var cardStyles = cva("bg-white shadow-md rounded-lg overflow-hidden", {
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
    return (React.createElement("div", { className: cardStyles({ size: size, color: color }) },
        React.createElement("div", { className: "flex flex-col justify-between p-4" },
            React.createElement("div", null,
                React.createElement("h3", { className: "text-lg font-semibold mb-1 ".concat(titleColor) }, title),
                React.createElement("div", { className: "text-center" },
                    React.createElement("p", { className: "text-md ".concat(subtitleColor) }, subtitle))))));
};
export default TextCard;
