"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 数组分组函数(根据指定条件分组) array grouy by .
 * @description array extand function
 * @version 1.0.1 下个版本实现将方法写入Array.prototype,并直接在数组中使用.
 * @param array origin array
 * @param compute diff a and b ,return whether to be divided into a group
 * @param isSorted if origin array is sorted,then you can input isSorted is true. this speeds up grouping,but there are risks in this operation.
 *
 */
exports.GroupBy = (array, compute, isSorted) => {
    let r = new Array(0);
    let db = (r, n, compute, index = 0) => {
        if (r[index] && compute(n, r[index][0]))
            return index;
        else if (r.length > index)
            return db(r, n, compute, index + 1);
        else
            return -1;
    };
    // diff and merge to result
    for (let n = 0, lastIndex = 0, index = 0, a = null; n < array.length; n++) {
        a = array[n];
        if (r.length == 0) {
            r.push([a]);
        }
        else {
            // # 优化: if origin array is sorted,
            index = db(r, a, compute, isSorted ? lastIndex : 0);
            if (index === -1) {
                r.push([a]);
                lastIndex = 0;
            }
            else {
                r[index].push(a);
                lastIndex = index;
            }
        }
    }
    return r;
};
/**
 * 根据指定条件,将数组分解.
 * @param array origin array.
 * @param computeIndex compute target children index.
 * @version 1.0.1
 * @returns 整理过的数组
 */
exports.GroupTo = (array, computeIndex) => {
    let r = new Array(0);
    for (let n = 0, groupIndex = 0, a = null, m = 0; n < array.length; n++) {
        a = array[n];
        groupIndex = computeIndex(a);
        if (r[groupIndex]) {
            // add child
            r[groupIndex].push(a);
        }
        else {
            // polyfill result array children
            for (; m <= groupIndex; m++) {
                if (!r[m])
                    r[m] = [];
            }
            // add child
            r[groupIndex].push(a);
        }
    }
    return r;
};
//# sourceMappingURL=index.js.map