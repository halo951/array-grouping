import { GroupBy, GroupTo } from "./index";
/**
 * Array prototype 方法扩充
 */
declare global {
  interface Array<T> {
    groupBy(compute: (a: T, b: T) => boolean, isSorted?: boolean): Array<Array<T>>;
    groupTo(computeIndex: (a: T) => number): Array<Array<T>>;
  }
}

Array.prototype.groupBy = function<T>(compute: (a: T, b: T) => boolean, isSorted?: boolean) {
  return GroupBy(this, compute, isSorted);
};
Array.prototype.groupTo = function<T>(computeIndex: (a: T) => number) {
  return GroupTo(this, computeIndex);
};
