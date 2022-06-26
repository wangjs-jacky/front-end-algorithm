import { map } from "../collections/map";

let _res1 = map([1, 2, 3], function (num) {
  return num * 3;
});

let _res2 = map({ one: 1, two: 2, three: 3 }, function (value, key) {
  return value * 3;
});

console.log(_res1);
console.log(_res2);
