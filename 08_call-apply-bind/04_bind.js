/*
 * @Author: your name
 * @Date: 2021-10-31 10:34:27
 * @LastEditTime: 2021-11-05 11:15:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\08_call-apply-bind\04_bind.js
 */
Function.prototype.hybind = function (thisArg, ...argArray) {
    var fn = this

    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

    function proxyFn(...args) {
        thisArg.fn = fn
        var finalArgs = [...argArray, ...args]
        var result = thisArg.fn(finalArgs)
        delete thisArg.fn
        return result
    }

    return proxyFn
}

function foo() {
    console.log("foo被执行", this)
}

function sum(num1, num2, num3) {
    console.log(num1, num2, num3)
}

//系统bind的使用
// var bar = foo.bind('abc')
// bar()

// var newSum = sum.bind("aaa", 10, 20)
// newSum(30)

//使用自己定义的bind
var newSum = sum.hybind("aaa", 10, 20)
newSum(30)