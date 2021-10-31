/*
 * @Author: your name
 * @Date: 2021-10-30 14:37:47
 * @LastEditTime: 2021-10-30 14:54:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\08_call-apply-bind\03_apply.js
 */

//实现自己的apply
Function.prototype.myapply = function (thisArg, argArray) {
    //1.获取要执行的函数
    var fn = this

    //对thisArg进行判断
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

    thisArg.fn = fn

    argArray = argArray || []

    var result = thisA.fn(...argArray)

    delete thisArg.fn

    return result
}

function foo() {
    console.log('我是foo', this)
}

