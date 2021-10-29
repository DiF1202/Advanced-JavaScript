/*
 * @Author: your name
 * @Date: 2021-10-29 18:52:22
 * @LastEditTime: 2021-10-29 19:12:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\07_this其他补充\01_一些函数的this分析.js
 */
// 1.setTimeout
// function hySetTimeout(fn, duration) {
//   fn.call("abc")
// }

// hySetTimeout(function() {
//   console.log(this) // window
// }, 3000)

// setTimeout(function() {
//   console.log(this) // window
// }, 2000)

//2.监听点击
const boxDiv = document.querySelector('.box')
boxDiv.onclick = function () {
  console.log(this)
}
boxDiv.addEventListener('click', function () {
  console.log(this)
})
boxDiv.addEventListener('click', function () {
  console.log(this)
})
boxDiv.addEventListener('click', function () {
  console.log(this)
})

// 3.数组.forEach/map/filter/find
var names = ["abc", "cba", "nba"]
//可以给forEach进行一些修改
names.forEach(function (item) {
  console.log(item, this)
}, "abc")
names.map(function (item) {
  console.log(item, this)
}, "cba")
