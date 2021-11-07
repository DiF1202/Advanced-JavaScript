/*
 * @Author: your name
 * @Date: 2021-11-05 14:28:19
 * @LastEditTime: 2021-11-07 09:54:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\09_纯函数-柯里化-组合\05_柯里化-逻辑的复用01.js
 */
// function sum(m, n) {
//   return m + n
// }

// // 假如在程序中,我们经常需要把5和另外一个数字进行相加
// console.log(sum(5, 10))
// console.log(sum(5, 14))
// console.log(sum(5, 1100))
// console.log(sum(5, 555))

function makerAdder(adder) {
  return function (item) {
    return adder + item
  }
}

var adder = makerAdder(5)

console.log(adder(5))
console.log(adder(6))
console.log(adder(7))
console.log(adder(8))