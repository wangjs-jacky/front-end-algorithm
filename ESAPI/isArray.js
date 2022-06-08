// Array.isArray

isArray([]);

// 类型检测总结：http://wjsheng_jacky.gitee.io/vblog/pages/d3bc5b/
// 网上判断方法很多，这边只推荐万金油写法，即 Object.prototype.toString.call()
function isArray(obj) {
  console.log(Object.prototype.toString.call(obj));
  return Object.prototype.toString.call(obj) === "[object Array]";
}
