/*
 * @Author: your name
 * @Date: 2021-11-27 20:49:06
 * @LastEditTime: 2021-11-27 23:23:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\26_迭代器-生成器\01_认识什么是迭代器.js
 */
//编写的一个迭代器
const iterator = {
  next: function () {
    return { done: true, value: 123 };
  },
};

//数组
const names = ["abc", "cba", "nba"];

//创建一个迭代器对象来访问数组
let index = 0;
const namesIterator = {
  next: function () {
    if (index < names.length) {
      return { done: false, value: names[index++] };
    } else {
      return { done: true, value: undefined };
    }
  },
};

console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
