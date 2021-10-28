/*
 * @Author: your name
 * @Date: 2021-10-28 13:38:05
 * @LastEditTime: 2021-10-28 14:50:24
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\04_js闭包的使用\07_函数的执行过程的内存.js
 */
function foo() {
  var name = "foo"
  var age = 18

  function bar() {
    console.log(name)
    console.log(age)
  }

  return bar
}
var fn = foo()
fn()

// fn()
// fn()
// fn()
// fn()
// fn()
