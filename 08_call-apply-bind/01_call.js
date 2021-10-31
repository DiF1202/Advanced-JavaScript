/*
 * @Author: your name
 * @Date: 2021-10-30 09:37:38
 * @LastEditTime: 2021-10-30 14:35:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\08_call-apply-bind\01_call函数的实现.js
 */

Function.prototype.mycall = function (thisArg, ...args) {
    //先获取原本的函数
    var fn = this

    //对thisArg进行判断
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

    //
    thisArg.fn = fn

    var result = thisArg.fn(...args)

    delete thisArg.fn

    return result

}

function foo() {
    console.log(this)
}

foo.call()
foo.mycall('asd')