/**
 * Array prototype 方法扩充
 */
declare global {
    interface Array<T> {
        groupBy(compute: (a: T, b: T) => boolean, isSorted?: boolean): Array<Array<T>>;
        groupTo(computeIndex: (a: T) => number): Array<Array<T>>;
    }
}
export {};
