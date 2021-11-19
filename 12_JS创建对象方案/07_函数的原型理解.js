/*
 * @Author: your name
 * @Date: 2021-11-19 11:16:36
 * @LastEditTime: 2021-11-19 23:03:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\12_JS创建对象方案\07_函数的原型理解.js
 */
function foo() {}

// 函数也是一个对象
// console.log(foo.__proto__) // 函数作为对象来说, 它也是有[[prototype]] 隐式原型

// 函数它因为是一个函数, 所以它还会多出来一个显示原型属性: prototype

console.log(foo.prototype==foo.__proto__);
console.log(typeof foo);
console.log(foo.prototype);
console.log(foo.__proto__);

var f1 = new foo();
var f2 = new foo();

//在new foo()的时候
// this.__proto__ == foo.prototype
console.log(f1.__proto__ === foo.prototype);
console.log(f2.__proto__ === foo.prototype);
