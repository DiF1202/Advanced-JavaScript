/*
 * @Author: your name
 * @Date: 2021-10-29 18:52:22
 * @LastEditTime: 2021-10-29 19:16:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\07_this其他补充\02_优先级-显示高于隐式绑定.js
 */
var obj = {
  name: 'obj',
  foo: function () {
    console.log(this)
  }
}

// obj.foo()
// 1.call/apply的显示绑定高于隐式绑定的
obj.foo.call('abc')
obj.foo.apply('abc')

//2.bind 隐式绑定
var bar = obj.foo.bind('abc')
bar()


//3.更明显的比较
function foo() {
  console.log(this)
}

var obj = {
  name: 'obj',
  foo: foo.bind('aaaa')
}

obj.foo()