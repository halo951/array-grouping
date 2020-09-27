## 数组分组函数(array groupBy)

### install

> 1. `yarn add array-group-by` or `npm install array-group-by --save`

### use

```
// import for commonJs
import { GroupBy, addToProperty } from "array-grouping";

// use
GroupBy([your array],(a:T,b:T):boolean => { return a == b; // diff func. })

// 挂载到原型链 - 使用方法参考 array.sort()

addToProperty() // 添加到原型

[].groupBy((a,b)=> {
  return a.id == b.id
})

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