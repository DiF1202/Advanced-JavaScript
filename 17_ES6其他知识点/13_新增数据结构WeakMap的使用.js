/*
 * @Author: your name
 * @Date: 2021-11-23 02:41:19
 * @LastEditTime: 2021-11-25 21:22:44
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\17_ES6其他知识点\13_新增数据结构WeakMap的使用.js
 */
const obj = { name: "obj1" };
// 1.WeakMap和Map的区别二:
const map = new Map();
map.set(obj, "aaa");

const weakMap = new WeakMap();
weakMap.set(obj, "aaa");

// 2.区别一: 不能使用基本数据类型
// weakMap.set(1, "ccc")

// 3.常见方法
// get方法
console.log(weakMap.get(obj));

// has方法
console.log(weakMap.has(obj));

// delete方法
console.log(weakMap.delete(obj));
// WeakMap { <items unknown> }
console.log(weakMap);
