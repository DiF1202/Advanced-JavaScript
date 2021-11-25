/*
 * @Author: your name
 * @Date: 2021-11-25 18:44:53
 * @LastEditTime: 2021-11-25 20:46:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\24_响应式原理实现\04_自动监听对象变化.js
 */
class Depend {
  constructor() {
    this.reactiveFns = [];
  }

  addFn(fn) {
    this.reactiveFns.push(fn);
  }

  CarryoutFn() {
    this.reactiveFns.forEach((fn) => {
      fn();
    });
  }
}

const depend = new Depend();
function watchFn(fn) {
  depend.addFn(fn);
}

// 对象的响应式
const obj = {
  name: "why", // depend对象
  age: 18, // depend对象
};

const obj_proxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newvalue, receiver) {
    Reflect.set(target, key, newvalue, receiver);
    depend.CarryoutFn();
  },
});

watchFn(function () {
  console.log("响应式牛逼");
});
watchFn(function () {
  console.log("响应式牛逼");
});
watchFn(function () {
  console.log("响应式牛逼");
});

obj_proxy.name = "zwl";
