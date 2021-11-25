/*
 * @Author: your name
 * @Date: 2021-11-22 12:15:08
 * @LastEditTime: 2021-11-22 14:47:26
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\16_ES6知识点讲解\01_字面量增强的写法.js
 */
var name = "why";
var age = 18;

var obj = {
  // 1.property shorthand(属性的简写)
  name,
  age,

  // 2.method shorthand(方法的简写)
  foo: function () {
    console.log(this);
  },
  bar() {
    console.log(this);
  },
  baz: () => {
    console.log(this);
  },

  // 3.computed property name(计算属性名)
  [name + 123]: "hehehehe",
};

obj.baz();
obj.bar();
obj.foo();

// obj[name + 123] = "hahaha"
console.log(obj);

