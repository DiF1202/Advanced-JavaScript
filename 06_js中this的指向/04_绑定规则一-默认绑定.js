/*
 * @Author: your name
 * @Date: 2021-10-29 00:25:11
 * @LastEditTime: 2021-12-03 01:11:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\06_js中this的指向\04_绑定规则一-默认绑定.js
 */
// 默认绑定: 独立函数调用
// 1.案例一:
// function foo() {
//   console.log(this)
// }

// foo()
console.log(this)

// 2.案例二: 三个全都是window
// function foo1() {
//   console.log(this)
// }

// function foo2() {
//   console.log(this)
//   foo1()
// }

// function foo3() {
//   console.log(this)
//   foo2()
// }

// foo3()

// 3.案例三:
// var obj = {
//   name: "why",
//   foo: function() {
//     console.log(this)
//   }
// }

// var bar = obj.foo
// bar() // window!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// 4.案例四:
// function foo() {
//   console.log(this)
// }
// var obj = {
//   name: "why",
//   foo: foo
// }

// var bar = obj.foo
// bar() // window!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// 5.案例五:
// function foo() {
//   function bar() {
//     console.log(this)
//   }
//   return bar
// }

// var fn = foo()
// fn() // window

// var obj = {
//   name: "why",
//   eating: fn
// }

// obj.eating() // 隐式绑定
