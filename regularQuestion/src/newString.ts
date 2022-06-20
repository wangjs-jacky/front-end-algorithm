var str = "hello world!";

// 字符包装类：
// 1. 取字符：
console.log(str[0], new String(str)[0]);

// 2. 打印 length
console.log(str.length, new String(str).length);
