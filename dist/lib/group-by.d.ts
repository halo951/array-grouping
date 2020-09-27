/**
 * 数组分组函数(根据指定条件分组) array grouy by .
 * @description array extand function
 * @version 1.0.1 下个版本实现将方法写入Array.prototype,并直接在数组中使用.
 * @param array origin array
 * @param compute diff a and b ,return whether to be divided into a group
 * @param isSorted if origin array is sorted,then you can input isSorted is true. this speeds up grouping,but there are risks in this operation.
 *
 */
export declare const GroupBy: <T>(array: T[], compute: (a: T, b: T) => boolean, isSorted?: boolean) => T[][];
