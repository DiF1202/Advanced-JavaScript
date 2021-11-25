/*
 * @Author: your name
 * @Date: 2021-11-24 21:05:16
 * @LastEditTime: 2021-11-25 18:30:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\23_Proxy-Reflect\06_receiver参数的作用.js
 */
// const obj = {
//   _name: "why",
//   get name() {
//     return this._name
//   },
//   set name(newValue) {
//     this._name = newValue
//   }
// }

// const objProxy = new Proxy(obj, {
//   get: function(target, key, receiver) {
//     // receiver是创建出来的代理对象
//     console.log("get方法被访问--------", key, receiver)
//     console.log(receiver === objProxy)
//     return Reflect.get(target, key, receiver)
//   },
//   set: function(target, key, newValue, receiver) {
//     console.log("set方法被访问--------", key)
//     Reflect.set(target, key, newValue, receiver)
//   }
// })

// // console.log(objProxy.name)
// objProxy.name = "kobe"

const obj = {
  _name: "why",
  get name() {
    return this._name;
  },
  set name(newValue) {
    this._name = newValue;
  },
};
const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    console.log("get方法被访问---------", key, receiver);
    // console.log(receiver == objProxy);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    console.log("set方法被访问------", key);
    Reflect.set(target, key, newValue, receiver);
  },
});

const a = objProxy.name;
objProxy.name = "asjdb";

console.log(obj.name);
