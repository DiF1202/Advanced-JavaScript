/*
 * @Author: your name
 * @Date: 2021-10-29 00:25:11
 * @LastEditTime: 2021-10-29 18:52:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\06_js中this的指向\06_绑定规则三-显示绑定-apply-call.js
 */
function foo() {
  console.log("函数被调用了", this)
}

//直接调用和call/apply调用的不同在于this绑定的不同
//foo直接调用指向的是全局对象(window)
//foo()

var obj = {
  name: "hdf"
}

//call和apply是可以指定this的指向
foo.call(obj)
foo.apply(obj)

//2.call和apply有什么区别?
function sum(num1, num2) {
  console.log(num1 + num2, this)
}
sum.call('call', 20, 30, 40)
sum.apply("apply", [20, 30, 40])

//3.call和apply在执行函数时，是可以明确的绑定this，这个绑定规则称之为显示绑定
