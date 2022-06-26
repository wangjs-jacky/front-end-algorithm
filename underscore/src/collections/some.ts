// 太简单了
function some(collection: any, iteratee: Function) {
  let keys = !Array.isArray(collection) && Object.keys(collection);
  const length = (keys || collection).length;
  for (let i = 0; i < length; i++) {
    // 只要有1个满足，就返回 true
    let currentKey = keys ? keys[i] : i;
    if (iteratee(collection[currentKey])){
        return true;
    }
  }
  return false;
}

