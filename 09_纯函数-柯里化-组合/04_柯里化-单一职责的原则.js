/*
 * @Author: your name
 * @Date: 2021-11-05 14:28:19
 * @LastEditTime: 2021-11-06 14:55:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\09_纯函数-柯里化-组合\04_柯里化-单一职责的原则.js
 */
function add(x, y, z) {
  x = x + 2
  y = y * 2
  z = z * z
  return x + y + z
}

console.log(add(10, 20, 30))


function sum(x) {
  x = x + 2
  return function (y) {
    y = y * 2
    return function (z) {
      z = z * z
      return x + y + z
    }
  }
}

console.log(sum(10)(20)(30))