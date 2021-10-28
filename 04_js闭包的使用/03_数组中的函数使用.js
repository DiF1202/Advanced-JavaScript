/*
 * @Author: your name
 * @Date: 2021-10-28 09:49:08
 * @LastEditTime: 2021-10-28 10:38:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\04_js闭包的使用\03_数组中的函数使用.js
 */

//首先了解一下 函数和方法的区别
//函数function:独立的function,那么称之为一个函数
// function foo() {

// }
//方法methods:当我们的一个函数属于某一个对线，我们称这个函数是这个对象的方法
// var obj = {
//     foo: function () {

//     }
// }
// obj.foo()


var nums = [10, 5, 11, 100, 55]
var newNums = []

//如果想筛选出数组中的偶数
// for (var i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 == 0) {
//         newNums.push(nums[i])
//     }
// }
// console.log(newNums)


//1.filter:过滤
//我们原本数组有五个，现在会调用五次
//item每一个成员,index下标,第三个参数 整个数组的引用
// nums.filter((item, index, arr) => boolean) 注意要求返回的是一个布尔类型！！！！！！！！！！！！！！！
// var arr1 = nums.filter(function (item) {
//     return item % 2 === 0//偶数
// })
// console.log(arr1)


//2.map映射
// var arr2 = nums.map(function (item) {
//     return item * 10
// })
// console.log(arr2)


//3.forEach:迭代 (没有返回值！！！！！！！！！！！！！！！！！！！！！！！！！！！)
// nums.forEach(function (item) {
//     console.log(item)
// })


//4.find/findIndex (es6~12)
// find()与filter()不同的地方是 filter返回的是一个数组 而find返回的则是一个对象
// var item = nums.find(function (item) {
//     return item === 11
// })
// console.log(item)
// var friends = [
//     { name: 'why', age: 18 },
//     { name: 'why1', age: 19 },
//     { name: 'why2', age: 20 },
//     { name: 'why3', age: 21 }
// ]
// var findFriend = friends.find(function (item) {
//     return item.name == 'why3'
// })
// console.log(findFriend)

// var findFriendIndex = friends.findIndex(function (item) {
//     return item.name === 'why3'
// })
// console.log(findFriendIndex)



//reduce:累加
const total = nums.reduce(function (preValue, item) {
    return preValue + item
}, 0)
console.log(total)
