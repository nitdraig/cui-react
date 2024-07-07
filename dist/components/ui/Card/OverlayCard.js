import React from "react";
import { cva } from "class-variance-authority";
var cardStyles = cva("bg-transparent shadow-md lg:h-96 h-80 rounded-lg overflow-hidden relative bg-cover bg-no-repeat bg-center", {
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
var OverlayCard = function (_a) {
    var title = _a.title, _b = _a.titleColor, titleColor = _b === void 0 ? "text-black" : _b, subtitle = _a.subtitle, _c = _a.subtitleColor, subtitleColor = _c === void 0 ? "text-black" : _c, imageUrl = _a.imageUrl, size = _a.size, color = _a.color;
    return (React.createElement("div", { className: cardStyles({ size: size, color: color }), style: { backgroundImage: "url(".concat(imageUrl, ")") } },
        React.createElement("div", { className: "absolute  inset-0 flex flex-col justify-between p-4" },
            React.createElement("div", null,
                React.createElement("h3", { className: "text-lg font-semibold mb-2 ".concat(titleColor) }, title)),
            React.createElement("div", { className: "text-right" },
                React.createElement("p", { className: "text-md ".concat(subtitleColor) }, subtitle)))));
};
export default OverlayCard;
