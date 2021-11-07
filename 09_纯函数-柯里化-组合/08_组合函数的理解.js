/*
 * @Author: your name
 * @Date: 2021-11-05 14:28:19
 * @LastEditTime: 2021-11-07 12:36:43
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\09_纯函数-柯里化-组合\08_组合函数的理解.js
 */
function double(num) {
  return num * 2
}

function square(num) {
  return num ** 2
}

var count = 10
var result = square(double(count))
console.log(result)

// 实现最简单的组合函数
function composeFn(m, n) {
  return function (count) {
    return n(m(count))
  }
}

var newFn = composeFn(double, square)
console.log(newFn(10))

