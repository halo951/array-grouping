"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("index");
// example - 1 - grouping array
let arr1 = new Array(20).fill(0).map(n => Math.ceil(Math.random() * 100));
// exec
index_1.GroupBy(arr1, (a, b) => a == b);
// example - 2 - grouping array by object's property
let arr2 = [{ code: 1, val: 1 }, { code: 2, val: 2 }, { code: 1, val: 3 }, { code: 2, val: 4 }];
// exec
index_1.GroupBy(arr2, (a, b) => a.code == b.code);
// example - 3 - grouping sorted array. Enable isSorted option acceleration.
let arr3 = new Array(20)
    .fill(0)
    .map(n => Math.ceil(Math.random() * 100))
    .sort((a, b) => a - b);
// exec
index_1.GroupBy(arr3, (a, b) => a == b, true);
// example - 4 - group the array to the specified location
let arr4 = new Array(20).fill(0).map(n => Math.ceil(Math.random() * 100));
// exec
index_1.GroupTo(arr4, a => {
    if (a % 10 == 0)
        return 0;
    else if (a % 5 == 0)
        return 1;
    else
        return 2;
});
// example - 5 - use polyfill import grouping function to Array.prototype
require("./polyfill");
// test arr
let arr5 = [1, 2, 3, 3, 5];
// exec
arr5.groupBy((a, b) => a == b);
arr5.groupTo(a => {
    if (a < 3)
        return 0;
    else
        return 1;
});
//# sourceMappingURL=example.js.map