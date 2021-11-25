/*
 * @Author: your name
 * @Date: 2021-11-24 21:05:16
 * @LastEditTime: 2021-11-25 15:42:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\23_Proxy-Reflect\04_Proxy对函数对象的监听.js
 */
function foo() {}

const foo_proxy = new Proxy(foo, {
  apply: function (target, thisArg, argArray) {
    console.log("foo被调用了");
    return target.apply(thisArg, argArray);
  },
  construct: function (target, argArray) {
    console.log("对foo函数进行了new调用");
    return new target(...argArray);
  },
});

new foo_proxy("asbhjd");
foo_proxy.apply({}, ["asd", "asbdkjn"]);
