/*
 * @Author: your name
 * @Date: 2021-11-08 01:05:40
 * @LastEditTime: 2021-11-19 01:11:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\11_JS面向对象一\04_数据属性描述符.js
 */
var obj = {
  name: "hdf",
  age: 18,
};

// //数据属性描述符
// Object.defineProperty(obj, "address", {
//   //很多配置
//   value: "福州市",
//   configurable: false, //设置为false后不可以（不会被delete）删除 也不可修改,configurable->设置为true
// });

// delete obj.address;
// console.log(obj.address);

Object.defineProperty(obj, "address", {
  //很多配置
  value: "闽侯",
  configurable: true, //设置为false后不可以删除 也不可修改
  enumerable: true, //设置这个属性 是否被可以枚举
  writable: true, //该特性是这个属性是否可以赋值
});

// Object.defineProperty(obj, "wdn", {

// });

// console.log(obj.address);

// for (var key in obj) {
//   console.log(key);
// }

// ///测试writeable
// obj.address = "上海";
// console.log(obj.address);
console.log(obj);
