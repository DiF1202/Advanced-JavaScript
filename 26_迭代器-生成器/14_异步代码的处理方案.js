/*
 * @Author: your name
 * @Date: 2021-11-28 14:55:44
 * @LastEditTime: 2021-11-28 16:05:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\26_迭代器-生成器\14_异步代码的处理方案.js
 */
// function getDatas(url) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(url);
//     }, 200);
//   });
// }
// const promise = getDatas("hdf");
// promise.then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// 需求
// 1.url:hdf->res:hdf
// 2.url:hdf+"aaa" ->res:hdfaaa
// 3.url:res+"bbb" ->res:hdfaaabbb
//方案1
// getDatas("hdf").then((res) => {
//   getDatas(res + "aaa").then((res) => {
//     getDatas(res + "bbb").then((res) => {
//       console.log(res);
//     });
//   });
// });

// //第二个方案：用promise的then来解决
// getDatas("hdf")
//   .then((res) => {
//     return getDatas(res + "aaa");
//   })
//   .then((res) => {
//     return getDatas(res + "bbb");
//   });

function getDatas(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, 200);
  });
}

function* getDatas2() {
  const res1 = yield getDatas("why");
  const res2 = yield getDatas(res1 + "aaa");
  const res3 = yield getDatas(res2 + "bbb");
  const res4 = yield getDatas(res3 + "ccc");
  console.log(res4);
}

//手动执行生成器函数
// function execGenerator(genFn) {
//   const generator = genFn();
//   function exec(res) {
//     const result = generator.next(res);
//     if (result.done) {
//       return result.value;
//     }
//     result.value.then((res) => {
//       exec(res);
//     });
//   }
//   exec();
// }

// execGenerator(getDatas2);

// const co = require("co");
// co(getDatas2);

async function getDatas2() {
  const res1 = await getDatas("why");
  const res2 = await getDatas(res1 + "aaa");
  const res3 = await getDatas(res2 + "bbb");
  const res4 = await getDatas(res3 + "ccc");
  console.log(res4);
}

//async和await 本质就是yield和*的语法糖
