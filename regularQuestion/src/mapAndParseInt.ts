// 经典面试题：
var nums = ["1", "2", "3"];
var newNums = nums.map(parseInt);
console.log("newNums", newNums);

// 结果解释： [1,NAN,NAN]
// 1 - parseInt("1",0)  // 相当于没有进制转化
// NAN - parseInt("2",1)  // 不存在 1 进制
// NAN - parseInt("3",2)  // 2进制不存在 3
