/*
 * @Author: your name
 * @Date: 2021-11-22 12:15:08
 * @LastEditTime: 2021-11-23 01:41:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
 * @FilePath: \邂逅js高级\16_ES6知识点讲解\10_块级作用域的应用场景.js
 */
const btns = document.getElementsByTagName("button");

// for (var i = 0; i < btns.length; i++) {
//   (function(n) {
//     btns[i].onclick = function() {
//       console.log("第" + n + "个按钮被点击")
//     }
//   })(i)
// }

// console.log(i)

for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    console.log("第" + i + "个按钮被点击");
  };
}

// console.log(typeof (1).toString());

for (var i = 0; i < btns.length; i++) {
  (function (i) {
    btns[i].onclick = function () {
      console.log(`第${i}个按钮被点击了`);
    };
  })(i);
}
