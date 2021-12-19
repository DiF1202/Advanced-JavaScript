/*
 * @Author: your name
 * @Date: 2021-11-28 17:09:38
 * @LastEditTime: 2021-11-28 17:39:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\27_async_await-事件循环\05_async中使用await关键字.js
 */
function requestData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(222);
    }, 2000);
  });
}

async function foo() {
  const res = await requestData();
  //其实你可以把下面的代码看作是then里面执行的
  console.log("----------------");
  console.log(res);
  const res2 = await requestData();
  console.log(res2);
  const res3 = await requestData();
  console.log(res3);
}

foo();


// async function foo() {
//     const res1 = await requestData()
//     console.log("res1:",res1)
// }