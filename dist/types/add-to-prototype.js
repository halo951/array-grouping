"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const group_by_1 = require("../lib/group-by");
/**
 * @description 将 groupBy方法注入 Array 原型链
 *
 * @author Libin
 * @date 2020-09-27 16:44
 */
Array.prototype.groupBy = function (compute, isSorted) {
    return group_by_1.GroupBy(this, compute, isSorted);
};
//# sourceMappingURL=add-to-prototype.js.map