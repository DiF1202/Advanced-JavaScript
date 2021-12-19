/*
 * @Author: your name
 * @Date: 2021-11-27 20:49:06
 * @LastEditTime: 2021-11-28 00:16:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\26_迭代器-生成器\03_认识什么是可迭代对象.js
 */

const iterableObj = {
  names: ["hdf", "zwl", "hch", "lzb"],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.names?.length) {
          return { done: false, value: this.names[index++] };
        } else {
          return { done: true, value: undefined };
        }
      },
    };
  },
};

//iterableObj就是一个可迭代对象
// console.log(iterableObj[Symbol.iterator])
// const iterator_one = iterableObj[Symbol.iterator]();
// console.log(iterator_one.next());
// console.log(iterator_one.next());
// console.log(iterator_one.next());
// console.log(iterator_one.next());
// console.log(iterator_one.next());
// const iterator_two = iterableObj[Symbol.iterator]();
// console.log(iterator_two.next());
// console.log(iterator_two.next());
// console.log(iterator_two.next());
// console.log(iterator_two.next());
// console.log(iterator_two.next());

const obj = {
  name: "why",
  age: 123,
};

for (const item of Object.entries(obj)) {
  console.log(item);
}
