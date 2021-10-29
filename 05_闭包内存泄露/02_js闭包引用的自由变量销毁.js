/*
 * @Author: your name
 * @Date: 2021-10-28 17:13:05
 * @LastEditTime: 2021-10-28 23:22:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\05_闭包内存泄露\02_js闭包引用的自由变量销毁.js
 */
function foo() {
  var name = "hdf"
  var age = 18

  function bar() {
    debugger
    console.log(name)
    // console.log(age)
  }

  return bar
}

var fn = foo()
fn()

