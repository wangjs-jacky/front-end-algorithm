class EventHub {
    cache = {}
    // 由于是不耦合，中介只需要维护发布者和订阅者的共有的属性：eventName
    // {
    //     "楚天读书报": [fn1,fn2,fn3], // fn是每隔订阅者的动作
    //     "羊城晚报": [fn1,fn2,fn3],
    // }
    on(eventName, fn) {
        // 在on里头维护cache这个对象
        this.cache[eventName] = this.cache[eventName] || []
        this.cache[eventName].push(fn)
    }
    emit(eventName, data) {
        // 在emit中，就是取出对应的数组，for循环执行
        // 需要注意的是，emit还可以接受额外的数据参数
        (this.cache[eventName] || []).forEach(fn => fn(data))
    }
    off(eventName, fn) {
        let index = this.cache[eventName].indexOf(fn)
        if(index === -1) return // 如果没有索引，直接弹出
        this.cache[eventName].splice(index,1)
    }
}

export default EventHub
