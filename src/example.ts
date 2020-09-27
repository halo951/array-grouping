import { GroupBy } from 'index'

// example - 1 - grouping array

let arr1 = new Array<number>(20).fill(0).map((n) => Math.ceil(Math.random() * 100))
// exec
GroupBy(arr1, (a, b) => a == b)

// example - 2 - grouping array by object's property
let arr2 = [
    { code: 1, val: 1 },
    { code: 2, val: 2 },
    { code: 1, val: 3 },
    { code: 2, val: 4 }
]
// exec
GroupBy(arr2, (a, b) => a.code == b.code)

// example - 3 - grouping sorted array. Enable isSorted option acceleration.

let arr3 = new Array<number>(20)
    .fill(0)
    .map((n) => Math.ceil(Math.random() * 100))
    .sort((a, b) => a - b)

// exec
GroupBy(arr3, (a, b) => a == b, true)
