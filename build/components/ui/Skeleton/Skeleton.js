import React from "react";
var Skeleton = function (_a) {
    var _b = _a.width, width = _b === void 0 ? "full" : _b, _c = _a.height, height = _c === void 0 ? "h-4" : _c, _d = _a.className, className = _d === void 0 ? "" : _d;
    return (React.createElement("div", { className: "bg-gray-200 dark:bg-gray-700 animate-pulse rounded ".concat(width, " ").concat(height, " ").concat(className) }));
};
export default Skeleton;
