/*
 * @Author: your name
 * @Date: 2021-11-20 00:39:44
 * @LastEditTime: 2021-11-20 13:47:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\13_JS原型链和继承\05_Person构造函数原型.js
 */
function Person() {}

// console.log(Person.prototype)
// console.log(Object.getOwnPropertyDescriptors(Person.prototype))

console.log(Person.prototype.__proto__); //{}
console.log(Person.prototype.__proto__.__proto__); //[Object: null prototype] {} 顶层原型

console.log(Object.__proto__ == Function.prototype) 