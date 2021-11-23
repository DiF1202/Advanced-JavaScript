// /*
//  * @Author: your name
//  * @Date: 2021-11-23 02:41:19
//  * @LastEditTime: 2021-11-24 00:01:48
//  * @LastEditors: Please set LastEditors
//  * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
//  * @FilePath: \邂逅js高级\17_ES6其他知识点\10_新增数据结构Set的使用.js
//  */
// const set = new Set();
// set.add(10);
// set.add(20);
// set.add(40);
// set.add(333);
// set.add(10); //重复添加就不会被添加了
// // set.add({});
// // set.add({});
// const obj = {};
// set.add(obj)
// set.add(obj)
// console.log(set);

//数组去重
const arr = [33, 10, 26, 30, 33, 26];
// const newArr = [];
// for (const item of arr) {
//   if (newArr.indexOf(item) == -1) {
//     newArr.push(item);
//   }
// }
// console.log(newArr);

// 使用set
const arrSet = new Set(arr);
// const result = Array.from(arrSet);
// const result2 = [...arrSet];
// console.log(result)
// console.log(result2)

//delete方法
// arrSet.delete(33)
// console.log(arrSet)
arrSet.forEach((item) => {
  console.log(item);
});

for (const item of arrSet) {
  console.log(item);
}
