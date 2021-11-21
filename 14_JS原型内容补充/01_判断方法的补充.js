/*
 * @Author: your name
 * @Date: 2021-11-21 01:43:30
 * @LastEditTime: 2021-11-21 11:29:56
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\14_JS原型内容补充\01_判断方法的补充.js
 */
var obj = {
  name: "why",
  age: 18,
};

var info = Object.create(obj, {
  address: {
    value: "北京市",
    enumerable: true,
  },
});

// hasOwnProperty方法判断
console.log(info.hasOwnProperty("address"));
console.log(info.hasOwnProperty("name"))

// in 操作符: 不管在当前对象还是原型中返回的都是true
console.log("address" in info)
console.log("name" in info)

// // for in
for (var key in info) {
  console.log(key)
}
