/*
 * @Author: your name
 * @Date: 2021-10-27 19:38:28
 * @LastEditTime: 2021-10-28 09:32:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\04_js闭包的使用\01_函数作为一等公民.js
 */

//将函数作为另外一个函数的参数
// function foo(aaaa) {
//     aaaa()
// }
// function bar() {
//     console.log('bar')
// }
// foo(bar)
//分析代码。将bar当作参数参给foo foo在进行调用执行。


function calc(num1, num2, calcFn) {
    console.log(calcFn(num1, num2))
}

function add(num1, num2) {
    return num1 + num2
}

function sub(num1, num2) {
    return num1 - num2
}

function mul(num1, num2) {
    return num1 * num2
}

calc(1, 3, add)