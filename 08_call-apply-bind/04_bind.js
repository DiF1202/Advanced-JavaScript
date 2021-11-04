/*
 * @Author: your name
 * @Date: 2021-10-31 10:34:27
 * @LastEditTime: 2021-11-04 22:57:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\08_call-apply-bind\04_bind.js
 */
Function.prototype.hybind = function (thisArg, ...argArray) {
    // 1.获取到真实需要调用的函数
    var fn = this

    // 2.绑定this
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

    function proxyFn(...args) {
        // 3.将函数放到thisArg中进行调用
        thisArg.fn = fn
        // 特殊: 对两个传入的参数进行合并
        var finalArgs = [...argArray, ...args]
        var result = thisArg.fn(...finalArgs)
        delete thisArg.fn

        // 4.返回结果
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
