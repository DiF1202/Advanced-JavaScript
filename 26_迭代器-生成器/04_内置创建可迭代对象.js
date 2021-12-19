/*
 * @Author: your name
 * @Date: 2021-11-27 20:49:06
 * @LastEditTime: 2021-11-28 00:32:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\26_迭代器-生成器\04_内置创建可迭代对象.js
 */
const names = ["abc", "cba", "nba"];
console.log(names[Symbol.iterator]);

// const iterator1 = names[Symbol.iterator]()
// console.log(iterator1.next())
// console.log(iterator1.next())
// console.log(iterator1.next())
// console.log(iterator1.next())

for (const item of names) {
  console.log(item);
}

// Map/Set
const set = new Set();
set.add(10);
set.add(100);
set.add(1000);

console.log(set[Symbol.iterator]);

for (const item of set) {
  console.log(item);
}

// 函数中arguments也是一个可迭代对象
function foo(x, y, z) {
  console.log(arguments[Symbol.iterator]);
  for (const arg of arguments) {
    console.log(arg);
  }
}

foo(10, 20, 30);

const str1 = "asndkasndkasjd";

for (const item of str1) {
  console.log(item);
}

const obj11 = {
  name: "why",
  age: 100,
};

for (const key in obj11) {
  console.log(key);
}

