// 输入一个整数，如果能够被3整除，则输出 Fizz
// 如果能够被5整除，则输出 Buzz
// 如果既能被3整数，又能被5整除，则输出 FizzBuzz
// 如果都不满足，则返回输入

//=> 'fizz'
fizzBuzz(3);

//=> 'buzz'
fizzBuzz(5);

//=> 'fizzBuzz'
fizzBuzz(15);

//=> 7
fizzBuzz(7);

function fizzBuzz(n: number) {
  let str = "";
  if (n % 3 === 0) {
    str += "Fizz";
  }
  if (n % 5 === 0) {
    str += "Buzz";
  }
  console.log(str === "" ? n : str);
}
