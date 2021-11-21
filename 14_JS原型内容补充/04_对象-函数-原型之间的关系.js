/*
 * @Author: your name
 * @Date: 2021-11-21 01:43:30
 * @LastEditTime: 2021-11-21 19:12:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\14_JS原型内容补充\04_对象-函数-原型之间的关系.js
 */
var obj = {
  name: "why",
};

console.log(obj.__proto__);

// 对象里面是有一个__proto__对象: 隐式原型对象

// Foo是一个函数, 那么它会有一个显示原型对象: Foo.prototype
// Foo.prototype来自哪里?
// 答案: 创建了一个函数, Foo.prototype = { constructor: Foo }

// Foo是一个对象, 那么它会有一个隐式原型对象: Foo.__proto__
// Foo.__proto__来自哪里?
// 答案: new Function()  Foo.__proto__ = Function.prototype
// Function.prototype = { constructor: Function }

// var Foo = new Function()
function Foo() {}

console.log(Foo.prototype === Foo.__proto__); //falese
console.log(Foo.prototype.constructor); //[Function: Foo]
console.log(Foo.__proto__.constructor); //[Function: Function]

var foo1 = new Foo();
var obj1 = new Object();

console.log(Object.getOwnPropertyDescriptors(Function.__proto__));

console.log("________________________");
console.log(typeof Function.prototype);
