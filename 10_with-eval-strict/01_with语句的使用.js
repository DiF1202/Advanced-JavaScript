/*
 * @Author: your name
 * @Date: 2021-11-07 17:52:30
 * @LastEditTime: 2021-11-07 19:43:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\10_with-eval-strict\01_with语句的使用.js
 */

"use strict"

//with语句:可以形成自己的作用域
var message = "hello world"
var obj = { name: 'why', age: 18, message: "obj message" }

function foo() {
  function bar() {
    with (obj) {
      console.log(message)
      console.log("----------")
    }
  }
  bar()
}

foo()

var info = { name: 'HDF' }
with (info) {
  console.log(name)
}