/*
 * @Author: your name
 * @Date: 2021-10-29 19:43:49
 * @LastEditTime: 2021-10-29 19:43:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\07_this其他补充\测试代码.js
 */
function foo(el) {
    console.log(el, this.id)
}

var obj = {
    id: 'awesome'
}

var nums = [1, 2, 3]

nums.forEach(foo, obj)