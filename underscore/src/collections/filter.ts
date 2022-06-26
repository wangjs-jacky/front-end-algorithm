import { each } from "./each";

function filter(collection: any, iteratee: Function) {
  let res = [];
  each(collection, function (value, index, list) {
    if (iteratee(value, index, list)) return res.push(value);
  });
  return res;
}

export { filter };
