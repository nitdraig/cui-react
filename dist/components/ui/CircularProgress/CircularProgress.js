"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CircularProgress = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 80 : _b, _c = _a.strokeWidth, strokeWidth = _c === void 0 ? 6 : _c, value = _a.value, _d = _a.color, color = _d === void 0 ? "text-blue-500 dark:text-blue-400" : _d, _e = _a.className, className = _e === void 0 ? "" : _e;
    var radius = (size - strokeWidth) / 2;
    var circumference = 2 * Math.PI * radius;
    var dashOffset = circumference * (1 - value / 100);
    return (react_1.default.createElement("svg", { className: "block ".concat(className), width: size, height: size, viewBox: "0 0 ".concat(size, " ").concat(size) },
        react_1.default.createElement("circle", { className: "stroke-current", stroke: "currentColor", strokeWidth: strokeWidth, fill: "none", strokeLinecap: "round", r: radius, cx: size / 2, cy: size / 2 }),
        react_1.default.createElement("circle", { className: "".concat(color), stroke: "currentColor", strokeWidth: strokeWidth, strokeDasharray: circumference, strokeDashoffset: dashOffset, fill: "none", strokeLinecap: "round", r: radius, cx: size / 2, cy: size / 2, transform: "rotate(-90 ".concat(size / 2, " ").concat(size / 2, ")") })));
};
exports.default = CircularProgress;
