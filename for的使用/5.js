// 如何拷贝一个函数
function func(a, b, c) {
    return a * b * c;
}
let closeFunc = new Function('return ' + func.toString())();
console.log(closeFunc(1,2,3));