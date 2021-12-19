/*
 * @Author: your name
 * @Date: 2021-11-26 01:08:47
 * @LastEditTime: 2021-11-27 00:37:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%
 * @FilePath: \邂逅js高级\25_Promise的使用\10_Promise类方法-reject.js
 */
const promise = Promise.reject("rejected message");
//相当于
const promise2 = new Promise((resolve, reject) => {
  reject("rejected meesage");
});

promise
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log("err:", err);
  });
