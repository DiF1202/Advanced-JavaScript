/*
 * @Author: your name
 * @Date: 2021-11-19 11:16:36
 * @LastEditTime: 2021-11-20 00:02:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\12_JS创建对象方案\09_函数原型上的属性.js
 */
function foo() {}

// 1.constructor属性
// foo.prototype这个对象中有一个constructor属性
// console.log(foo.prototype);
// console.log(Object.getOwnPropertyDescriptors(foo.prototype));

// console.log(typeof(foo.prototype))
// Object.defineProperty(foo.prototype, "constructor", {
//   enumerable: true,
//   configurable: true,
//   writable: true,
//   value: "哈哈哈哈"
// })

// console.log(foo.prototype)

// prototype.constructor = 构造函数本身
// console.log(foo.prototype.constructor) // [Function: foo]
// console.log(foo.prototype.constructor.name)

// console.log(foo.prototype.constructor.prototype.constructor.prototype.constructor)

// 2.我们也可以添加自己的属性
// foo.prototype.name = "why"
// foo.prototype.age = 18
// foo.prototype.height = 18
// foo.prototype.eating = function() {

// }

var f1 = new foo();
// console.log(f1.name, f1.age);

// 4.直接修改整个prototype对象
foo.prototype = {
  // constructor: foo,
  name: "why",
  age: 18,
  height: 1.88,
};

// var f1 = new foo();

// console.log(f1.name, f1.age, f1.height);

// 真实开发中我们可以通过Object.defineProperty方式添加constructor
// Object.defineProperty(foo.prototype, "constructor", {
//   enumerable: false,
//   configurable: true,
//   writable: true,
//   value: foo,
// });
