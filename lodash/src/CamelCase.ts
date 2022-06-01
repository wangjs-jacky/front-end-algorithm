// 使用 “-” 分割，以及使用`toUpperCase` 和 `toLowerCase`对字母进行转换。
toCamelCase("get-element-by-id");
// 使用正则: 将 A 转化为 - a
toKebabCase("GetElementById");
// str.replace 函数的使用说明：
strReplace("GetElementById");

function toCamelCase(s: string) {
  console.log("\ntoCamelCase:");
  let arr = s.split("-");
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      res = arr[0];
      continue;
    }
    res += arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  console.log(res);
}

function toKebabCase(str: string) {
  console.log("\ntoKebabCase:");
  let res = str.replace(/([A-Z])/g, (i) => {
    return "-" + i.toLowerCase();
  });

  // 将第一个匹配给修正下：
  if (res[0] === "-") {
    console.log(res.slice(1));
    return res.slice(1);
  } else {
    console.log(res);
    return res;
  }
}

function strReplace(str: string) {
  console.log("\nstrReplace:");
  let newStr = str.replace(/([A-Z])([a-z]+)/g, (...arg) => {
    console.log(arg);
    // arg说明： 匹配所有字符
    // arg[0]: 所有匹配
    // arg[1]: group1
    // arg[2]: group2
    // arg[3]: 索引
    // arg[4]: 完整的字符
    return arg[0];
  });
  console.log(newStr);
}
