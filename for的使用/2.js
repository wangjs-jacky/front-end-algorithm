// for...of 的使用：
// 此遍历常用于可迭代对象：字符串,array,set | map | arguments,DOM collection | typedArray

// 1.1 正常遍历：string,array,set
normalIterator();

// 1.2 map 比较特殊，有两种写法（对出一种析构）
mapIterator();

// 1.3 实用但有时候想不到的类型：如 arguments | DOM Collection
argumentsIterator();
DOMCollectionIterator();

// 1.4 for...of 可遍历由 generator 创建出 的 iterator
generatorIterator();
generatorIterator2(); // 通过 break 可终端迭代

function normalIterator() {
  console.log("normalIterator:");
  let str = "abcdef";
  let arr = str.split("");
  let set = new Set([1, 1, 2, 3, 4]);
  for (let item of str) {
    console.log(item);
  }
  for (let item of set) {
    console.log(item);
  }
}

function mapIterator() {
  console.log("\nmapIterator:");
  let obj = new Map([
    ["key1", "a"],
    ["key2", "b"],
  ]);

  for (let entry of obj) {
    console.log(entry);
  }

  for (let [key, value] of obj) {
    console.log(key, value);
  }
}

function argumentsIterator() {
  console.log("\nargumentsIterator:");
  (function () {
    for (const argument of arguments) {
      console.log(argument);
    }
  })(1, 2, 3);
}

function DOMCollectionIterator() {
  console.log("\nDOMCollectionIterator:");
  try {
    const articleParagraphs = document.querySelectorAll("article > p");
    for (const paragraph of articleParagraphs) {
      paragraph.classList.add("read");
    }
  } catch (error) {
    console.log("DOMCollectionIterator 函数只有在浏览器环境才可运行");
  }
}

function generatorIterator() {
  console.log("generatorIterator:");
  const gen = (function* () {
    yield 1;
    yield 2;
    yield 3;
  })();
  for (const o of gen) {
    console.log(o);
  }
}

function generatorIterator2() {
  console.log("generatorIterator2:");
  const gen = (function* () {
    yield 1;
    yield 2;
    yield 3;
  })();
  for (const o of gen) {
    console.log(o);
    break;
  }
}

// 实用高阶函数实现装饰器
function logger(fn) {
  // 如何获取函数名称：http://www.frontendcodes.com/?p=67
  console.log(fn.name + ":");
  const result = fn.apply(this, arguments);
  console.log("\n");
  return result;
}
