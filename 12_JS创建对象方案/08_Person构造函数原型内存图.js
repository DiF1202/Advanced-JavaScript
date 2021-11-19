/*
 * @Author: your name
 * @Date: 2021-11-19 11:16:36
 * @LastEditTime: 2021-11-19 23:29:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\12_JS创建对象方案\08_Person构造函数原型内存图.js
 */
function Person() {}

var p1 = new Person();
var p2 = new Person();

// 都是为true
// console.log(p1.__proto__ === Person.prototype)
// console.log(p2.__proto__ === Person.prototype)

//
// p1.name = "why"
p1.__proto__.name = "kobe";
p2.__proto__.name = "hdf";
// Person.prototype.name = "james"
// p2.__proto__.name = "curry";

console.log(p1.name);
console.log(p2.name);
console.log(p1.__proto__ == p2.__proto__);
console.log(Object.getPrototypeOf(p1) == p1.__proto__) //true