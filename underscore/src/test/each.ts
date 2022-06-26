import { each } from "../collections/each";

let obj = { one: 1, two: 2, three: 3 };
let arr = [1, 2, 3];

const iteratee = (value, index, array) => {
  console.log(value, index, array);
};

each(arr, iteratee);
each(obj, iteratee);