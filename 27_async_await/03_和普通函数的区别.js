/*
 * @Author: your name
 * @Date: 2021-11-28 16:43:23
 * @LastEditTime: 2021-11-28 16:59:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\27_async_await-事件循环\03_和普通函数的区别.js
 */
async function foo() {
  //   return "asda";
  return {
    then: function () {
      resolve(sss);
    },
  };
}
//异步函数的返回值一定是一个promise
const promise = foo();
promise.then((res) => {
  console.log(res);
});
// console.log(Object.getOwnPropertyDescriptors(promise.__proto__));
