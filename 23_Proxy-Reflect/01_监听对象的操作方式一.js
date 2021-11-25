/*
 * @Author: your name
 * @Date: 2021-11-24 21:05:16
 * @LastEditTime: 2021-11-25 11:13:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\23_Proxy-Reflect\01_监听对象的操作方式一.js
 */
const obj = {
  name: "why",
  age: 18,
};

for (let [key, value] of Object.entries(obj)) {
  Object.defineProperty(obj, key, {
    get: function () {
      console.log(`监听到obj对象的${key}属性被访问了`);
      return value;
    },
    set: function (newValue) {
      console.log(`监听到obj对象的${key}属性被设置值`);
      value = newValue;
    },
  });
}

const a = obj.name;

obj.age = 20;
