/*
 * @Author: your name
 * @Date: 2021-11-19 11:16:36
 * @LastEditTime: 2021-11-19 11:57:54
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\12_JS创建对象方案\05_构造函数的缺点.js
 */
function foo() {
  function bar() {

  }
  return bar
}

var fn1 = foo()
var fn2 = foo()

console.log(fn1 === fn2)  //false

