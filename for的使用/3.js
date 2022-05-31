//  for...of 和 for..in 的区别

// 一般情况下，使用 of 和 in 基本没区别。
arrIterator();

// 区别：
// for...in 会遍历到原型链上的属性或方法。
for_in_iterator();

// for...of 不会遍历原型链
for_of_iterator();

// 改进：通过 xx.hasOwnProperty 或 Object.keys() 可以过滤原形链，而无法过滤属性
for_in_iterator_v1();
for_in_iterator_v2();

// 总结：不推荐使用 for...in 去遍历可迭代对象，即使使用 hasOwnProperty 或 Object.keys() 也无法过滤干净。

function arrIterator() {
  console.log("arrIterator：");
  let arr = ["1", "2", "3"]; // 以 arr 举例
  for (let item of arr) {
    console.log(item);
  }
  for (let index in arr) {
    console.log(arr[index]);
  }
}

function for_in_iterator() {
  console.log("\nfor_in_iterator:");
  let arr = ["1", "2", "3"]; // 以 arr 举例
  Object.prototype.objCustom = () => {};
  Array.prototype.arrCustom = () => {};
  arr.foo = "foo";
  for (let index in arr) {
    console.log("index:", index, "value", arr[index]);
  }
}

function for_of_iterator() {
  console.log("\nfor_of_iterator:");
  let arr = ["1", "2", "3"]; // 以 arr 举例
  Object.prototype.objCustom = () => {};
  Array.prototype.arrCustom = () => {};
  arr.foo = "foo";
  for (let index of arr) {
    console.log("value", index);
  }
}

function for_in_iterator_v1() {
  console.log("\nfor_in_iterator_v1:");
  let arr = ["1", "2", "3"]; // 以 arr 举例
  Object.prototype.objCustom = () => {};
  Array.prototype.arrCustom = () => {};
  arr.foo = "foo";
  for (let key in arr) {
    if (arr.hasOwnProperty(key)) {
      console.log("value", key);
    }
  }
}

function for_in_iterator_v2() {
  console.log("\nfor_in_iterator_v2:");
  let arr = ["1", "2", "3"]; // 以 arr 举例
  Object.prototype.objCustom = () => {};
  Array.prototype.arrCustom = () => {};
  arr.foo = "foo";
  Object.keys(arr).forEach((item) => {
    console.log("value", item);
  });
}
