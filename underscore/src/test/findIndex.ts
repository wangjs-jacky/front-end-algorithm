import { findIndex, findLastIndex } from "../array/findIndex";

const _res = findIndex([1, 2, 3, 4, 5, 6], function (num) {
  return num % 2 === 0;
});
const _res2 = findLastIndex([1, 2, 3, 4, 5, 6], function (num) {
  return num % 2 === 0;
});

console.log(_res);
console.log(_res2);
