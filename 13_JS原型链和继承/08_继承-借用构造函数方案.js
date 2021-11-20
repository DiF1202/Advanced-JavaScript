/*
 * @Author: your name
 * @Date: 2021-11-20 00:39:44
 * @LastEditTime: 2021-11-20 18:32:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEe
 * @FilePath: \邂逅js高级\13_JS原型链和继承\08_继承-借用构造函数方案.js
 */
function Person(name, age, phone, friends) {
  this.name = name;
  this.age = age;
  this.phone = phone;
  this.friends = friends;
}

Person.prototype.eating = function () {
  console.log(this.name + "很爱吃饭");
};

function Student(name, age, phone, friends, Number) {
  Person.call(this, name, age, phone, friends);
  //其实也是就是偷偷调用和下面代码是同等效应
  // this.name = name;
  // this.age = age;
  // this.phone = phone;
  this.Number = Number;
}

//继承
//调用这个就是为了继承父元素的内容
Student.prototype = new Person();

var stu = new Student("hdf", 20, 18906918002, ["小明，小红"], 251902112);
var stu2 = new Student("hdf", 20, 18906918002, ["小刚，小李"], 251902112);

// stu.eating();
// console.log(stu);
console.log(stu.friends)
stu.friends.push("why")
console.log(stu.friends)
console.log(stu2.friends)