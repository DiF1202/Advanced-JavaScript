/*
 * @Author: your name
 * @Date: 2021-10-31 10:34:27
 * @LastEditTime: 2021-10-31 11:03:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\08_call-apply-bind\04_bind.js
 */
Function.prototype.bind = function (thisArg, ...args) {
    //1.获取到真实需要调用的函数
    var fn = this
    //对thisArg进行判断
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

    function proxyFn() {
        thisArg.fn = fn
        var result = thisArg.fn()
        delete thisArg.fn
    }
    return proxyFn
}


function foo() {
    console.log('foo被执行', this)
}

function sum(num1, num2, num3) {
    console.log(num1, num2, num3)
}


//系统的bind使用
var bar = foo.bind('abc')
bar()
var newSum = sum.bind('aaa', 10, 20, 30, 40)
newSum()