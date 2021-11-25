/*
 * @Author: your name
 * @Date: 2021-11-22 12:15:08
 * @LastEditTime: 2021-11-22 15:11:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
 * @FilePath: \邂逅js高级\16_ES6知识点讲解\02_解构-数组的解构.js
 */
var names = ["何迪斐", "刘志斌", "张纹龙", "洪晨浩"];

// var [item1, item2, item3, item4] = names;

// var [item1, ...newArr] = names
var [,item1,,item2,item3="傻逼"] = names
console.log(item1);
console.log(item2);
console.log(item3);
