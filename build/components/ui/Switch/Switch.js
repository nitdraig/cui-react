import React, { useState } from "react";
var Switch = function (_a) {
    var label = _a.label, _b = _a.initialChecked, initialChecked = _b === void 0 ? false : _b, onChange = _a.onChange;
    var _c = useState(initialChecked), checked = _c[0], setChecked = _c[1];
    var handleChange = function () {
        var newChecked = !checked;
        setChecked(newChecked);
        onChange(newChecked);
    };
    return (React.createElement("div", { className: "flex items-center justify-between" },
        React.createElement("label", { className: "flex items-center cursor-pointer" },
            React.createElement("div", { className: "relative" },
                React.createElement("input", { type: "checkbox", className: "sr-only", checked: checked, onChange: handleChange }),
                React.createElement("div", { className: "block w-10 h-6 rounded-full ".concat(checked ? "bg-blue-500" : "bg-gray-600") }),
                React.createElement("div", { className: "dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform ".concat(checked ? "translate-x-full bg-blue-500" : "") })),
            React.createElement("div", { className: "ml-3 text-gray-700 font-medium" }, label))));
};
export default Switch;
