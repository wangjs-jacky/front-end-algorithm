// 无线累加的 sum 函数
sum(1, 2, 3).valueOf(); //6
sum(2, 3)(2).valueOf(); //7
sum(1)(2)(3)(4).valueOf(); //10
sum(2)(4, 1)(2).valueOf(); //9
sum(1)(2)(3)(4)(5)(6).valueOf(); // 21

function sum(...args: number[]) {
  // allArgs 收集所有的 args
  let allArgs = args;

  // 返回一个 function 可以接受参数
  function fn(...args2) {
    allArgs = allArgs.concat(args2);
    return fn;
  }

  // function 上有一个属性叫 valueOf
  fn.valueOf = function () {
    // valueOf 触发时才开始累加
    let res = allArgs.reduce((res, cur) => (res += cur));
    console.log(allArgs, res);
    return res;
  };
  return fn;
}
