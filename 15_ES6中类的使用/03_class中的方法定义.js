/*
 * @Author: your name
 * @Date: 2021-11-21 20:24:51
 * @LastEditTime: 2021-11-21 23:02:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\15_ES6中类的使用\03_class中的方法定义.js
 */
var names = ["张纹龙", "何迪斐", "刘志斌", "洪晨浩"];

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._address = "福州市";
  }

  running() {
    console.log(this.name + "爱跑部");
  }

  eating() {
    console.log(this.name + "爱吃饭");
  }

  //类的访问器方法
  get address() {
    return this._address;
  }

  set address(newvalue) {
    this._address = newvalue;
  }

  //类的静态方法(类方法)
  static randomCreate() {
    var index = Math.floor(Math.random() * names.length);
    var name = names[index];
    var age = Math.floor(Math.random() * 100);
    return new Person(name, age);
  }
}

let p1 = Person.randomCreate();
console.log(p1);
console.log(p1.address);

// for (let i = 0; i < 100; i++){
//   console.log(Person.randomCreate())
// }
