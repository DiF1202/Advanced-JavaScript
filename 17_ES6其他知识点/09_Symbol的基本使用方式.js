/*
 * @Author: your name
 * @Date: 2021-11-23 02:41:19
 * @LastEditTime: 2021-11-23 22:21:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\17_ES6其他知识点\09_Symbol的基本使用方式.js
 */
const s1 = Symbol("id");
const s2 = Symbol("23");
const s3 = Symbol("asd");

const obj = {
  name: "anskjdn",
  age: 123,
  running() {
    console.log("爱跑步");
  },
};

Object.defineProperty(obj, s1, {
  value: "我是symbols1",
  enumerable: true,
  configurable: true,
  writable: true,
});
Object.defineProperty(obj, s2, {
  value: function () {
    console.log("s222");
  },
  enumerable: true,
  configurable: true,
  writable: true,
});

// console.log(obj);
// console.log(Object.keys(obj));
sKeys = Object.getOwnPropertySymbols(obj);
for (const sKey of sKeys) {
  console.log(obj[sKey]);
}
l;
// console.log(sa === sb);
// console.log(sa);
// console.log(sd);
// console.log(sd == se);

// const key = Symbol.keyFor(sa);
// console.log(key);
// const sc = Symbol.for(key);
// console.log(sa === sc);
