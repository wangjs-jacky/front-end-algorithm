function every(collection: any, iteratee: Function) {
  let keys = !Array.isArray(collection) && Object.keys(collection);
  const length = (keys || collection).length;
  for (let i = 0; i < length; i++) {
    // 只要有一个不满足，就返回 false，否则就为 true
    let currentKey = keys ? keys[i] : i;
    if (!iteratee(collection[currentKey])) return false;
  }
  return true;
}

export { every };
