/*
 * @Author: your name
 * @Date: 2021-11-26 01:08:47
 * @LastEditTime: 2021-11-26 20:34:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\25_Promise的使用\06_Promise对象方法-then.js
 */
// Promise有哪些对象方法
// console.log(Object.getOwnPropertyDescriptors(Promise.prototype));

const promise = new Promise((reslove, reject) => {
  reslove("hdhhdd");
});

// 1.同一个Promise可以被多次调用then方法
// 当我们的resolve方法被回调时, 所有的then方法传入的回调函数都会被调用
// promise.then((res) => {
//   console.log("res1:", res);
// });

// promise.then(res => {
//   console.log("res2:", res)
// })

// promise.then(res => {
//   console.log("res3:", res)
// })

// 2.then方法传入的 "回调函数: 可以有返回值
// then方法本身也是有返回值的, 它的返回值是Promise
// promise.then((res) => {
//   return "aaaa";
// });

// promise.then((res) => {
//   return new Promise((resolve, reject) => {
//     resolve("aaaa");
//   });
// });

// promise
//   .then((res) => {
//     return "aaaa";
//   })
//   .then((res) => {
//     console.log(res);
//     return "bbb";
//   })
//   .then((res) => {
//     console.log(res);
//   });

promise
  .then((res) => {
    return {
      then: function (resolve, reject) {
        resolve("11111");
      },
    };
  })
  .then((res) => {
    console.log(res);
  });
// promise
//   .then((res) => {
//     return {
//       then: function (resolve, reject) {
//         resolve(222222);
//       },
//     };
//   })
//   .then((res) => {
//     console.log("res:", res);
//   });
