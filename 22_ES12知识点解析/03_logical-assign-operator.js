/*
 * @Author: your name
 * @Date: 2021-11-24 19:53:55
 * @LastEditTime: 2021-11-24 21:01:48
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\22_ES12知识点解析\03_logical-assign-operator.js
 */
// 1.||= 逻辑或赋值运算
// let message = "hello world"
// message = message || "default value"
// message ||= "default value"
// console.log(message)

// 2.&&= 逻辑与赋值运算
// &&
// const obj = {
//   name: "why",
//   foo: function() {
//     console.log("foo函数被调用")

//   }
// }

// obj.foo && obj.foo()

// &&=
// let info = {
//   name: "why"
// }

// // 1.判断info
// // 2.有值的情况下, 取出info.name
// // info = info && info.name
// info &&= info.name
// console.log(info)

// 3.??= 逻辑空赋值运算
let message = 0;
message ??= "default value";
console.log(message);

const a = a || "default value";
const b = b || "default value";
const c = c ?? "default value"