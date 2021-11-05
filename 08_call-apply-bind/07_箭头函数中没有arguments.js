/*
 * @Author: your name
 * @Date: 2021-10-30 09:37:38
 * @LastEditTime: 2021-11-05 12:45:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\08_call-apply-bind\07_箭头函数中没有arguments.js
 */
// 1.案例一:
// var foo = () => {
//   console.log(arguments)
// }

// foo()

// 2.案例二:
// function foo() {
//   var bar = () => {
//     console.log(arguments)
//   }
//   return bar
// }

// var fn = foo(123)
// fn()

// 3.案例三:
var foo = (num1, num2, ...args) => {
  console.log(args)
}

foo(10, 20, 30, 40, 50)



let myfn = (a, b, c, ...args) => {
  console.log(args)
}

myfn(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 234, 34, 3)
