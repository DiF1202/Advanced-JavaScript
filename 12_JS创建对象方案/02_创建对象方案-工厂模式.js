/*
 * @Author: your name
 * @Date: 2021-11-19 11:16:36
 * @LastEditTime: 2021-11-19 11:36:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\12_JS创建对象方案\02_创建对象方案-工厂模式.js
 */
// 工厂模式: 工厂函数
function createPerson(name, age, height, address) {
  var p = {};
  p.name = name;
  p.age = age;
  p.height = height;
  p.address = address;

  p.eating = function () {
    console.log(this.name + "在吃东西~");
  };

  p.running = function () {
    console.log(this.name + "在跑步~");
  };

  return p;
}

var p1 = createPerson("张三", 18, 1.88, "广州市");
var p2 = createPerson("李四", 20, 1.98, "上海市");
var p3 = createPerson("王五", 30, 1.78, "北京市");

// 工厂模式的缺点(获取不到对象最真实的类型)
console.log(p1, p2, p3);

function addperson(name, age, height) {
  var p = {};
  p.name = name;
  p.age = age;
  p.height = height;
  return p;
}
