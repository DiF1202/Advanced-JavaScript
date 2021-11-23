/*
 * @Author: your name
 * @Date: 2021-11-23 02:41:19
 * @LastEditTime: 2021-11-24 01:50:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\17_ES6其他知识点\12_新增数据结构Map的使用.js
 */
const obj1 = { name: "why" };
const obj2 = { name: "kobe" };

const map = new Map();
map.set(obj1, "aaa");
map.set(obj2, "bbb");
console.log(map);

const map2 = new Map([
  [obj1, "aaa"],
  [obj2, "bbb"],
]);
console.log(map2);

//map常见方法
//1.size
console.log(map2.size);
//2.get(key) 获取
console.log(map2.get(obj1));
//3.has(key) 是否有？
console.log(map2.has(obj1));
//4.delete(key) 删除
map2.delete(obj1);
console.log(map2);
//5.clear() 清空所有元素
map2.clear();
console.log(map2);
//6.对map进行遍历

map.forEach((item, key) => {
  console.log(item, key);
});

for (const item of map) {
    console.log(item)
}

for (const [key, value] of map) {
    console.log(key,value)
}