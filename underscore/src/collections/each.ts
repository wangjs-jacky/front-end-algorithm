function each(collection: any, iteratee: Function) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      iteratee(collection[i], i, collection);
    }
  } else {
    let keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      iteratee(collection[keys[i]], keys[i], collection);
    }
  }
}

export { each };
