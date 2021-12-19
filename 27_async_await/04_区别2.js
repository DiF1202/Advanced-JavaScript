/*
 * @Author: your name
 * @Date: 2021-11-28 17:03:45
 * @LastEditTime: 2021-11-28 17:04:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\27_async_await-事件循环\04_区别2.js
 */
async function foo() {
  console.log("foo执行了");
  throw new Error("错误了");
}

foo().catch((err) => {
  console.log("我发现了错误是", err);
});

console.log("--------------------");
