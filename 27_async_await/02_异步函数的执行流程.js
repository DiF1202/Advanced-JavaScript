/*
 * @Author: your name
 * @Date: 2021-11-28 16:33:44
 * @LastEditTime: 2021-11-28 16:41:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\27_async_await-事件循环\02_异步函数的执行流程.js
 */
async function foo() {
  console.log("内部代码执行1");
  console.log("内部代码执行2");
  console.log("内部代码执行3");
  console.log("内部代码执行4");
}

console.log("111111");
foo()
console.log("222222222222222222");
