/*
 * @Author: your name
 * @Date: 2021-11-20 00:39:44
 * @LastEditTime: 2021-11-20 13:34:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\13_JS原型链和继承\04_顶层原型来自哪里.js
 */
var obj1 = {}; // 创建了一个对象
// var obj2 = new Object() // 创建了一个对象

// function Person() {

// }

// var p = new Person()

var obj = {
  name: "why",
  age: 18,
};

var obj2 = {
  // address: "北京市"
};
obj.__proto__ = obj2;

// Object.prototype
// console.log(obj.__proto__)
// console.log(Object.prototype)
// console.log(obj.__proto__ === Object.prototype)

// console.log(Object.prototype);
// console.log(Object.prototype.constructor);
// console.log(Object.prototype.__proto__);

// console.log(Object.getOwnPropertyDescriptors(Object.prototype));

var person = {
  name: "hdf",
};
//person = new Object()
console.log(person);
console.log(person.__proto__); //顶层原型
console.log(person.__proto__ == Object.prototype); //true
console.log(person.__proto__.__proto__);

