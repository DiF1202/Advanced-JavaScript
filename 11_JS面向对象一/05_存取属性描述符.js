/*
 * @Author: your name
 * @Date: 2021-11-08 01:05:40
 * @LastEditTime: 2021-11-19 01:29:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\11_JS面向对象一\05_存取属性描述符.js
 */
var obj = {
  name: "why",
  age: 18,
  _address: "北京市",
};

// 存取属性描述符
// 1.隐藏某一个私有属性不希望直接被外界使用和赋值
// 2.如果我们希望截获某一个属性它访问和设置值的过程时, 也会使用存储属性描述符
Object.defineProperty(obj, "address", {
  enumerable: true,
  configurable: true,
  //value和writeable是补可以跟get和set共存的
  get: function () {
    foo();
    return this._address;
  },
  set: function (value) {
    bar();
    this._address = value;
  },
});

console.log(obj.address);

// obj.address = "上海市";
// console.log(obj.address);
// const a = obj._address;
function foo() {
  console.log("获取了一次address的值");
}

function bar() {
  console.log("设置了addres的值");
}

// 练习
var obj_pratice = {
  name: "hdf",
  age: 19,
  _phone: "asdwkdwknda",
};

Object.defineProperty(obj_pratice, "phone", {
  enumerable: true,
  configurable: true,
  get: function () {
    getPhone();
    return this._phone;
  },
  set: function (value) {
    setPhone();
    this._phone = value;
  },
});

function getPhone() {
  console.log("对象里面的phone被访问");
}
function setPhone() {
  console.log("对象里面的phone被改变了");
}

console.log(obj_pratice.phone);
