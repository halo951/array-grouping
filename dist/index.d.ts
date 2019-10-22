/**
 * array grouy by.
 * @description 数组分组函数(根据指定条件分组)
 * @param array origin array
 * @param compute diff a and b ,return whether to be divided into a group
 * @param isSorted if origin array is sorted,then you can input isSorted is true. this speeds up grouping,but there are risks in this operation.
 *
 */
declare const GroupBy: <T>(
  array: T[],
  compute: (a: T, b: T) => boolean,
  isSorted?: boolean
) => T[][];
/**
 * array group to
 * @description 根据指定条件,将数组分解.
 * @param array origin array.
 * @param computeIndex compute target children index.
 */
declare const GroupTo: <T>(array: T[], computeIndex: (a: T) => number) => T[][];

export { GroupBy, GroupTo };
