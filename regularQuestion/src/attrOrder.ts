// 属性顺序

var obj = {
  p2: "aaa",
  2: "aaa",
  1: "aaa",
  p1: "aaa",
};

for (var key in obj) {
  console.log(key);
}

// 打印顺序：数字正序排序，字母按照书写顺序
// 1  
// 2  
// p2 
// p1 
