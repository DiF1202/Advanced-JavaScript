/*
 * @Author: your name
 * @Date: 2021-10-28 13:38:05
 * @LastEditTime: 2021-10-28 13:38:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\04_js闭包的使用\05_闭包到底是什么.js
 */
function foo() {
  // AO: 销毁
  var name = "foo"
  function bar() {
    console.log("bar", name)
  }

  return bar
}

var fn = foo()
fn()

