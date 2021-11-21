/*
 * @Author: your name
 * @Date: 2021-11-08 01:05:40
 * @LastEditTime: 2021-11-19 10:50:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\11_JS面向对象一\06_定义多个属性描述符.js
 */
var obj = {
  // 私有属性(js里面是没有严格意义的私有属性)
  _age: 18,
  _eating: function () {},
  set age(value) {
    this._age = value;
  },
  get age() {
    return this._age;
  },
};

Object.defineProperties(obj, {
  name: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "why",
  },
  age: {
    configurable: true,
    enumerable: true,
    get: function () {
      return this._age;
    },
    set: function (value) {
      this._age = value;
    },
  },
});

obj.age = 19;
// console.log(obj.age);

// console.log(obj);

// 以下代码为练习代码
var person = {
  //私有属性
  name: "hdf",
  _age: 18,
  _phone: 123456,
};

Object.defineProperties(person, {
  address: {
    value: "福州市",
    configurable: true,
    enumerable: true,
    writable: true,
  },
  phone: {
    configurable: false,
    enumerable: false,
    get: function () {
      return this._phone;
    },
    set: function (value) {
      this._phone = value;
    },
  },
});

console.log(person);
console.log(person.phone)
