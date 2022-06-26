import { invert } from "../object/invert";

// 转译 HTML 中的特殊字符
const escapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;",
};

function createEscaper(map: object) {
  // 用于传递给正则函数替换的 callback 函数
  const escaper = function (match) {
    return map[match];
  };
  // 生成正则语法：  (?:&|<|>|"|'|`)
  const source = "(?:" + Object.keys(map).join("|") + ")";
  var testRegexp = RegExp(source); // 用于判断是否存在
  var replaceRegexp = RegExp(source, "g"); // 用于替换
  return function (str: string) {
    str = str === null ? "" : "" + str;
    return testRegexp.test(str) ? str.replace(replaceRegexp, escaper) : str;
  };
}

const escape = createEscaper(escapeMap);
const unescape = createEscaper(invert(escapeMap));

export { escape, unescape };
