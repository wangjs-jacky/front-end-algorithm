// 返回第一个 index [只支持数组]
function createPredicateIndexFinder(step: number) {
  return function (array: Array<any>, iteratee: Function) {
    let i = step > 0 ? 0 : array.length - 1;
    for (i; i >= 0 && i < array.length; i += step) {
      if (iteratee(array[i])) return i;
    }
    return -1;
  };
}

const findIndex = createPredicateIndexFinder(1);
const findLastIndex = createPredicateIndexFinder(-1);

export { findIndex, findLastIndex };
