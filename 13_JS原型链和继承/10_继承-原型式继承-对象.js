/*
 * @Author: your name
 * @Date: 2021-11-20 19:13:03
 * @LastEditTime: 2021-11-20 23:16:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\13_JS原型链和继承\10_继承-原型式继承-对象.js
 */
var obj = {
  name: "why",
  age: 18,
};

//原型式继承函数
//方法一 有一个api
function createObject(o) {
  var newObj = {};
  Object.setPrototypeOf(newObj, o);
  return newObj;
}

//方法二 纯原理
function createObject2(o) {
  //创建一个新对象
  function Fn() {}
  Fn.prototype = o;
  var newObj = new Fn();
  return newObj;
}

//方法三JS提供了api
var info = Object.create(obj);
console.log(info.name);

//原型式继承手写练习
var test = {
  name: "test",
  age: 109,
};

function createObject2(obj) {
  //定义空函数
  function fn() {}
  fn.prototype = obj;
  var newobj = new fn();
  return newobj;
}
var test2 = createObject2(test)

console.log(test2.__proto__)