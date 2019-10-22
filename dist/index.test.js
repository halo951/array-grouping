"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
// - test 1
test("test 1 - group arr1 by number", () => {
    // generate test data
    let arr1 = [1, 10, 8, 6, 2, 3, 3, 5];
    // exec
    let result1 = index_1.GroupBy(arr1, (a, b) => a == b);
    console.log(`test 1 - result \n`, JSON.stringify(result1, null, 4));
    expect(result1.length).toBe(result1.length);
});
// - test 2
test("test 2 - group type of any array by compute result.", () => {
    // generate test data
    let arr2 = [
        {
            code: 1,
            val: 1
        },
        {
            code: 2,
            val: 2
        },
        {
            code: 2,
            val: 3
        },
        {
            code: 1,
            val: 4
        }
    ];
    // exec
    let result2 = index_1.GroupBy(arr2, (a, b) => a.code == b.code, false);
    // print result
    console.log(`test 2 - result \n`, JSON.stringify(result2, null, 4));
    expect(result2.length).toBe(2);
});
// - test 3
test("test 3 - specify the group to be assigned", () => {
    // generate test data
    let arr3 = [1, 5, 15, 30, 50];
    // exec
    let result3 = index_1.GroupTo(arr3, (a) => {
        if (a < 10)
            return 0;
        else if (a >= 10 && a <= 50)
            return 1;
        else if (a > 50)
            return 2;
    });
    // print result
    console.log(`test 2 - result \n`, JSON.stringify(result3, null, 4));
    expect(result3.length).toBe(2);
});
// - test 4
test("test 4 - random array group by test (array is not ordered)", () => {
    // generate test data
    // sample: [0 ~ 100 之间]的 1千万长度数组
    let arr4 = new Array(20)
        .fill(0)
        .map(n => Math.ceil(Math.random() * 100));
    // exec
    let r = index_1.GroupBy(arr4, (a, b) => a == b);
    console.log(r);
    let convertedArrayCount = r.reduce((last, current) => {
        return last + current.length;
    }, 0);
    expect(arr4.length).toBe(convertedArrayCount);
});
// - test 5
test("test 5 - speed test (array is not ordered)", () => {
    // generate test data
    // sample: [0 ~ 100 之间]的 1百万长度数组
    let arr4 = new Array(1000000)
        .fill(0)
        .map(n => Math.ceil(Math.random() * 100));
    // log
    console.time("not ordered calc time");
    // exec
    let r = index_1.GroupBy(arr4, (a, b) => a == b);
    // print time log
    console.timeEnd("not ordered calc time");
    let convertedArrayCount = r.reduce((last, current) => {
        return last + current.length;
    }, 0);
    console.log(`result len:`, r.length);
    expect(arr4.length).toBe(convertedArrayCount);
});
// - test 6
test("test 6 - speed test (array is sorted)", () => {
    // generate test data
    // sample: [0 ~ 100 之间]的 1百万长度数组
    let arr4 = new Array(1000000)
        .fill(0)
        .map(n => Math.ceil(Math.random() * 100));
    // sorting
    console.time("sort time:");
    arr4 = arr4.sort((a, b) => a - b);
    console.timeEnd("sort time:");
    // log
    console.time("sorted calc time");
    // exec
    let r = index_1.GroupBy(arr4, (a, b) => a == b, true);
    // print time log
    console.timeEnd("sorted calc time");
    console.log(`result len:`, r.length);
    let convertedArrayCount = r.reduce((last, current) => {
        return last + current.length;
    }, 0);
    expect(arr4.length).toBe(convertedArrayCount);
});
//# sourceMappingURL=index.test.js.map