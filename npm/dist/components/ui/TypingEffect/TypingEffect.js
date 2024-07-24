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
var TypingEffect = function (_a) {
    var text = _a.text, _b = _a.speed, speed = _b === void 0 ? 100 : _b, _c = _a.delay, delay = _c === void 0 ? 1000 : _c, _d = _a.loop, loop = _d === void 0 ? false : _d, _e = _a.cursorColor, cursorColor = _e === void 0 ? "black" : _e;
    var _f = (0, react_1.useState)(""), displayedText = _f[0], setDisplayedText = _f[1];
    var _g = (0, react_1.useState)(false), isDeleting = _g[0], setIsDeleting = _g[1];
    var _h = (0, react_1.useState)(0), index = _h[0], setIndex = _h[1];
    (0, react_1.useEffect)(function () {
        var typingInterval;
        if (!isDeleting) {
            typingInterval = setInterval(function () {
                setDisplayedText(function (prev) { return text.slice(0, prev.length + 1); });
                setIndex(function (prev) { return prev + 1; });
            }, speed);
        }
        else {
            typingInterval = setInterval(function () {
                setDisplayedText(function (prev) { return prev.slice(0, -1); });
                setIndex(function (prev) { return prev - 1; });
            }, speed);
        }
        if (!isDeleting && index === text.length) {
            clearInterval(typingInterval);
            if (loop) {
                setTimeout(function () { return setIsDeleting(true); }, delay);
            }
        }
        if (isDeleting && index === 0) {
            clearInterval(typingInterval);
            setIsDeleting(false);
            if (loop) {
                setTimeout(function () { return setIndex(0); }, delay);
            }
        }
        return function () { return clearInterval(typingInterval); };
    }, [text, speed, delay, loop, isDeleting, index]);
    return (react_1.default.createElement("span", { style: { display: "inline-block" } },
        displayedText,
        react_1.default.createElement("span", { style: {
                borderRight: "2px solid ".concat(cursorColor),
                animation: "blink-cursor 1s step-end infinite",
            } }),
        react_1.default.createElement("style", null, "\n        @keyframes blink-cursor {\n          from,\n          to {\n            border-color: transparent;\n          }\n          50% {\n            border-color: ".concat(cursorColor, ";\n          }\n        }\n      "))));
};
exports.default = TypingEffect;
