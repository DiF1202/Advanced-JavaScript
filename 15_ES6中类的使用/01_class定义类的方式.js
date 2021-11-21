/*
 * @Author: your name
 * @Date: 2021-11-21 20:24:51
 * @LastEditTime: 2021-11-21 21:23:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\15_ES6中类的使用\01_class定义类的方式.js
 */
// 类的声明
class Person {}

// babel

// 类的表达式
// var Animal = class {
// }

// 研究一下类的特性
// console.log(Person.prototype)
// console.log(Person.prototype.__proto__)
// console.log(Person.prototype.constructor)
// console.log(typeof Person) // function

var p = new Person();
// console.log(p.__proto__ === Person.prototype) // true

class Student {}

console.log(Student.prototype); //{}
console.log(Student.prototype.__proto__); //[Object: null prototype] {}
console.log(Student.prototype.constructor);//[class Student]
console.log(typeof Student);//function
