/*
 * @Author: your name
 * @Date: 2021-11-24 21:05:16
 * @LastEditTime: 2021-11-25 14:14:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\23_Proxy-Reflect\03_Proxy的其他捕获器.js
 */
const obj = {
  name: "why", // 数据属性描述符
  age: 18,
};

const obj_proxy = new Proxy(obj, {
  get: function (target, key) {
    console.log(`监听到对象的${key}属性被访问了`, target);
    return target[key];
  },
  set: function (target, key, newValue) {
    console.log(`监听到对象的${key}属性被设置值`, target);
    target[key] = newValue;
  },

  has: function (target, key) {
    console.log(`监听到对象的${key}属性in操作`, target);
    return key in target;
  },

  deleteProperty: function (target, key) {
    console.log(`监听到对象的${key}属性in操作`, target);
    delete target[key];
  },
});

console.log("name" in obj_proxy);
