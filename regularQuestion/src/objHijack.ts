// 数据劫持
objHiJack();
try {
  objHiJack_wrong();
} catch (error) {
  console.log("数据溢出");
}

function objHiJack_wrong() {
  var user = {
    name: "张三",
  };

  Object.defineProperty(user, "name", {
    get: function () {
      console.log("正在读取name属性");
      return user.name; // 在数据劫持时，不要再触发 get 属性了。
    },
  });

  console.log(user.name);
}

function objHiJack() {
  var user = {
    name: "张三",
  };

  var cache = user.name; // 在数据被劫持前先暂存
  Object.defineProperty(user, "name", {
    get: function () {
      console.log("正在读取name属性：");
      return cache; // 返回缓存
    },
  });

  console.log(user.name);
}
