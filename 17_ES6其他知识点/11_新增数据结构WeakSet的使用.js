/*
 * @Author: your name
 * @Date: 2021-11-23 02:41:19
 * @LastEditTime: 2021-11-24 01:25:22
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\17_ES6其他知识点\11_新增数据结构WeakSet的使用.js
 */
const weakSet = new WeakSet();

// 1.区别一: 只能存放对象类型
// TypeError: Invalid value used in weak set
// weakSet.add(10)

// 强引用和弱引用的概念(看图)

// 2.区别二: 对对象是一个弱引用
let obj = {
  name: "why",
};

// weakSet.add(obj)

const set = new Set();
// 建立的是强引用
set.add(obj);

// 建立的是弱引用
weakSet.add(obj);

// 3.WeakSet的应用场景
const personSet = new WeakSet();
class Person {
  constructor() {
    personSet.add(this);
  }

  running() {
    if (!personSet.has(this)) {
      throw new Error("不能通过非构造方法创建出来的对象调用running方法");
    }
    console.log("running~", this);
  }
}

let p = new Person();
p.running();
p = null;

p.running.call({ name: "why" });
