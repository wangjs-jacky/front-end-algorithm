import EventHub from "../src/index.mjs"

const eventHub = new EventHub();

const test1 = (message) => {
    // eventHub是否是一个函数
    console.assert(eventHub instanceof Object === true, "eventHub是个对象")
    console.log(message);
}

const test2 = (message) => {
    let called = false; // 看回调是否执行
    // 监听 xxx 事件
    eventHub.on("xxx", data => {
        called = true
        // 验证：函数是否执行
        console.log("called:" + called);
        // 验证：是否能拿到数据
        console.assert(data === "stay hungry and stay foolish")
    })
    // 触发 xxx 事件，并传递 data(字符串)
    eventHub.emit("xxx", "stay hungry and stay foolish")
    console.log(message);
}

const test3 = (message) => {
    // 每次需要创建新的对象
    const eventHub = new EventHub()
    let called = false;
    const fn1 = ()=>{
        // 验证: fn1 没有被调用
        called = true;
    }
    // 监听 yyy 事件
    eventHub.on("yyy",fn1)
    // 取消 监听 yyy 事件
    eventHub.off("yyy",fn1)
    // 验证：如果取消监听后，应该不会再触发 fn1 函数
    eventHub.emit("yyy")
    console.assert(called === false)
    console.log(message);
}

test1("EventHub可以创建对象");
test2("验证 .on 是否.emit 是否会触发(就看fn的called是否改变) .on中的函数");
test3("验证 .off 有效");
