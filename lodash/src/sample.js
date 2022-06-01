// 随机选择1个数
// 等价于 从 0~arr.length 随机选择1个整数
// Math.random 从0~1 随机生成1个数
// 核心： Math.floor(Math.random() * arr.length)

// 测试函数版本：
testFunction();

// 原型版本：
testPrototype();

function testFunction() {
  console.log("\ntest function:");
  sample([1, 2, 3, 4, 5, 6]);
  sample([1, 2, 3, 4, 5, 6]);
  sample([1, 2, 3, 4, 5, 6]);
  sample([1, 2, 3, 4, 5, 6]);

  function sample(arr) {
    let index = Math.floor(Math.random() * arr.length);
    console.log(arr[index]);
  }
}

function testPrototype() {
  console.log("\ntest prototype:");
  Array.prototype.sample = function () {
    if (!Array.isArray(this)) {
      throw new Error("请输入数组");
    }
    let arr = this;
    let index = Math.floor(Math.random() * arr.length);
    console.log(arr[index]);
    // return arr[index]

    // 也可以直接用 this 替换掉 arr
    // return this[ Math.floor(Math.random() * this.length)]
  };

  // 测试原型版本：
  [1, 2, 3, 4, 5, 6].sample();
  [1, 2, 3, 4, 5, 6].sample();
  [1, 2, 3, 4, 5, 6].sample();
  [1, 2, 3, 4, 5, 6].sample();
}
