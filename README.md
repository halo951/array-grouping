## 数组分组函数(array groupBy)

### install

> 1. `yarn add array-group-by` or `npm install array-group-by --save`

### use

```
// import for commonJs
import { GroupBy } from "array-grouping";

// use
GroupBy([your array],(a:T,b:T):boolean => { return a == b; // diff func. })
GroupTo([your array],(a:T):boolean => { // check current item in result index. })

```

### use demo （详细使用例子参考 ）[link:https://github.com/a951055/array-grouping/blob/master/src/index.test.ts]

#### 1. use GroupBy demo.

```
 import { GroupBy } from "array-grouping";

// example - 1 - grouping array

let arr1 = new Array<number>(20).fill(0).map(n => Math.ceil(Math.random() * 100));
// exec
let result = GroupBy(arr1, (a, b) => a == b);
// print
console.log(result);

```

#### 2. use GroupTo demo.

```

import {  GroupTo } from "array-grouping";

// example - 4 - group the array to the specified location

let arr4 = new Array<number>(20).fill(0).map(n => Math.ceil(Math.random() * 100));
// exec
let result = GroupTo(arr4, a => {
  if (a % 10 == 0) return 0;
  else if (a % 5 == 0) return 1;
  else return 2;
});

// print
console.log(result);


```
