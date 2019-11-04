"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
Array.prototype.groupBy = function (compute, isSorted) {
    return index_1.GroupBy(this, compute, isSorted);
};
Array.prototype.groupTo = function (computeIndex) {
    return index_1.GroupTo(this, computeIndex);
};
//# sourceMappingURL=polyfill.js.map