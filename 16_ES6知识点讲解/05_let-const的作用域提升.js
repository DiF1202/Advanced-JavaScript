/*
 * @Author: your name
 * @Date: 2021-11-22 12:15:08
 * @LastEditTime: 2021-11-22 19:59:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\16_ES6知识点讲解\05_let-const的作用域提升.js
 */

// console.log(foo)
// var foo = "foo"

// Reference(引用)Error: Cannot access 'foo' before initialization(初始化)
// let/const他们是没有作用域提升
// foo被创建出来了, 但是不能被访问
// 作用域提升: 能提前被访问
// console.log(foo);
// let foo = "foo";

// var log = console.log;
// log(2 instanceof Number);
// var two = new Number(2);
// log(two instanceof Number);
// log(typeof two);


function foo() { }
var f1 = new foo()
console.log(f1.constrcutor);