/*
 * @Author: your name
 * @Date: 2021-11-22 12:15:08
 * @LastEditTime: 2021-11-22 15:25:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\16_ES6知识点讲解\03_解构-对象的解构.js
 */
var obj = {
  name: "hdf",
  age: 19,
  height: 1.82,
};

//对象结构
var { name, age, height } = obj;
// console.log(name)
// console.log(age)
// console.log(height)

//你当然也可以只结构一项出来
var { age } = obj;
// console.log(age)

//对解构出来的东西进行二次命名
var { name: newName } = obj;
console.log(newName);

//如果不存在的东西 也可以重新命名 也可以重新赋值
var { address: newAddress = "广州市" } = obj;
console.log(newAddress);

//对函数参数进行解构
//这个参数是对象 传入一个参数即可
function foo({ name, age }) {
  console.log(name, age);
}
foo(obj)
