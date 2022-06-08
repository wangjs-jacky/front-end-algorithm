// trim
// 实现：'    hello   \t\n'.trim();
trim("    hello   \t\n");

// 正则方法
function trim(str) {
  let newStr = str.replace(/^\s+|\s+$/g, "");
  console.log("---" + newStr + "---");
}
