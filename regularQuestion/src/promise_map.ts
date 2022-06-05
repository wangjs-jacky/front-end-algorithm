// 如何实现 promise.map，限制 promise 并发数

pMap([1, 2, 3, 4, 5], (x) => Promise.resolve(x + 1)).then((res) => {
  console.log(res);
});

pMap([Promise.resolve(1), Promise.resolve(2)], (x) => x + 1).then((res) => {
  console.log(res);
});

pMap_v2([Promise.resolve(1), Promise.resolve(2)], (x) => x + 1, 2).then(
  (res) => {
    console.log(res);
  }
);

taskSerialDemo();

// 并行： for 循环。
// 串行：即前者执行结束后，再进行后续操作。 generator 的典型应用

function pMap(promiseTasks: any[], mapper: (x: any) => any) {
  let res = [];
  let l = 0;
  return new Promise((resolve, reject) => {
    promiseTasks.forEach((p, index) => {
      Promise.resolve(p)
        .then((x) => {
          return mapper(x);
        })
        .then((x) => {
          l++;
          res[index] = x;
          if (l === promiseTasks.length) {
            resolve(res);
          }
        });
    });
  });
}

// 控制并发, 构造一个递归执行结构，如：next = ()=>{ next()}
function pMap_v2(
  promiseTasks: any[],
  mapper: (x: any) => any,
  concurrency = Infinity
) {
  let result = [];
  let resolveCount = 0;
  let currentIndex = 0;
  return new Promise((resolve, reject) => {
    function next() {
      const index = currentIndex; // 缓存一个额外变量，同步变量
      currentIndex++;
      Promise.resolve(promiseTasks[index]) 
        .then((o) => mapper(o))
        .then((o) => {
          result[index] = o; // 结果可能出来慢一点，所以要缓存下指针。
          resolveCount++;
          if (resolveCount === promiseTasks.length) {
            resolve(result);
          }
          if (currentIndex < promiseTasks.length) {
            next();
          }
        });
    }
    for (let i = 0; i < concurrency && i < promiseTasks.length; i++) {
      next();
    }
  });
}

// 异步流程 串行执行
function taskSerialDemo() {
  //   举例：现具有如下三个结构的函数，希望串行执行
  //   let taskA = () => setTimeout(() => console.log("run task A"), 100);
  //   let taskB = () => setTimeout(() => console.log("run task B"), 50);
  //   let taskC = () => setTimeout(() => console.log("run task C"), 150);

  // 使用回调函数实现：
  setTimeout(() => {
    useCallBackFun();
  }, 0);

  // 对 task promisify 化实现
  setTimeout(() => {
    usePromise(); // 缺点：手动安排各promiseTask顺序
  }, 1000);

  setTimeout(() => {
    usePromise_v2(); // 对 promise 未知数量的遍历
  }, 2000); // 此 setTimeout 只是为了让结果区分。

  setTimeout(() => {
    notUsePromise();
  }, 3000); // 此 setTimeout 只是为了让结果区分。
}

function useCallBackFun() {
  console.log("\nuseCallBackFn:");
  // 让 task 耦合起来
  const taskC = () =>
    setTimeout(() => {
      console.log("run task C");
    }, 150);
  const taskB = () =>
    setTimeout(() => {
      console.log("run task B");
      taskC(); // B 结束后启动C
    }, 50);
  const taskA = () =>
    setTimeout(() => {
      console.log("run task A");
      taskB(); // A 结束后启动 B
    }, 100);
  taskA(); // 缺点： 耦合过重，且定义顺序与执行次序必须固定（箭头函数写法）
}

function usePromise() {
  console.log("\nusePromise:");

  // 快速生成 promiseTask
  const { promiseA, promiseB, promiseC } = generatePromiseTask();

  // 缺点：必须知道任务的数量
  promiseA()
    .then(() => promiseB())
    .then(() => promiseC());
}

function usePromise_v2() {
  console.log("\nusePromise_v2:");
  const { promiseA, promiseB, promiseC } = generatePromiseTask();
  // 缺点：必须知道任务的数量
  const promiseTask = [promiseA, promiseB, promiseC];
  // 切记不要这么写： const promiseTask = [promiseA(), promiseB(), promiseC()];
  // 此时意味着 仍是 并行执行。因为同时();
  let pro;
  for (let i = 0; i < promiseTask.length; i++) {
    if (i === 0) {
      pro = pro || promiseTask[0]();
    } else {
      // 注意：.then 可是同步代码哦！！！
      pro.then(() => promiseTask[i]());
    }
  }
}

// 不适用 Promise 函数，自己实现 callback 函数（而非传入 resolve()）
function notUsePromise() {
  console.log("\nnotUsePromise:");

  const taskList = generateNextTask();
  async(taskList);

  // 构造一个函数作用域，记录 index
  function async(tasks) {
    const count = tasks.length;
    let index = 0; // 内部作用域；

    // 自己实现一个 callback(),next相当于一个闭包，里面存储着不同状态的task
    const next = () => {
      if (index >= count) return;
      const task = tasks[index++];
      task(next); // 相当于执行
    };
    next(); // 从第一个 task 开始执行
  }
}

// promisify 化：可对具有以下fn结构的 promise 化，如`fn(arg1,arg2,(err,callback)=>{ callback(res) })`
function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      func.apply(this, args.concat(resolve));
    });
  };
}

function generatePromiseTask() {
  // 1. 将 task 改写为 callback 模式
  let taskA = (callback) =>
    setTimeout(() => {
      console.log("run task A");
      callback(); // 此处 promisify 是自己构造的，等价为 resolve(); 传统的 promisify 传入的 (err,callback)=>{}
    }, 150);
  let taskB = (callback) =>
    setTimeout(() => {
      console.log("run task B");
      callback();
    }, 50);
  let taskC = (callback) =>
    setTimeout(() => {
      console.log("run task C");
      callback();
    }, 100);

  // 2. 自己编写简易版 promisify 去快速生成结果被 promise 化的函数。
  let promiseA = promisify(taskA);
  let promiseB = promisify(taskB);
  let promiseC = promisify(taskC);
  return { promiseA, promiseB, promiseC };
}

function generateNextTask() {
  return [
    (next) =>
      setTimeout(() => {
        console.log("run task A");
        // 使用 next() 表示下一任务的开始，实际执行的是 task(next);
        next();
      }, 100),
    (next) =>
      setTimeout(() => {
        console.log("run task B");
        next();
      }, 50),
    (next) =>
      setTimeout(() => {
        console.log("run task C");
        next();
      }, 30),
  ];
}
