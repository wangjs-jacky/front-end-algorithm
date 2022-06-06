// 实现一个 sleep 函数
// 如：返回一个 <pending>promise，1s后变为 <resolved>promise

logDate();
sleep(1000).then(() => {
  console.log("1000ms后执行");
  logDate();
});

// 完整写法：
function sleep(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds);
  });
  // 可简写一行：return new Promise((resolve) => setTimeout(resolve, seconds));
}

function logDate() {
  let dateString = new Date().toString();
  let time = /[0-9]{2}:[0-9]{2}:[0-9]{2}/g.exec(dateString);
  console.log("时间:", time[0]);
}
