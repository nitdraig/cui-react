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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var GitHubStarsButton = function (_a) {
    var repoUrl = _a.repoUrl, _b = _a.buttonText, buttonText = _b === void 0 ? "Star" : _b, _c = _a.backgroundColor, backgroundColor = _c === void 0 ? "black" : _c, _d = _a.textColor, textColor = _d === void 0 ? "white" : _d, _e = _a.hoverBackgroundColor, hoverBackgroundColor = _e === void 0 ? "#374151" : _e, _f = _a.hoverTextColor, hoverTextColor = _f === void 0 ? "white" : _f, _g = _a.additionalClasses, additionalClasses = _g === void 0 ? "" : _g;
    var _h = (0, react_1.useState)(null), stars = _h[0], setStars = _h[1];
    var _j = (0, react_1.useState)(null), error = _j[0], setError = _j[1];
    var fetchStars = function () { return __awaiter(void 0, void 0, void 0, function () {
        var repoPath, response, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    repoPath = repoUrl.replace("https://github.com/", "");
                    return [4 /*yield*/, fetch("https://api.github.com/repos/".concat(repoPath))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to fetch stars");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    setStars(data.stargazers_count);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    setError("Failed to fetch stars");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        fetchStars();
    }, [repoUrl]);
    if (error) {
        return react_1.default.createElement("div", null, error);
    }
    return (react_1.default.createElement("a", { href: repoUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ".concat(additionalClasses), style: {
            backgroundColor: backgroundColor,
            color: textColor,
            transition: "background-color 0.2s, color 0.2s",
        }, onMouseEnter: function (e) {
            e.currentTarget.style.backgroundColor =
                hoverBackgroundColor;
            e.currentTarget.style.color = hoverTextColor;
        }, onMouseLeave: function (e) {
            e.currentTarget.style.backgroundColor =
                backgroundColor;
            e.currentTarget.style.color = textColor;
        } },
        react_1.default.createElement("svg", { style: { width: "1.25rem", height: "1.25rem", marginRight: "0.5rem" }, fill: "currentColor", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { fillRule: "evenodd", d: "M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.57c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.2 1.87.85 2.33.65.07-.52.28-.85.51-1.05-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.7 7.7 0 0 1 2-.27c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" })),
        react_1.default.createElement("span", null, buttonText),
        stars !== null && (react_1.default.createElement("span", { style: { marginLeft: "0.5rem" } },
            "\u2B50",
            stars))));
};
exports.default = GitHubStarsButton;
