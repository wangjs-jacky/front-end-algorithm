// 在 underscore 中，使用 optimizeCb 函数统一修改函数的执行环境。
// 整个函数很简单，但是有几点可以学习：
// 1. 使用 void 0 代替 undefined
// 2. 本质：fn(...args) 改写为  
//         return function(...args){
//                 func.apply(context,args)
//         }


const optimizeCb = function (func, context, argCount) {
  if (context === void 0) return func;
  switch (argCount == null ? 3 : argCount) {
    case 1:
      return function (value) {
        return func.call(context, value);
      };
    case 2:
      return function (value, index) {
        return func.call(context, value, index);
      };
    case 3:
      return function (value, index, collection) {
        return func.call(context, value, index, collection);
      };
    case 4:
      return function (accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
  }
  return function () {
    return func.apply(context, arguments);
  };
};
