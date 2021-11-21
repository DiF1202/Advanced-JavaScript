/*
 * @Author: your name
 * @Date: 2021-11-21 13:15:29
 * @LastEditTime: 2021-11-21 19:40:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\14_JS原型内容补充\05_补充手写instanceof.js
 */

//instanceof
//其实就是pan'duan
//构造函数的prototype属性 是否出现在对象的原型链上
function myInstanceOf(obj, createfnc) {
  const proto = Object.getPrototypeOf(obj);
  const prototype = createfnc.prototype;

  while (true) {
    if (!proto) return false;
    if (proto == prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

let stu1 = {
  name: "xx",
  age: 20,
};

console.log(myInstanceOf(stu1, Object));

console.log(Function.prototype instanceof Object);
console.log(Function.prototype );
