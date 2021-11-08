/*
 * @Author: your name
 * @Date: 2021-11-08 01:05:40
 * @LastEditTime: 2021-11-08 01:28:57
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\11_JS面向对象一\02_对对象属性的操作.js
 */
var obj = {
  name: "why",
  age: 18
}

// 获取属性
console.log(obj.name)

// 给属性赋值
obj.name = "kobe"
console.log(obj.name)

// 删除属性
// delete obj.name
// console.log(obj)

// 需求: 对属性进行操作时, 进行一些限制
// 限制: 不允许某一个属性被赋值/不允许某个属性被删除/不允许某些属性在遍历时被遍历出来

// 遍历属性
// for (var key in obj) {
//   console.log(key)
// }


for (var key in obj) {
  console.log(key)
  console.log(obj[key])
}