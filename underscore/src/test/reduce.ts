import { reduce } from "../collections/reduce";

const _res = reduce(
  [1, 2, 3],
  function (memo, num) {
    return memo + num;
  },
  0
);
const _res2 = reduce(
  { one: 1, two: 2, three: 3 },
  function (memo, num) {
    return memo + num;
  },
  0
);

console.log("res", _res);
console.log("res2", _res2);
