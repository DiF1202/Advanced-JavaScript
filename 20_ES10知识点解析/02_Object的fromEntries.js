/*
 * @Author: your name
 * @Date: 2021-11-24 18:15:53
 * @LastEditTime: 2021-11-24 18:59:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\20_ES10知识点解析\02_Object的fromEntries.js
 */
const obj = {
  name: "why",
  age: 18,
  height: 1.88,
};

const entries = Object.entries(obj);
console.log(entries);

// const newObj = {}
// for (const entry of entries) {
//   newObj[entry[0]] = entry[1]
// }

// 1.ES10中新增了Object.fromEntries方法
// const newObj = Object.fromEntries(entries)

// console.log(newObj)

// 2.Object.fromEntries的应用场景
// const queryString = "name=why&age=18&height=1.88";
// const queryParams = new URLSearchParams(queryString);
// for (const param of queryParams) {
//   console.log(param);
// }

// const paramObj = Object.fromEntries(queryParams);
// console.log(paramObj);

const queryString = "name=why&age=18&height=1.88";
const queryParams = new URLSearchParams(queryString);
console.log(Object.fromEntries(queryParams));
