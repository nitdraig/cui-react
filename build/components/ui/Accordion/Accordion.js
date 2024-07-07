"use client";
import React, { useState } from "react";
import { cva } from "class-variance-authority";
var accordionStyles = cva("divide-y divide-gray-200", {
    variants: {
        size: {
            small: "w-64",
            medium: "w-80",
            large: "w-96",
        },
        color: {
            default: "bg-transparent",
            primary: "bg-black",
            secondary: "bg-gray-100",
            danger: "bg-red-100",
            white: "bg-white",
        },
        textColor: {
            default: "text-black",
            primary: "text-blue-500",
            secondary: "text-gray-500",
            danger: "text-red-500",
            white: "text-white",
        },
        defaultVariants: {
            size: "medium",
            color: "default",
            textColor: "default",
        },
    },
});
var Accordion = function (_a) {
    var items = _a.items, color = _a.color, textColor = _a.textColor;
    var _b = useState(null), activeIndex = _b[0], setActiveIndex = _b[1];
    var toggleAccordion = function (index) {
        setActiveIndex(function (prevIndex) { return (prevIndex === index ? null : index); });
    };
    return (React.createElement("div", { className: accordionStyles({ color: color, textColor: textColor }) }, items.map(function (item, index) { return (React.createElement("div", { key: index },
        React.createElement("div", { className: "flex justify-between items-center cursor-pointer p-4 ".concat(accordionStyles({
                textColor: textColor,
            })), onClick: function () { return toggleAccordion(index); } },
            React.createElement("h3", { className: "text-lg font-semibold" }, item.title),
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 no-underline transition-transform ".concat(activeIndex === index ? "transform rotate-180" : ""), viewBox: "0 0 20 20", fill: "currentColor" },
                React.createElement("path", { fillRule: "evenodd", d: "M10 12a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L10 10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-.707.293z", clipRule: "evenodd" }))),
        React.createElement("div", { className: "overflow-hidden transition-all ".concat(activeIndex === index ? "h-auto opacity-100" : "h-0 opacity-0") },
            React.createElement("div", { className: "p-4" },
                React.createElement("p", null, item.content))))); })));
};
export default Accordion;
