import React from "react";
import { cva } from "class-variance-authority";
var cardStyles = cva("bg-white lg:h-96 h-80  shadow-md rounded-lg overflow-hidden", {
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
    return (React.createElement("div", { className: cardStyles({ size: size, color: color }) },
        React.createElement("img", { src: imageUrl, alt: title, className: "w-full h-52  object-cover" }),
        React.createElement("div", { className: "p-4" },
            React.createElement("h3", { className: "text-lg font-semibold mb-1" }, title),
            React.createElement("p", { className: "text-sm text-gray-600" }, description))));
};
export default Card;
