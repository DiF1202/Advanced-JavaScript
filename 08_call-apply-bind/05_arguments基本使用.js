/*
 * @Author: your name
 * @Date: 2021-10-30 09:37:38
 * @LastEditTime: 2021-11-05 11:46:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\08_call-apply-bind\05_arguments基本使用.js
 */
function foo(num1, num2, num3) {
  // 类数组对象中(长的像是一个数组, 本质上是一个对象): arguments
  // console.log(arguments)

  // 常见的对arguments的操作是三个
  // 1.获取参数的长度
  console.log(arguments.length)

  // 2.根据索引值获取某一个参数
  console.log(arguments[2])
  console.log(arguments[3])
  console.log(arguments[4])

  // 3.callee获取当前arguments所在的函数
  console.log(arguments.callee)
  // arguments.callee()

}

foo(10, 20, 30, 40, 50)
