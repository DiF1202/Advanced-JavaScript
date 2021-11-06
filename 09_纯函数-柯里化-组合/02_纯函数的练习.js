/*
 * @Author: your name
 * @Date: 2021-11-05 14:28:19
 * @LastEditTime: 2021-11-06 13:45:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\09_纯函数-柯里化-组合\02_纯函数的练习.js
 */

//1.foo是一个纯函数?
//1.相同的输入,一定会产生相同的输出
function foo(num1, num2) {
  return num1 * 2 + num2 * num2
}


//var name ="abc"
function bar() {
  console.log("bar其他的代码执行")
  name = "cba"
}

bar()

console.log(name)


