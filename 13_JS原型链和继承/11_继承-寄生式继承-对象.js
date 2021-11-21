/*
 * @Author: your name
 * @Date: 2021-11-20 19:13:03
 * @LastEditTime: 2021-11-21 00:01:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\13_JS原型链和继承\11_继承-寄生式继承-对象.js
 */

// var personObj = {
//   running: function () {
//     console.log("running");
//   },
// };

// function createStudent(name) {
//   var stu = Object.create(personObj);
//   stu.name = name;
//   stu.studying = function () {
//     console.log("studying~");
//   };
//   return stu;
// }

// var stuObj = createStudent("why");
// var stuObj1 = createStudent("kobe");
// var stuObj2 = createStudent("james");

var obj1 = {
  eating: function () {
    console.log("吃饭中Ing");
  },
};

function createPerson(name) {
  var newobj1 = Object.create(obj1);
  newobj1.name = name;
  newobj1.running = function () {
    console.log("跑步中");
  };
  return newobj1;
}

var t1 = createPerson("why")
var t2 = createPerson("hdf")
t1.eating()
t2.eating()
t1.running()
t2.running()