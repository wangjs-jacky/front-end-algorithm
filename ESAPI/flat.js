const arr = [1, 2, 3, [4, [6, 7]]];

console.log(flat_v1(arr)); // reduce + 递归实现

// 支持 depth 深度
console.log(flat_v2(arr, 1));

// concat+三元运算符
console.log(flat_v3(arr, 0));

// 注： MDN 官网有其他的写法可以参考 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// 实际上本题考察基本点非常多，如 数组的判断等

function flat_v1(list) {
  return list.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return pre.concat(flat_v1(cur));
    } else {
      return pre.concat(cur);
    }
  }, []);
}

function flat_v2(list, depth = 1) {
  if (depth === 0) return list;
  return list.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return pre.concat(flat_v2(cur, depth - 1));
    } else {
      return pre.concat(cur);
    }
  }, []);
}

// 巧妙在 concat 中利用三元运算符实现
function flat_v3(list, depth = 1) {
  if (depth === 0) return list;
  return list.reduce(
    (res, cur) =>
      res.concat(Array.isArray(cur) ? flat_v3(cur, depth - 1) : cur),
    []
  );
}
