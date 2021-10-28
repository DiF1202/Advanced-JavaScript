/*
 * @Author: your name
 * @Date: 2021-10-28 09:33:39
 * @LastEditTime: 2021-10-28 09:46:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\04_js闭包的使用\02_函数作为返回值使用.js
 */


//js语法允许函数内部再定义函数
// function foo() {
//     function bar() {
//         console.log("bar")
//     }

//     return bar
// }

// var fn = foo()
// fn()


function makeAdder(count) {
    function add(num) {
        return count + num
    }
    return add
}

var add = makeAdder(5)
//这里为什么count不会销毁 还会一直都是5呢？ 因为这时候这里形成了一次闭包
console.log(add(5))
console.log(add(10))

//高阶函数:把一个函数 如果接受另外一个函数作为参数，或者该函数会返回另外一个函数作为返回值的函数，那么这个函数是一个高阶函数