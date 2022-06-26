// 在 underscore 中将 array 和 collection 合并为一个逻辑写。
// 其实区分开来看，逻辑更加清晰
function map(collection: any, iteratee: Function) {
  if (Array.isArray(collection)) {
    let res = Array(collection.length);
    for (let i = 0; i < collection.length; i++) {
      let currentKey = i;
      res[i] = iteratee(collection[currentKey], currentKey, collection);
    }
    return res;
  } else {
    let keys = Object.keys(collection);
    let res = [];
    for (let i = 0; i < keys.length; i++) {
      let currentKey = keys[i];
      res[i] = iteratee(collection[currentKey]);
    }
    return res;
  }
}

export { map };
