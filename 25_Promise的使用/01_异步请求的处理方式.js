/*
 * @Author: your name
 * @Date: 2021-11-26 01:08:47
 * @LastEditTime: 2021-11-26 01:34:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%fu
 * @FilePath: \邂逅js高级\25_Promise的使用\01_异步请求的处理方式.js
 */
function getData(url, successFn, failFn) {
  //模拟网络请求
  setTimeout(() => {
    if (url === "coderwhy") {
      //成功
      let names = ["abs", "asdb", "asd"];
      successFn(names);
    } else {
      //失败
      let errMessage = "请求失败,url错误";
      failFn(errMessage);
    }
  }, 3000);
}

const result = getData(
  "coderwhy",
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
// console.log(result);
