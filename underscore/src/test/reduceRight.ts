import { reduceRight } from "../collections/reduceRight";

const list = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const res = reduceRight(
  list,
  function (a, b) {
    return a.concat(b);
  },
  []
);

console.log("res", res);
