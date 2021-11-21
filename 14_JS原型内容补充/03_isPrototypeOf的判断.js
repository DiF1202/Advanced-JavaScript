/*
 * @Author: your name
 * @Date: 2021-11-21 01:43:30
 * @LastEditTime: 2021-11-21 13:37:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEj2
 * @FilePath: \邂逅js高级\14_JS原型内容补充\03_isPrototypeOf的判断.js
 */
function Person() {}

var p = new Person();

console.log(p instanceof Person);
console.log(Person.prototype.isPrototypeOf(p));

//
var obj = {
  name: "why",
  age: 18,
};

var info = Object.create(obj);

// console.log(info instanceof obj)
console.log(obj.isPrototypeOf(info));

var obj1 = {
  age: "18",
};

var obj2 = {};

obj2.__proto__ = obj1;

console.log(obj1.isPrototypeOf(obj2));
