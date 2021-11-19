/*
 * @Author: your name
 * @Date: 2021-11-19 11:16:36
 * @LastEditTime: 2021-11-19 11:54:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\12_JS创建对象方案\04_创建对象方案-构造函数.js
 */
// 规范: 构造函数的首字母一般是大写
function Person(name, age, height, address) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.address = address;

  this.eating = function () {
    console.log(this.name + "在吃东西~");
  };

  this.running = function () {
    console.log(this.name + "在跑步");
  };
}

var p1 = new Person("张三", 18, 1.88, "广州市");
var p2 = new Person("李四", 20, 1.98, "北京市");

// console.log(p1);
// console.log(p2);
// p1.eating();
// p2.eating();

function CreatePersons(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.eating = function () {
    console.log(this.name + "在吃东西~");
  };

  this.running = function () {
    console.log(this.name + "在跑步");
  };
}

var hdf = new CreatePersons("hdf", 123, "男");
console.log(hdf);
