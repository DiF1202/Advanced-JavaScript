/*
 * @Author: your name
 * @Date: 2021-11-28 11:03:35
 * @LastEditTime: 2021-11-28 12:59:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\26_迭代器-生成器\13_生成器替代迭代器使用.js
 */

//生成器来 替代 迭代器
function* createArrayIterator(arr) {
  //   yield* arr;
  for (const item of arr) {
    yield item;
  }
  //生成器使用
  //   let index = 0;
  //   yield arr[index++];
  //   yield arr[index++];
  //   yield arr[index++];
  //迭代器使用
  // return {
  //     next: function () {
  //     if (index < arr.length) {
  //         return { done: false, value: arr[index++] };
  //     } else {
  //         return { done: true, value: undefined };
  //     }
  //     },
  // };
}

// const names = ["abc", "cba", "nba"];
// const namesIterator = createArrayIterator(names);

// console.log(namesIterator.next());
// console.log(namesIterator.next());
// console.log(namesIterator.next());
// console.log(namesIterator.next());

//第二部分
//2.创建一个对象，这个函数可以迭代一个范围内的数字
//10 20
// function* createRangeIterator(start, end) {
//   let index = start;
//   while (index < end) {
//     yield index;
//     index++;
//   }
// }

// const rangeIterator = createRangeIterator(10, 20);
// console.log(rangeIterator.next());
// console.log(rangeIterator.next());
// console.log(rangeIterator.next());
// console.log(rangeIterator.next());
// console.log(rangeIterator.next());

//3.CLASS案例
class Classroom {
  constructor(address, name, students) {
    this.address = address;
    this.name = name;
    this.students = students;
  }

  entry(newStudent) {
    this.students.push(newStudent);
  }

  foo = () => {
    console.log("foo function");
  };

  //   [Symbol.iterator] = function* () {
  //     yield* this.students;
  //   };
  *[Symbol.iterator]() {
    yield* this.students;
  }
}

const classroom = new Classroom("福大晋江", "水城路1号", ["hdf", "lzb", "zwl"]);
classroom.foo();
