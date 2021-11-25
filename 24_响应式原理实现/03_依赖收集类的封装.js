/*
 * @Author: your name
 * @Date: 2021-11-25 18:44:53
 * @LastEditTime: 2021-11-25 20:09:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%
 * @FilePath: \邂逅js高级\24_响应式原理实现\03_依赖收集类的封装.js
 */
class Depend {
  constructor() {
    this.reactiveFns = [];
  }

  addDepend(fn) {
    this.reactiveFns.push(fn);
  }

  notify() {
    this.reactiveFns.forEach((fn) => {
      fn();
    });
  }
}

const depend = new Depend();
function watchFn(fn) {
  depend.addDepend(fn);
}

// 对象的响应式
const obj = {
  name: "why", // depend对象
  age: 18, // depend对象
};

watchFn(function () {
  const newName = obj.name;
  console.log("你好啊, 李银河");
  console.log("Hello World");
  console.log(obj.name); // 100行
});

watchFn(function () {
  console.log(obj.name, "demo function -------");
});

obj.name = "kobe";
depend.notify();
