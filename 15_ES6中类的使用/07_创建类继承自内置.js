/*
 * @Author: your name
 * @Date: 2021-11-21 20:24:51
 * @LastEditTime: 2021-11-22 10:16:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\15_ES6中类的使用\07_创建类继承自内置.js
 */
// class Person {

// }

// class Student extends Person {

// }

class HYArray extends Array {
  firstItem() {
    return this[0];
  }

  lastItem() {
    return this[this.length - 1];
  }
}
var log = console.log

let arr = new HYArray(1, 2, 3);
console.log(arr);

log(arr.firstItem());
log(arr.lastItem());
