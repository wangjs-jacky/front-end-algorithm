// 快速对 key - value 对调

function invert(obj: object) {
  const res = {};
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    res[obj[key]] = key;
  }
  return res;
}

export { invert };
