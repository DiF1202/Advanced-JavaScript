/*
 * @Author: your name
 * @Date: 2021-10-29 18:52:22
 * @LastEditTime: 2021-10-29 23:53:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\07_this其他补充\08_箭头函数的this获取.js
 */
// 1.测试箭头函数中this指向
// var name = "why"

// var foo = () => {
//   console.log(this)
// }

// foo()
// var obj = { foo: foo }
// obj.foo()
// foo.call("abc")
//以上全部都是指向window


// 2.应用场景
var obj = {
  data: [],
  getData: function () {
    // 发送网络请求, 将结果放到上面data属性中
    // 在箭头函数之前的解决方案
    // var _this = this
    // setTimeout(function() {
    //   var result = ["abc", "cba", "nba"]
    //   _this.data = result
    // }, 2000);
    // 箭头函数之后
    // setTimeout(() => {
    //   var result = ["abc", "cba", "nba"]
    //   this.data = result
    // }, 2000);

    //普通函数
    setTimeout(function () {
      console.log(this)
    }, 2000)
  }
}

obj.getData()
