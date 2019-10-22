## array group by function.

### install

> 1. add module `yarn add array-group-by` or `npm install array-group-by --save`

> 2. use `import { GroupBy } from "array-group-by";`

```
GroupBy([your array],(a:T,b:T):boolean => { return a == b; // diff func. })

GroupTo([your array],(a:T):boolean => { // check current item in result index. })

```

> 3. import to Array.phototype `import { polyfill } from "array-group-by"` and `polyfill(); // exec`

### use demo （详细使用例子参考 ）[link:./src/index.test.ts]

#### 1. use GroupBy function.

```
    // import func
    import { GroupBy } from "array-group-by";

    // use
    // query:  group arr by code.
    let arr: Array<{
    code: number;
    val: number;
    }> = [{ code: 1, val: 1 }, { code: 2, val: 2 }, { code: 1, val: 3 }];

    let result : Array<Array<{
        code:number;
        val:number;
    }>> = GroupBy(arr, (a,b) => {
        return a.code == b.code;
    });

    // print result

    console.log( `result:` , result );


```

#### 2. use GroupTo function.

```
    // import func
    import { GroupTo } from "array-group-by";

    // use
    // query:  group arr by code.
    let arr: Array<{
    code: number;
    val: number;
    }> = [{ code: 1, val: 1 }, { code: 2, val: 2 }, { code: 1, val: 3 }];

    let result : Array<Array<{
        code:number;
        val:number;
    }>> = GroupTo(arr, (a) => {
        if(a.code==1) return 0;
        else return 1;
    });

    // print result

    console.log( `result:` , result );


```

#### 3. use Array.phototype.groupBy (暂时未实现)[手动黑脸]

```
    // import polyfill to global entry function.
    import { polyfill } from "array-group-by";

    // * if naming conflicts, use import { polyfill as customPolyfill } from "array-group-by";

    // execut polyfill
    polyfill();

    // use
    // query:  group arr by code.
    let arr: any = [{ code: 1, val: 1 }, { code: 2, val: 2 }, { code: 1, val: 3 }];

    let result: Array<
    Array<{
        code: number;
        val: number;
    }>
    > = arr.groupBy((a, b) => {
    return a.code == b.code;
    });

    // print result
    console.log(`result:`, result);


```
