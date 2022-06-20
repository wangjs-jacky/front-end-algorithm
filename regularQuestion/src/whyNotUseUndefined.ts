// let undefined;  // undefined 作为全局变量是只读的。

// undefined 可以被改写：
undefinedCanBeModified();

// 通过 void 产生 undefined
generateSafeUndefined();

function undefinedCanBeModified() {
  console.log("\nundefinedCanBeModified:");
  try {
    // undefined 作为块级作用域是可被视为变量的
    let undefined = 1;
    console.log("undefined:", undefined);
  } catch (error) {}
}

function generateSafeUndefined() {
  console.log("\ngenerateSafeUndefined:");
  console.log(void 0);
  return void 0; // void 1233 都可以
}
