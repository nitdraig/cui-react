"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CircularProgress = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 80 : _b, _c = _a.strokeWidth, strokeWidth = _c === void 0 ? 6 : _c, value = _a.value, _d = _a.textColor, textColor = _d === void 0 ? "dark:text-black text-white" : _d, _e = _a.progressColor, progressColor = _e === void 0 ? "dark:text-blue-500 text-blue-400" : _e, _f = _a.trackColor, trackColor = _f === void 0 ? "dark:text-gray-300 text-gray-700" : _f, _g = _a.className, className = _g === void 0 ? "" : _g;
    var radius = (size - strokeWidth) / 2;
    var circumference = 2 * Math.PI * radius;
    var currentValue = Math.min(Math.max(value, 0), 100);
    var dashOffset = circumference * (1 - currentValue / 100);
    return (react_1.default.createElement("div", { className: "relative flex justify-center items-center ".concat(className), style: { width: size, height: size } },
        react_1.default.createElement("svg", { className: "absolute", width: size, height: size, viewBox: "0 0 ".concat(size, " ").concat(size) },
            react_1.default.createElement("circle", { className: "stroke-current ".concat(trackColor), stroke: "currentColor", strokeWidth: strokeWidth, fill: "none", strokeLinecap: "round", r: radius, cx: size / 2, cy: size / 2 }),
            react_1.default.createElement("circle", { className: "stroke-current ".concat(progressColor), stroke: "currentColor", strokeWidth: strokeWidth, strokeDasharray: circumference, strokeDashoffset: dashOffset, fill: "none", strokeLinecap: "round", r: radius, cx: size / 2, cy: size / 2, transform: "rotate(-90 ".concat(size / 2, " ").concat(size / 2, ")") })),
        react_1.default.createElement("span", { className: "absolute ".concat(textColor, " text-center") },
            currentValue,
            "%")));
};
exports.default = CircularProgress;
