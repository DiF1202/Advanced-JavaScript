/*
 * @Author: your name
 * @Date: 2021-11-24 21:05:16
 * @LastEditTime: 2021-11-25 11:46:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\23_Proxy-Reflect\02_监听对象的操作方式二.js
 */
const obj = {
  name: "why",
  age: 30,
};

const obj_proxy = new Proxy(obj, {
  //获取值时的捕获器
  get: function (target, key) {
    console.log("get!!!!!!!!!!!!!!!!!!");
    return target[key];
  },
  set: function (target, key, newvalue) {
    console.log("set!!!!!!!!!!!!!!!!!!");
    return (target[key] = newvalue);
  },
});

console.log(obj_proxy.name);

obj_proxy.name = "hdf";

console.log(obj_proxy.name);
console.log(obj.name);
