/*
 * @Author: your name
 * @Date: 2021-11-05 14:28:19
 * @LastEditTime: 2021-11-06 14:47:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\09_纯函数-柯里化-组合\03_柯里化的过程和结构.js
 */
function add(x, y, z) {
  return x + y + z
}

var result = add(10, 20, 30)
console.log(result)


function sum(x) {
  return function (y) {
    return function (z) {
      return x + y + z
    }
  }
}

var result = sum(10)(20)(30)
console.log(result)


let sum2 = x => y => z => x + y + z

var result = sum(10)(20)(30)
console.log(result)