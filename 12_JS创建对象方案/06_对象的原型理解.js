/*
 * @Author: your name
 * @Date: 2021-11-19 11:16:36
 * @LastEditTime: 2021-11-19 12:29:24
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\12_JS创建对象方案\06_对象的原型理解.js
 */
// 我们每个对象中都有一个 [[prototype]], 这个属性可以称之为对象的原型(隐式原型)

var obj = { name: "why" }; // [[prototype]]
var info = {}; // [[prototype]]

// 1.解释原型的概念和看一下原型
// 早期的ECMA是没有规范如何去查看 [[prototype]]

// 给对象中提供了一个属性, 可以让我们查看一下这个原型对象(浏览器提供)
// __proto__
// console.log(obj.__proto__) // {}
// console.log(info.__proto__) // {}

// var obj = {name: "why", __proto__: g bvb{} }

// // ES5之后提供的Object.getPrototypeOf
// console.log(Object.getPrototypeOf(obj))

// 2.原型有什么用呢?
// 当我们从一个对象中获取某一个属性时, 它会触发 [[get]] 操作
// 1. 在当前对象中去查找对应的属性, 如果找到就直接使用
// 2. 如果没有找到, 那么会沿着它的原型去查找 [[prototype]]
// obj.age = 18
obj.__proto__.age = 18;

console.log(obj.age);
