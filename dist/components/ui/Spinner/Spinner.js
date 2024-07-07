import React from "react";
var Spinner = function () {
    return (React.createElement("div", { className: "flex justify-center items-center" },
        React.createElement("div", { className: "animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-blue-500" })));
};
export default Spinner;
