function createReduce(step: number) {
  let reducer = function (collection: any, iteratee: Function, memo?: any) {
    // 遍历方向 正向：i= 0 , 逆向: i = collection.length - 1;
    let i = step > 0 ? 0 : collection.length - 1;
    let hasMemo = memo ? true : false;

    // 为了支持： Array 以及 Object
    let keys = !Array.isArray(collection) && Object.keys(collection);
    const length = (keys || collection).length;

    // 如果存在第三个参数，则 i 指针前进一步。
    if (!hasMemo) {
      memo = collection[keys ? keys[i] : i]; // 兼容处理
      i += step;
    }
    // 注意这里的条件：i>=0 && i<collection.length（兼容正向和反向遍历）
    for (i; i >= 0 && i < length; i += step) {
      let currentKey = keys ? keys[i] : i;
      //  循环修改外部变量 memo
      //  取 value 时： collection[keys[i]] 对于 数组 collection[i]
      memo = iteratee(memo, collection[currentKey], currentKey, collection); // 可以用 optimizeCb 优化
    }
    return memo;
  };

  return reducer;
}

// 1: 正向遍历
// -1: 逆向遍历
const reduce = createReduce(1);

export { reduce, createReduce };
