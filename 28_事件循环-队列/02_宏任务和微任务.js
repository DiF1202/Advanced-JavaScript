/*
 * @Author: your name
 * @Date: 2021-11-28 19:25:26
 * @LastEditTime: 2021-11-28 20:27:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\28_事件循环-队列\02_宏任务和微任务.js
 */
setTimeout(function () {
  console.log("setTimeout1");

  new Promise(function (resolve) {
    resolve();
  }).then(function () {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      console.log("then4");
    });
    console.log("then2");
  });
});

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("then1");
});

setTimeout(function () {
  console.log("setTimeout2");
});

console.log(2);
queueMicrotask(() => {
  console.log("queueMircrotask");
});

new Promise(function (resolve) {
  resolve();
}).then(function () {
  console.log("then3");
});
