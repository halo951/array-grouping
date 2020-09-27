import { GroupBy } from './index'
// - test 1 - 基础示例
test('test 1 - group arr1 by number', () => {
    // generate test data
    let arr1 = [1, 10, 8, 6, 2, 3, 3, 5]
    // exec
    let result1: Array<Array<number>> = GroupBy(arr1, (a, b) => a == b)
    console.log(`test 1 - result \n`, JSON.stringify(result1, null, 4))
    expect(result1.length).toBe(result1.length)
})

// - test 2 - 使用示例
test('test 2 - group type of any array by compute result.', () => {
    // generate test data
    let arr2: Array<{
        code: number
        val: number
    }> = [
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
    ]
    // exec
    let result2: Array<Array<{ code: number; val: number }>> = GroupBy(arr2, (a, b) => a.code == b.code, false)
    // print result
    console.log(`test 2 - result \n`, JSON.stringify(result2, null, 4))
    expect(result2.length).toBe(2)
})

// - test 3 - 执行效率测试
test('test 3 - random array group by test (array is not ordered)', () => {
    // generate test data
    // sample: [0 ~ 100 之间]的 1千万长度数组
    let arr4: Array<number> = new Array<number>(20).fill(0).map((n) => Math.ceil(Math.random() * 100))
    // exec
    let r = GroupBy(arr4, (a, b) => a == b)
    console.log(r)
    let convertedArrayCount = r.reduce((last, current: Array<number>) => {
        return last + current.length
    }, 0)
    expect(arr4.length).toBe(convertedArrayCount)
})
// - test 4 - 执行效率测试
test('test 4 - speed test (array is not ordered)', () => {
    // generate test data
    // sample: [0 ~ 100 之间]的 1百万长度数组
    let arr4: Array<number> = new Array<number>(1000000).fill(0).map((n) => Math.ceil(Math.random() * 100))
    // log
    console.time('not ordered calc time')
    // exec
    let r = GroupBy(arr4, (a, b) => a == b)
    // print time log
    console.timeEnd('not ordered calc time')
    let convertedArrayCount = r.reduce((last, current: Array<number>) => {
        return last + current.length
    }, 0)
    console.log(`result len:`, r.length)
    expect(arr4.length).toBe(convertedArrayCount)
})

// - test 5 - 执行效率测试
test('test 5 - speed test (array is sorted)', () => {
    // generate test data
    // sample: [0 ~ 100 之间]的 1百万长度数组
    let arr4: Array<number> = new Array<number>(1000000).fill(0).map((n) => Math.ceil(Math.random() * 100))
    // sorting
    console.time('sort time:')
    arr4 = arr4.sort((a, b) => a - b)
    console.timeEnd('sort time:')
    // log
    console.time('sorted calc time')
    // exec
    let r = GroupBy(arr4, (a, b) => a == b, true)
    // print time log
    console.timeEnd('sorted calc time')
    console.log(`result len:`, r.length)
    let convertedArrayCount = r.reduce((last, current: Array<number>) => {
        return last + current.length
    }, 0)
    expect(arr4.length).toBe(convertedArrayCount)
})
