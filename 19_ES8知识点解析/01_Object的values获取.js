/*
 * @Author: your name
 * @Date: 2021-11-24 15:59:44
 * @LastEditTime: 2021-11-24 16:11:23
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\19_ES8知识点解析\01_Object的values获取.js
 */
const obj = {
  name: "why",
  age: 18,
};

console.log(Object.keys(obj));
console.log(Object.values(obj));

// 用的非常少
console.log(Object.values(["abc", "cba", "nba"]));
console.log(Object.values("abc"));

console.log(Object.values(obj));
