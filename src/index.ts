/**
 * group array by
 * @cn 数组分组函数
 * @description array extand function
 * @version 1.0.1 下个版本实现将方法写入Array.prototype,并直接在数组中使用.
 * @param array origin array
 * @param compute diff a and b ,return whether to be divided into a group
 *
 */
export const GroupBy = <T>(
  array: Array<T>,
  compute: (a: T, b: T) => boolean
): Array<Array<T>> => {
  let r = new Array<Array<T>>(0);
  let db = (
    r: Array<Array<T>>,
    n: T,
    compute: (a: T, b: T) => boolean,
    index: number = 0
  ): number => {
    if (r[index] && compute(n, r[index][0])) return index;
    else if (r.length > index) return db(r, n, compute, index + 1);
    else return -1;
  };
  for (let n = 0, lastIndex = 0; n < array.length; n++) {
    let a = array[n];
    if (r.length == 0) {
      r.push([a]);
    } else {
      let index = db(r, a, compute, lastIndex);
      if (index === -1) {
        r.push([a]);
        lastIndex = 0;
      } else {
        r[index].push(a);
        lastIndex = index;
      }
    }
  }
  return r;
};
