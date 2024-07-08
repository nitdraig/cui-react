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
var react_1 = __importStar(require("react"));
var Switch = function (_a) {
    var label = _a.label, _b = _a.initialChecked, initialChecked = _b === void 0 ? false : _b, onChange = _a.onChange, _c = _a.activeColor, activeColor = _c === void 0 ? "primary" : _c, _d = _a.inactiveColor, inactiveColor = _d === void 0 ? "secondary" : _d;
    var _e = (0, react_1.useState)(initialChecked), checked = _e[0], setChecked = _e[1];
    var handleChange = function () {
        var newChecked = !checked;
        setChecked(newChecked);
        onChange(newChecked);
    };
    var getColorClass = function (color) {
        switch (color) {
            case "white":
                return "bg-white border-2 border-gray-300";
            case "black":
                return "bg-black border-2 border-gray-300";
            case "primary":
                return "bg-blue-500  border-2 border-gray-300";
            case "secondary":
                return "bg-gray-600  border-2 border-gray-300";
            default:
                return "bg-blue-600  border-2 border-blue-300";
        }
    };
    return (react_1.default.createElement("div", { className: "flex items-center justify-between" },
        react_1.default.createElement("label", { className: "flex items-center cursor-pointer" },
            react_1.default.createElement("div", { className: "relative" },
                react_1.default.createElement("input", { type: "checkbox", className: "sr-only", checked: checked, onChange: handleChange }),
                react_1.default.createElement("div", { className: "block w-10 h-6 rounded-full ".concat(checked
                        ? getColorClass(activeColor)
                        : getColorClass(inactiveColor)) }),
                react_1.default.createElement("div", { className: "dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform ".concat(checked ? "translate-x-full " + getColorClass(activeColor) : "") })),
            react_1.default.createElement("div", { className: "ml-3 text-gray-700 font-medium" }, label))));
};
exports.default = Switch;
