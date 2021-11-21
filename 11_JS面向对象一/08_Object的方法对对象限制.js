/*
 * @Author: your name
 * @Date: 2021-11-08 01:05:40
 * @LastEditTime: 2021-11-19 11:15:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\11_JS面向对象一\08_Object的方法对对象限制.js
 */
var obj = {
  name: "why",
  age: 18,
};

// 1.禁止对象继续添加新的属性
Object.preventExtensions(obj);

obj.height = 1.88;
obj.address = "广州市";

console.log(obj);

// 2.禁止对象配置/删除里面的属性
// for (var key in obj) {
//   Object.defineProperty(obj, key, {
//     configurable: false,
//     enumerable: true,
//     writable: true,
//     value: obj[key]
//   })
// }

Object.seal(obj);

delete obj.name;
console.log(obj.name);

// 3.让属性不可以修改(writable: false)
Object.freeze(obj);

obj.name = "kobe";
console.log(obj.name);

// 练习代码
var person = {
  name: "hdf",
  age: 1000,
};

Object.freeze(person);
person.name = "asndwnd";
console.log(person);
