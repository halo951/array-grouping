## array group by function.

### install

> 1. add module `yarn add array-group-by` or `npm install array-group-by --save`

> 2. use `import { GroupBy } from "array-group-by";`

```
GroupBy([your array],(a:T,b:T):boolean => { return a == b; // diff func. })

GroupTo([your array],(a:T):boolean => { // check current item in result index. })

```

> 3. import to Array.phototype `import { polyfill } from "array-group-by"` and `polyfill(); // exec`

### use demo （详细使用例子参考 ）[link:https://github.com/a951055/array-grouping/blob/master/src/index.test.ts]

#### 1. use GroupBy function.

```
 import { GroupBy, GroupTo } from "array-grouping";

// example - 1 - grouping array

let arr1 = new Array<number>(20).fill(0).map(n => Math.ceil(Math.random() * 100));
// exec
let result = GroupBy(arr1, (a, b) => a == b);
// print
console.log(result);

```

#### 2. use GroupTo function.

```

import { GroupBy, GroupTo } from "array-grouping";

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

#### 3. use Array.phototype.groupBy or use Array.phototype.groupTo - need to introduce polyfill

```

// example - 5 - use polyfill import grouping function to Array.prototype
import "array-grouping/src/polyfill"; // useing in ts
import "array-grouping/dist/polyfill"; // useing in js
// test arr
let arr5 = [1, 2, 3, 3, 5];
// exec
arr5.groupBy((a, b) => a == b);
arr5.groupTo(a => {
  if (a < 3) return 0;
  else return 1;
});


```
