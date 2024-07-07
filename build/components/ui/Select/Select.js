import React from "react";
var Select = function (_a) {
    var options = _a.options, className = _a.className;
    return (React.createElement("div", { className: "relative ".concat(className) },
        React.createElement("select", { className: "block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline" },
            React.createElement("option", { value: "" }, "Select an option"),
            options.map(function (option) { return (React.createElement("option", { key: option.value, value: option.value }, option.label)); })),
        React.createElement("div", { className: "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none" },
            React.createElement("svg", { className: "w-4 h-4 text-gray-400", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" },
                React.createElement("path", { fillRule: "evenodd", d: "M10 12a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L10 10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-.707.293z" })))));
};
export default Select;
