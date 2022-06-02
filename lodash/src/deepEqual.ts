let x = {
  a: "123",
  b: "234",
};
let y = {
  a: "123",
  c: "224",
};

console.log((x as any) === (y as any)); // 这里 x as any 是为了通过ts校验
console.log(deepEqual(x, y));

function deepEqual(x, y) {
  if (x === y) {
    // 引用地址 或 简单数据类型相同
    return true;
  } else if (isObject(x) && isObject(y)) {
    // 数组 or Object
    const keysX = Object.keys(x);
    const keysY = Object.keys(y);
    if (keysX.length !== keysY.length) {
      return false;
    }
    for (let key of keysX) {
      // 递归遍历，只遍历 x 的 key ，因此 y[key] 有可能为 undefined 可处理可不处理
      if (!deepEqual(x[key], y[key])) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

// 判断是 object
function isObject(x) {
  return typeof x === "object" && x !== null;
}
