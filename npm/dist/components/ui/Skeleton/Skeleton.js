"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Skeleton = function (_a) {
    var _b = _a.width, width = _b === void 0 ? "full" : _b, _c = _a.height, height = _c === void 0 ? "h-4" : _c, _d = _a.className, className = _d === void 0 ? "" : _d;
    return (react_1.default.createElement("div", { className: "bg-gray-200 dark:bg-gray-700 animate-pulse rounded ".concat(width, " ").concat(height, " ").concat(className) }));
};
exports.default = Skeleton;
