import { filter } from "../collections/filter";

const res = filter([1, 2, 3, 4, 5, 6], function (num) {
  return num % 2 == 0;
});
console.log(res);
