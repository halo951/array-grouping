import { GroupBy } from '../lib/group-by'

/**
 * @description 将 groupBy方法注入 Array 原型链
 *
 * @author Libin
 * @date 2020-09-27 16:44
 */
export const addToProperty = () => {
    Array.prototype.groupBy = function <T>(compute: (a: T, b: T) => boolean, isSorted?: boolean): Array<Array<T>> {
        return GroupBy(this, compute, isSorted)
    }
}
