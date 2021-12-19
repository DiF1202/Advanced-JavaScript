/*
 * @Author: your name
 * @Date: 2021-11-26 01:08:47
 * @LastEditTime: 2021-11-26 18:58:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\25_Promise的使用\05_Promise的resolve参数.js
 */
/**
 * resolve(参数)
 *  1> 普通的值或者对象  pending -> fulfilled
 *  2> 传入一个Promise
 *    那么当前的Promise的状态会由传入的Promise来决定
 *    相当于状态进行了移交
 *  3> 传入一个对象, 并且这个对象有实现then方法(并且这个对象是实现了thenable接口)
 *    那么也会执行该then方法, 并且又该then方法决定后续状态
 */

const newPromise = new Promise((resolve, reject) => {
  reject("失败了！");
});
new Promise((resolve, reject) => {
  reject(newPromise);
}).then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
